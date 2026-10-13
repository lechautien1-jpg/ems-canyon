(() => {
  'use strict';
  const data = window.EMS_DATA;
  // Dán link mời Discord EMS CANYON vào đây (ví dụ: https://discord.gg/xxxxx).
  const DISCORD_URL = 'https://discord.gg/WG7y6mfQXg';
  const $ = sel => document.querySelector(sel);
  const toc = $('#tocList');
  const rules = $('#rulesList');
  const sidebar = $('#sidebar');
  const searchInput = $('#searchInput');
  const escapeHTML = str => String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const state = { mode: 'ems', chapter: 'tac-phong', query: '', expanded: new Set() };
  let toastTimeout;
  const chapterData = () => data[state.mode].chapters;
  const activeChapter = () => chapterData().find(c => c.id === state.chapter) || chapterData()[0];
  const searchableText = (r, c) => [c.title, r.title, r.id, r.summary, ...r.details].join(' ').toLocaleLowerCase('vi');
  function notify(message) {
    const el = $('#toast'); el.textContent = message; el.classList.add('visible');
    clearTimeout(toastTimeout); toastTimeout = setTimeout(() => el.classList.remove('visible'), 2300);
  }
  function collapseMobile() { sidebar.classList.remove('show'); $('#mobileMenu').setAttribute('aria-expanded', 'false'); }
  function selectMode(mode) {
    if (!data[mode]) return;
    state.mode = mode; state.chapter = data[mode].chapters[0].id;
    state.query = ''; searchInput.value = ''; state.expanded.clear();
    render(); collapseMobile();
  }
  function selectChapter(id) {
    if (!chapterData().some(c => c.id === id)) return;
    state.chapter = id; state.query = ''; searchInput.value = ''; state.expanded.clear();
    render(); collapseMobile();
    if (window.innerWidth < 851) $('#library').scrollIntoView({behavior:'smooth'});
  }
  function updateModeButtons() {
    document.querySelectorAll('.mode-btn').forEach(btn => {
      const active = btn.dataset.mode === state.mode;
      btn.classList.toggle('selected', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }
  function renderToc() {
    toc.innerHTML = chapterData().map((c, i) => `<button class="toc-item ${!state.query && c.id === state.chapter ? 'active' : ''}" data-chapter="${escapeHTML(c.id)}" type="button"><span class="toc-item-label"><span class="index">${i+1}.</span> ${escapeHTML(c.title)}</span><b>${c.rules.length}</b></button>`).join('');
    toc.querySelectorAll('[data-chapter]').forEach(btn => btn.addEventListener('click', () => selectChapter(btn.dataset.chapter)));
  }
  function currentItems() {
    const q = state.query.trim().toLocaleLowerCase('vi');
    const chapters = q ? chapterData() : [activeChapter()];
    return chapters.flatMap(c => c.rules.filter(r => !q || searchableText(r,c).includes(q)).map(r => ({r,c})));
  }
  function ruleId(rule, chapter) { return `${state.mode}-${chapter.id}-${rule.id}`; }
  function ruleHTML({r,c}) {
    const id = ruleId(r,c);
    const expanded = state.expanded.has(id);
    const safeTitle = escapeHTML(r.title);
    return `<article class="rule-card ${expanded?'expanded':''}" data-key="${escapeHTML(id)}">
      <div class="rule-summary"><div class="rule-symbol">${escapeHTML(c.icon)}</div><div class="rule-header"><h3>Điều ${r.id}: ${safeTitle}</h3><p>${escapeHTML(r.summary)}</p></div></div>
      <div class="rule-details" id="detail-${escapeHTML(id)}" ${expanded?'':'hidden'}><ul>${r.details.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul>${state.query?`<div class="rule-note">${escapeHTML(c.title)}</div>`:''}</div>
      <div class="rule-toolbar"><button type="button" class="more-btn" data-expand="${escapeHTML(id)}" aria-expanded="${expanded}" aria-controls="detail-${escapeHTML(id)}">${expanded?'Thu gọn ▲':'Xem chi tiết ▼'}</button><button type="button" class="copy-btn" data-copy="${escapeHTML(id)}" aria-label="Sao chép Điều ${r.id}">▢ Copy</button></div>
    </article>`;
  }
  function render() {
    updateModeButtons(); renderToc();
    const chapters = chapterData(); const chapter = activeChapter();
    const total = chapters.reduce((sum,c) => sum+c.rules.length,0);
    $('#ruleCount').textContent = state.query ? currentItems().length.toString() : String(total).padStart(2,'0');
    $('#chapterCount').textContent = String(chapters.length).padStart(2, '0');
    $('#modeCrumb').textContent = data[state.mode].label;
    const searching = Boolean(state.query.trim());
    $('#chapterKicker').textContent = searching ? 'TÌM KIẾM VĂN BẢN' : `CHƯƠNG ${String(chapters.indexOf(chapter)+1).padStart(2,'0')} — ${state.mode==='ems'?'QUY ĐỊNH NỘI BỘ':'QUY ĐỊNH CƯ DÂN'}`;
    $('#chapterTitle').textContent = searching ? 'Kết quả tra cứu' : chapter.title;
    $('#chapterDescription').textContent = searching ? `Đang tìm các quy định có chứa “${state.query.trim()}” trong mục ${data[state.mode].label}.` : chapter.description;
    const matched = currentItems();
    $('#searchNote').classList.toggle('hidden', !searching);
    $('#searchNote').textContent = searching ? `Tìm được ${matched.length} điều luật phù hợp với từ khóa “${state.query.trim()}”.` : '';
    rules.innerHTML = matched.map(ruleHTML).join('');
    $('#emptyState').classList.toggle('hidden', matched.length > 0);
    $('#approval').classList.toggle('hidden', searching && !matched.length);
    const allExpanded = matched.length > 0 && matched.every(({r,c})=>state.expanded.has(ruleId(r,c)));
    $('#expandAll').innerHTML = allExpanded?'Thu gọn tất cả <span>⌃</span>':'Mở tất cả <span>⌄</span>';
    rules.querySelectorAll('[data-expand]').forEach(btn=>btn.addEventListener('click',()=>{const id=btn.dataset.expand;state.expanded.has(id)?state.expanded.delete(id):state.expanded.add(id);render();}));
    rules.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{
      const item=matched.find(({r,c})=>ruleId(r,c)===btn.dataset.copy);
      if (!item) return;
      const {r,c}=item;
      const content=`${c.title}\nĐiều ${r.id}: ${r.title}\n${r.summary}\n${r.details.map((d,i)=>`${i+1}. ${d}`).join('\n')}`;
      try { await navigator.clipboard.writeText(content); notify('✓ Đã sao chép nội dung điều luật'); }
      catch { const textarea=document.createElement('textarea');textarea.value=content;textarea.style.position='fixed';textarea.style.opacity='0';document.body.appendChild(textarea);textarea.select();const success=document.execCommand('copy');textarea.remove();notify(success?'✓ Đã sao chép nội dung điều luật':'Trình duyệt không hỗ trợ sao chép tự động'); }
    }));
  }
  document.querySelectorAll('.mode-btn').forEach(btn=>btn.addEventListener('click',()=>selectMode(btn.dataset.mode)));
  $('#expandAll').addEventListener('click',()=>{
    const items = currentItems(); const allOpen=items.length&&items.every(({r,c})=>state.expanded.has(ruleId(r,c)));
    items.forEach(({r,c})=>{const id=ruleId(r,c);allOpen?state.expanded.delete(id):state.expanded.add(id);});render();
  });
  searchInput.addEventListener('input', e=>{state.query=e.target.value;state.expanded.clear();render();});
  $('#searchButton').addEventListener('click',()=>{if(!searchInput.value.trim())searchInput.focus();else $('#library').scrollIntoView({behavior:'smooth'});});
  $('#clearSearch').addEventListener('click',()=>{searchInput.value='';state.query='';render();searchInput.focus();});
  $('#mobileMenu').addEventListener('click',()=>{const open=sidebar.classList.toggle('show');$('#mobileMenu').setAttribute('aria-expanded',String(open));if(open)sidebar.scrollIntoView({behavior:'smooth',block:'start'});});
  $('#goHome').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  document.addEventListener('keydown', e=>{
    const typing=['INPUT','TEXTAREA'].includes(document.activeElement.tagName)||document.activeElement.isContentEditable;
    if((e.key==='/'&&!typing)||((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k')){e.preventDefault();searchInput.focus();searchInput.select();}
    if(e.key==='Escape' && document.activeElement===searchInput){searchInput.blur();if(searchInput.value){searchInput.value='';state.query='';render();}}
  });
  document.querySelectorAll('[data-discord-link]').forEach(link => {
    if (DISCORD_URL) { link.href = DISCORD_URL; }
    else { link.removeAttribute('target'); link.addEventListener('click', e => { e.preventDefault(); notify('Vui lòng thêm link Discord EMS CANYON trong script.js'); }); }
  });
  $('#year').textContent=new Date().getFullYear();
  render();
})();
