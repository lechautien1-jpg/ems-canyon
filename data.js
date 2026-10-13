/**
 * THÔNG TIN QUY ĐỊNH — CÓ THỂ CHỈNH SỬA.
 * Các tiêu đề, đoạn dẫn và tính năng dựa trên thông tin công khai của website tham khảo.
 * Phần chi tiết chưa truy xuất được từ website gốc được BIÊN SOẠN LÀM MẪU;
 * không được coi là quy định chính thức của EMS CANYON.
 *
 * Mỗi chương có: id, title, description, icon, rules.
 * Mỗi rule có: id, title, summary, details (mảng các dòng mô tả).
 */
window.EMS_DATA = {
  ems: {
    label: 'Bộ luật nội bộ EMS',
    description: 'Những quy trình và nguyên tắc dành cho nhân viên y tế EMS.',
    chapters: [
      {
        id: 'tac-phong', title: 'Quy định chung & Tác phong', icon: '📋',
        description: 'Các nguyên tắc nền tảng dành cho đội ngũ y tế EMS CANYON.',
        rules: [
          {id: 1, title: 'Quy định chung', summary: 'Nhân viên EMS cần làm việc nghiêm túc, giao tiếp lịch sự và cư xử đúng mực với người dân.', details: [
            'Tôn trọng người bệnh, đồng nghiệp và cư dân; không sử dụng ngôn ngữ xúc phạm hay kích động tranh cãi.',
            'Giữ hình ảnh chuyên nghiệp của bệnh viện trong suốt quá trình thực hiện nhiệm vụ.',
            'Tuân thủ chỉ đạo của cấp quản lý và quy định roleplay của máy chủ.'
          ]},
          {id: 2, title: 'Quy định khi đang trong ca trực', summary: 'Khi thực hiện nhiệm vụ, nhân viên phải sử dụng trang phục và phương tiện đúng quy định ngành.', details: [
            'Bật trạng thái ON-DUTY theo quy trình trước khi nhận nhiệm vụ.',
            'Sử dụng đồng phục, trang bị và phương tiện chuyên dụng đã được phân quyền.',
            'Không tự ý rời ca, sử dụng công cụ ngành vào mục đích riêng hay bỏ mặc ca cấp cứu.'
          ]}
        ]
      },
      {
        id: 'cap-cuu', title: 'Quy trình Cấp cứu (SOP)', icon: '🚑',
        description: 'Từ tiếp nhận thông tin đến điều phối, tiếp cận và xử lý tình huống cấp cứu.',
        rules: [
          {id: 3, title: 'Tiếp nhận tín hiệu cấp cứu', summary: 'Kiểm tra tín hiệu hỗ trợ và xác minh địa điểm trước khi xuất phát.', details: [
            'Tiếp nhận đơn qua hệ thống được máy chủ cho phép và chủ động thông báo cho đồng đội.',
            'Xác định vị trí, mức độ nguy hiểm, số lượng nạn nhân và tình trạng khu vực.',
            'Ưu tiên an toàn, không lao vào hiện trường có xung đột chưa kết thúc.'
          ]},
          {id: 4, title: 'Phối hợp tại hiện trường', summary: 'Phối hợp với lực lượng PD và EMS khác để bảo đảm an toàn trước khi tiếp cận bệnh nhân.', details: [
            'Giữ liên lạc với đơn vị phối hợp khi hiện trường có yếu tố nguy hiểm.',
            'Chỉ bắt đầu xử lý khi hiện trường đủ an toàn theo quy định roleplay.',
            'Đưa bệnh nhân đến cơ sở y tế khi tình huống và quy trình cho phép.'
          ]}
        ]
      },
      {
        id: 'thiet-bi', title: 'Sử dụng Trang thiết bị & Xe', icon: '🚐',
        description: 'Quy tắc sử dụng và bảo quản xe cấp cứu, dụng cụ y tế và tài sản của bệnh viện.',
        rules: [
          {id: 5, title: 'Phương tiện chuyên dụng', summary: 'Chỉ sử dụng xe và phương tiện được cấp quyền để phục vụ công tác EMS.', details: [
            'Dùng đúng phương tiện được phân công, điều khiển an toàn và đúng tình huống roleplay.',
            'Không dùng xe ngành để đua xe, vận chuyển trái phép hoặc làm việc cá nhân.',
            'Đỗ, bảo quản và bàn giao xe theo quy trình của bệnh viện.'
          ]},
          {id: 6, title: 'Trang thiết bị y tế', summary: 'Sử dụng vật tư cấp cứu đúng mục đích, không trao đổi hay lạm dụng công cụ nghề nghiệp.', details: [
            'Chỉ sử dụng công cụ ngành trong các tình huống phù hợp với vai trò được cấp.',
            'Theo dõi lượng vật tư và báo cáo khi cần cấp bổ sung.',
            'Không sử dụng trang bị trái mục đích hoặc tự ý chuyển cho người không có thẩm quyền.'
          ]}
        ]
      },
      {
        id: 'ung-xu', title: 'Quy tắc Ứng xử', icon: '🤝',
        description: 'Quy chuẩn giao tiếp, phối hợp và tương tác roleplay cùng cư dân và đồng nghiệp.',
        rules: [
          {id: 7, title: 'Giao tiếp với cư dân', summary: 'Giữ thái độ bình tĩnh, lịch sự khi tiếp xúc và giải thích quy trình cho người cần hỗ trợ.', details: [
            'Tiếp nhận thông tin với thái độ tôn trọng, không thiên vị.',
            'Tránh tranh cãi hoặc sử dụng từ ngữ có tính công kích trong quá trình làm việc.'
          ]},
          {id: 8, title: 'Thông tin và quyền riêng tư', summary: 'Không công bố tùy tiện thông tin liên quan đến người bệnh hoặc hoạt động của bệnh viện.', details: [
            'Chỉ chia sẻ thông tin phục vụ nhiệm vụ với người có thẩm quyền.',
            'Không tận dụng thông tin trong ca trực cho các mục đích bên ngoài roleplay.'
          ]},
          {id: 9, title: 'Phối hợp trong đội ngũ', summary: 'Tôn trọng đồng nghiệp, trao đổi thông tin rõ ràng và chủ động phối hợp nhiệm vụ.', details: [
            'Báo cáo tình huống khó hoặc vượt thẩm quyền cho người phụ trách.',
            'Tránh bỏ vị trí hoặc tự ý nhận nhiệm vụ đang được người khác phụ trách.'
          ]},
          {id: 10, title: 'Giải quyết bất đồng', summary: 'Xử lý mâu thuẫn đúng kênh, không tạo căng thẳng trong lúc đang cứu người.', details: [
            'Ưu tiên xử lý ca trực đang diễn ra trước khi giải quyết mâu thuẫn cá nhân.',
            'Chuyển tranh chấp nội bộ về kênh quản lý hoặc người có trách nhiệm.'
          ]},
          {id: 11, title: 'Thực hiện Roleplay y tế', summary: 'Đảm bảo quá trình điều trị có tương tác nhập vai phù hợp với quy định máy chủ.', details: [
            'Thực hiện lời thoại và thao tác phù hợp tình huống roleplay.',
            'Không lạm dụng lỗi game, phá vai hoặc cố ý làm gián đoạn trải nghiệm người khác.'
          ]}
        ]
      },
      {
        id: 'ky-luat', title: 'Hệ thống Kỷ luật', icon: '⚖️',
        description: 'Khung xử lý, giải trình và trách nhiệm khi có hành vi vi phạm nội quy.',
        rules: [
          {id: 12, title: 'Nhắc nhở và hướng dẫn', summary: 'Các lỗi nhẹ có thể được ghi nhận và nhắc nhở để nhân viên kịp thời điều chỉnh.', details: ['Người phụ trách xác minh tình huống và hướng dẫn cách khắc phục.', 'Việc nhắc nhở cần công bằng và dựa trên dữ liệu rõ ràng.']},
          {id: 13, title: 'Vi phạm mức độ nhẹ', summary: 'Các vi phạm không gây hậu quả nghiêm trọng được xem xét theo quy định hiện hành.', details: ['Xác minh diễn biến và tiền sử xử lý trước khi áp dụng hình thức kỷ luật.', 'Tham khảo khung mức phạt chính thức do ban quản lý ban hành.']},
          {id: 14, title: 'Vi phạm mức độ nghiêm trọng', summary: 'Các hành vi ảnh hưởng lớn đến uy tín EMS hoặc công tác cứu hộ cần được báo cáo cấp trên.', details: ['Lập biên bản hoặc lưu bằng chứng khi phát hiện sự việc.', 'Không tự quyết định mức xử lý vượt thẩm quyền.']},
          {id: 15, title: 'Tạm đình chỉ công tác', summary: 'Tạm ngừng phân công nhiệm vụ khi cần kiểm tra, xác minh vấn đề liên quan nhân viên.', details: ['Quyết định phải có căn cứ và do người có thẩm quyền đưa ra.', 'Thông báo rõ phạm vi và thời hạn theo quyết định nội bộ.']},
          {id: 16, title: 'Đình chỉ và danh sách cấm', summary: 'Xử lý các trường hợp vi phạm đặc biệt nghiêm trọng theo quy trình quản lý của máy chủ.', details: ['Xem xét thông tin, bằng chứng và quy định đang có hiệu lực.', 'Quyết định cuối cùng thuộc về bộ phận quản lý được phân quyền.']},
          {id: 17, title: 'Giải trình và khiếu nại', summary: 'Nhân viên có quyền cung cấp thông tin, bằng chứng và đề nghị xem xét lại quyết định.', details: ['Nộp khiếu nại hoặc bản giải trình qua đúng kênh hỗ trợ.', 'Tôn trọng thời gian xem xét và không quấy rối người xử lý.']},
          {id: 18, title: 'Tái phạm và trách nhiệm', summary: 'Các trường hợp tái phạm được xem xét cùng lịch sử xử lý và mức độ ảnh hưởng.', details: ['Theo dõi việc khắc phục sau xử lý.', 'Khung kỷ luật thực tế có thể thay đổi theo quy định chính thức.']}
        ]
      }
    ]
  },
  resident: {
    label: 'Quy định dành cho cư dân',
    description: 'Các hướng dẫn khi cư dân đến bệnh viện hoặc yêu cầu hỗ trợ y tế.',
    chapters: [
      {
        id: 'cu-dan', title: 'Quy định đối với cư dân', icon: '📋',
        description: 'Những điều cư dân cần tuân thủ tại bệnh viện và khi tiếp xúc với EMS.',
        rules: [
          {id: 1, title: 'Tôn trọng nhân viên y tế', summary: 'Không gây rối, xúc phạm, đe dọa hoặc ngăn cản công việc của nhân viên EMS.', details: ['Giữ thái độ lịch sự trong khuôn viên bệnh viện và khi được cấp cứu.', 'Không cố ý gây mất trật tự, tấn công hay quấy rối nhân viên y tế.']},
          {id: 2, title: 'Hỗ trợ cấp cứu đúng quy trình', summary: 'Cung cấp địa điểm rõ ràng, không gửi tín hiệu cấp cứu liên tục gây nhiễu.', details: ['Mô tả vị trí, đặc điểm khu vực để EMS tiếp cận nhanh hơn.', 'Không tự ý di chuyển nạn nhân khi đã có EMS xử lý nếu chưa được phép.']},
          {id: 3, title: 'Giữ an toàn và trật tự', summary: 'Không giả danh EMS, phá xe ngành hoặc gây bạo lực, đua xe tại bệnh viện.', details: ['Không đeo mặt nạ trong bệnh viện nếu nội quy máy chủ không cho phép.', 'Các tình huống giao tranh phải kết thúc trước khi yêu cầu điều trị theo quy định.']}
        ]
      },
      {id:'dang-ky',title:'Đăng ký khám bệnh',icon:'📝',description:'Hướng dẫn cư dân đăng ký và chờ đến lượt khám.',rules:[
        {id:4,title:'Tiếp nhận đăng ký khám',summary:'Liên hệ quầy tiếp nhận hoặc nhân viên trực để được hướng dẫn đăng ký.',details:['Cung cấp thông tin cần thiết cho quá trình roleplay khám bệnh.','Chờ được hướng dẫn thay vì tự ý vào khu điều trị.']},
        {id:5,title:'Thứ tự và ưu tiên khám',summary:'Tuân thủ thứ tự tiếp nhận; trường hợp cấp cứu được xem xét ưu tiên.',details:['Không chen ngang, gây ồn ào hoặc cản trở bệnh nhân khác.']}
      ]},
      {id:'kham',title:'Trong quá trình khám',icon:'🏥',description:'Quy tắc cư dân cần tuân thủ khi được nhân viên y tế thăm khám.',rules:[
        {id:6,title:'Hợp tác với bác sĩ',summary:'Phối hợp để nhân viên EMS hoàn thành quy trình thăm khám roleplay.',details:['Tương tác và cung cấp thông tin hợp lý với tình trạng nhân vật.','Giữ trật tự trong phòng khám và khu cấp cứu.']},
        {id:7,title:'Sử dụng cơ sở vật chất',summary:'Không tự ý sử dụng thuốc, trang thiết bị hoặc phương tiện thuộc bệnh viện.',details:['Báo nhân viên trực khi cần hỗ trợ.']}
      ]},
      {id:'roleplay',title:'Quy định Roleplay',icon:'🎭',description:'Bảo đảm trải nghiệm nhập vai đúng chuẩn với đội ngũ EMS.',rules:[
        {id:8,title:'Nhập vai hợp lý',summary:'Tuân thủ tình huống y tế, không tự ý bỏ qua thao tác chữa trị khi chưa có đồng thuận.',details:['Tránh lạm dụng lỗi game hoặc phá vỡ mạch câu chuyện.']},
        {id:9,title:'Tình huống giao tranh',summary:'Ưu tiên quy định an toàn khi tình huống truy đuổi hoặc giao tranh chưa kết thúc.',details:['Không kéo EMS vào tình huống đang có nguy hiểm không được phép.']}
      ]},
      {id:'vien-phi',title:'Thanh toán viện phí',icon:'💰',description:'Nguyên tắc thanh toán các khoản phí theo quy định tại bệnh viện.',rules:[
        {id:10,title:'Thanh toán sau điều trị',summary:'Thanh toán viện phí theo mức phí được công bố tại thời điểm sử dụng dịch vụ.',details:['Nếu chưa rõ khoản phí, hãy hỏi nhân viên y tế hoặc người phụ trách.']}
      ]},
      {id:'truong-hop',title:'Trường hợp cấp cứu',icon:'🚨',description:'Các lưu ý dành cho cư dân khi báo vị trí hoặc yêu cầu nhân viên EMS hỗ trợ.',rules:[
        {id:11,title:'Gửi tín hiệu cấp cứu',summary:'Gửi thông tin và vị trí rõ ràng để lực lượng y tế hỗ trợ kịp thời.',details:['Không spam tín hiệu, thay đổi vị trí liên tục hoặc cung cấp tọa độ giả.']},
        {id:12,title:'Chờ đội ngũ EMS',summary:'Khi đã yêu cầu cấp cứu, hãy phối hợp với bác sĩ và tuân thủ hướng dẫn tại hiện trường.',details:['Thông báo nếu vị trí có nguy hiểm hoặc khó tiếp cận.']}
      ]},
      {id:'phan-hoi',title:'Góp ý, tố cáo và khiếu nại',icon:'📣',description:'Nơi tiếp nhận phản hồi liên quan đến quy trình và chất lượng phục vụ.',rules:[
        {id:13,title:'Gửi góp ý và khiếu nại',summary:'Gửi ý kiến hoặc bằng chứng vi phạm qua các kênh hỗ trợ chính thức của máy chủ.',details:['Nội dung phản hồi cần rõ ràng, đúng sự thật và có thái độ tôn trọng.']},
        {id:14,title:'Xử lý vi phạm',summary:'Bộ phận quản lý xem xét và xử lý phản ánh dựa trên bằng chứng và nội quy hiện hành.',details:['Các mức phạt cụ thể cần tham khảo tài liệu chính thức của máy chủ.']}
      ]}
    ]
  }
};
