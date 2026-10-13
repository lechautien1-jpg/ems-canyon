# EMS CANYON — Bộ mã nguồn website

Bộ mã nguồn HTML/CSS/JavaScript hoạt động độc lập, dựng lại giao diện cổng tra cứu quy định cho **EMS CANYON**.

> **Lưu ý quan trọng:** Đây là bản **dựng lại từ giao diện công khai**, không phải bản sao mã nguồn gốc hoặc dữ liệu nội bộ của website. Các chi tiết chưa truy xuất công khai được **biên soạn làm nội dung mẫu**, không mang tính quy định chính thức. Giao diện cũng có thể khác so với bản gốc tại một số vị trí.

## Có gì trong bộ mã nguồn?

- Giao diện tiếng Việt dạng landing page + thư viện quy định EMS.
- Hai nhóm tra cứu **Cư dân** và **EMS**.
- Tìm kiếm nội dung/tên điều luật theo nhóm, phím tắt `/` hoặc `Ctrl+K`.
- Chuyển chương, xem/thu gọn từng quy định, mở toàn bộ, sao chép văn bản.
- Responsive cho máy tính, điện thoại, máy tính bảng.
- Liên kết Discord: để trống mặc định, tránh đưa người dùng đến server khác. Xem hướng dẫn bên dưới để cập nhật.
- Không yêu cầu tài khoản hay backend.

## Chạy trên máy tính

Cách nhanh nhất: **giải nén**, sau đó nhấp đúp file `index.html` để mở bằng Chrome hoặc Edge. Yêu cầu giữ nguyên các file trong cùng thư mục.

Nếu muốn chạy trên máy chủ cục bộ: cài Python và chạy:

```bash
python -m http.server 8000
```

Sau đó mở `http://localhost:8000`.

## Đưa lên Vercel

1. Tạo repository GitHub mới, tải **các file bên trong thư mục** `EMS-CANYON` lên repository.
2. Vào Vercel → **Add New Project** → import repository.
3. Chọn Framework Preset **Other**, Build Command để trống, Output Directory để trống (hoặc `.` nếu được yêu cầu).
4. Deploy và mở đường dẫn Vercel được cấp.

Có thể dùng Netlify Drop hoặc GitHub Pages tương tự vì đây là website tĩnh.

## Sửa tên thành phố, màu, nội dung

- Tên website đã đổi toàn bộ thành **EMS CANYON**; tùy chỉnh trong `index.html` và `data.js`.
- Tất cả nội dung luật: **`data.js`**. Mỗi chương là một phần tử trong `chapters`; mỗi điều có `id`, `title`, `summary`, `details`.
- Màu sắc: `styles.css` mục `:root`, đặc biệt `--teal`, `--bg`, `--surface`.
- Logic tìm kiếm / accordion: `script.js`.
- Discord: mở `script.js`, đặt `const DISCORD_URL = 'https://discord.gg/link-moi-cua-ban';` (thay bằng link thực tế). Khi chưa cấu hình, nút Discord chỉ hiển thị thông báo.

## Cấu trúc

```
EMS-CANYON/
├── index.html     # Bố cục
├── styles.css     # Thiết kế, responsive
├── data.js        # Nội dung từng chương, điều luật
├── script.js      # Tìm kiếm, chuyển tab, mở/đóng, copy
├── canyon-ems-logo.webp  # Logo dùng trong website
├── canyon-ems-logo.png   # Logo PNG nền trong suốt
├── favicon.png           # Biểu tượng tab trình duyệt
└── README.md             # Hướng dẫn
```


## Logo CANYON EMS

- `canyon-ems-logo.webp`: ảnh logo tối ưu hiển thị trên trang ở thanh đầu và banner.
- `canyon-ems-logo.png`: ảnh PNG có nền trong suốt, tiện dùng khi chia sẻ.
- `favicon.png`: biểu tượng của website trên tab trình duyệt.

Để đổi logo sau này, cập nhật tệp ảnh `canyon-ems-logo.webp` (giữ nguyên tên) và `favicon.png` nếu cần.
