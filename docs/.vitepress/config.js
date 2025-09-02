import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  base: '/ai-teaching/',
  title: 'Ứng dụng AI vào Giảng dạy',
  description: 'Khóa học toàn diện về ứng dụng AI trong giảng dạy - Hoàn toàn bằng tiếng Việt',
  lang: 'vi-VN',
  ignoreDeadLinks: true,
  
  mermaid: {
    // mermaid config options
  },

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          'vi-VN': {
            translations: {
              button: {
                buttonText: 'Tìm kiếm',
                buttonAriaLabel: 'Tìm kiếm tài liệu'
              },
              modal: {
                displayDetails: 'Hiển thị chi tiết',
                resetButtonTitle: 'Xóa tìm kiếm',
                backButtonTitle: 'Đóng tìm kiếm',
                noResultsText: 'Không tìm thấy kết quả',
                footer: {
                  selectText: 'để chọn',
                  navigateText: 'để điều hướng',
                  closeText: 'để đóng'
                }
              }
            }
          }
        }
      }
    },
    nav: [
      { text: 'Trang chủ', link: '/' },
      { text: 'Bắt đầu học', link: '/chuong-1/muc-tieu' },
      { text: 'Thực hành', link: '/chuong-7/soan-giao-an-gpt' },
      { text: 'GitHub', link: 'https://github.com/zukahai/ai-teaching' }
    ],

    sidebar: [
      {
        text: '📖 1. Giới thiệu khóa học',
        collapsed: false,
        items: [
          { text: '🎯 1.1 Mục tiêu học tập', link: '/chuong-1/muc-tieu' },
          { text: '👥 1.2 Đối tượng tham gia', link: '/chuong-1/doi-tuong' },
          { text: '✨ 1.3 Lợi ích khi ứng dụng AI', link: '/chuong-1/loi-ich' }
        ]
      },
      {
        text: '⚙️ 2. Kiến thức nền tảng về AI',
        collapsed: true,
        items: [
          { text: '🧠 2.1 AI là gì?', link: '/chuong-2/ai-la-gi' },
          { text: '🌐 2.2 Các nhánh của AI', link: '/chuong-2/cac-nhanh-ai' },
          { text: '📚 2.3 AI trong đời sống và giáo dục', link: '/chuong-2/ai-trong-giao-duc' }
        ]
      },
      {
        text: '🛠️ 3. Công cụ AI hỗ trợ giảng dạy',
        collapsed: true,
        items: [
          { text: '🗨️ 3.1 ChatGPT Free & các mô hình ngôn ngữ', link: '/chuong-3/chatgpt' },
          { text: '🎨 3.2 Công cụ tạo hình ảnh', link: '/chuong-3/tao-hinh-anh' },
          { text: '🎥 3.3 Công cụ tạo video & slide AI', link: '/chuong-3/tao-video-slide' },
          { text: '📝 3.4 Công cụ tạo câu hỏi & trắc nghiệm', link: '/chuong-3/tao-cau-hoi' }
        ]
      },
      {
        text: '📑 4. Ứng dụng AI trong soạn giảng',
        collapsed: true,
        items: [
          { text: '📖 4.1 Tạo giáo án thông minh', link: '/chuong-4/tao-giao-an' },
          { text: '🎬 4.2 Thiết kế slide giảng dạy nhanh', link: '/chuong-4/thiet-ke-slide' },
          { text: '🔎 4.3 Sinh ví dụ minh họa và bài tập', link: '/chuong-4/sinh-vi-du' },
          { text: '👩‍🏫 4.4 Tạo nội dung cá nhân hóa', link: '/chuong-4/ca-nhan-hoa' }
        ]
      },
      {
        text: '💼 5. Ứng dụng AI trong Microsoft Office',
        collapsed: true,
        items: [
          { text: '📝 5.1 Sử dụng AI trong Word', link: '/chuong-5/ai-trong-word' },
          { text: '📊 5.2 Sử dụng AI trong Excel', link: '/chuong-5/ai-trong-excel' },
          { text: '🎤 5.3 Sử dụng AI trong PowerPoint', link: '/chuong-5/ai-trong-powerpoint' },
          { text: '🌐 5.4 Tích hợp GPT Free vào Office', link: '/chuong-5/tich-hop-gpt' }
        ]
      },
      {
        text: '🏫 6. Ứng dụng AI trong quản lý lớp học',
        collapsed: true,
        items: [
          { text: '💬 6.1 Chatbot hỗ trợ học viên', link: '/chuong-6/chatbot-ho-tro' },
          { text: '📊 6.2 Tự động chấm bài & phản hồi', link: '/chuong-6/tu-dong-cham-bai' },
          { text: '📈 6.3 Theo dõi tiến độ học tập', link: '/chuong-6/theo-doi-tien-do' },
          { text: '🛤️ 6.4 Gợi ý lộ trình học cá nhân hóa', link: '/chuong-6/lo-trinh-ca-nhan' }
        ]
      },
      {
        text: '💡 7. Thực hành & Case Study',
        collapsed: true,
        items: [
          { text: '✍️ 7.1 Soạn giáo án bằng GPT Free', link: '/chuong-7/soan-giao-an-gpt' },
          { text: '🧾 7.2 Tạo bộ câu hỏi kiểm tra tự động', link: '/chuong-7/tao-cau-hoi-kiem-tra' },
          { text: '🎨 7.3 Dùng AI để thiết kế slide & hình ảnh', link: '/chuong-7/thiet-ke-ai' },
          { text: '🏆 7.4 Case Study: Lớp học áp dụng AI thực tế', link: '/chuong-7/case-study' }
        ]
      },
      {
        text: '⚖️ 8. Lưu ý và Đạo đức khi dùng AI',
        collapsed: true,
        items: [
          { text: '❗ 8.1 Hạn chế & sai sót của AI', link: '/chuong-8/han-che-ai' },
          { text: '📜 8.2 Bản quyền & nguồn tài nguyên', link: '/chuong-8/ban-quyen' },
          { text: '👨‍👩‍👧‍👦 8.3 Đảm bảo sự công bằng và minh bạch', link: '/chuong-8/cong-bang-minh-bach' }
        ]
      },
      {
        text: '🚀 9. Tổng kết & Định hướng tiếp theo',
        collapsed: true,
        items: [
          { text: '📚 9.1 Ôn tập & hệ thống kiến thức', link: '/chuong-9/on-tap' },
          { text: '🎯 9.2 Định hướng áp dụng lâu dài', link: '/chuong-9/dinh-huong' },
          { text: '🔗 9.3 Cơ hội nâng cao & tài nguyên học thêm', link: '/chuong-9/tai-nguyen' }
        ]
      }
    ],

    socialLinks: [
      { 
        icon: 'github', 
        link: 'https://github.com/zukahai/ai-teaching' 
      }
    ],

    footer: {
      message: 'Khóa học Ứng dụng AI vào Giảng dạy',
      copyright: 'Copyright © 2024 zukahai'
    },

    editLink: {
      pattern: 'https://github.com/zukahai/ai-teaching/edit/main/docs/:path',
      text: 'Chỉnh sửa trang này trên GitHub'
    },

    lastUpdated: {
      text: 'Cập nhật lần cuối',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  }
})