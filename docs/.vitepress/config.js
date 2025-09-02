import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  base: '/ai-teaching/',
  title: 'Ứng dụng AI vào Giảng dạy',
  description: 'Khóa học toàn diện về việc ứng dụng Trí tuệ Nhân tạo trong Giáo dục và Giảng dạy',
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
      { text: 'Giới thiệu khóa học', link: '/introduction/intro' },
      { text: 'Tài nguyên', link: '/appendix/resources' },
      { text: 'GitHub', link: 'https://github.com/zukahai/ai-teaching' }
    ],

    sidebar: [
      {
        text: '📖 1. Giới thiệu khóa học',
        collapsed: false,
        items: [
          { text: '1.1 Mục tiêu học tập 🎯', link: '/introduction/muc-tieu' },
          { text: '1.2 Đối tượng học 👥', link: '/introduction/doi-tuong' },
          { text: '1.3 Cấu trúc khóa học 📋', link: '/introduction/cau-truc' },
          { text: '1.4 Phương pháp học tập 📚', link: '/introduction/phuong-phap' }
        ]
      },
      {
        text: '🤖 2. Cơ bản về AI',
        collapsed: true,
        items: [
          { text: '2.1 AI là gì? 🧠', link: '/ai-basics/ai-la-gi' },
          { text: '2.2 Lịch sử phát triển AI 📈', link: '/ai-basics/lich-su' },
          { text: '2.3 Các loại AI 🔍', link: '/ai-basics/cac-loai-ai' },
          { text: '2.4 Công cụ AI phổ biến 🛠️', link: '/ai-basics/cong-cu' }
        ]
      },
      {
        text: '🎓 3. AI trong Giáo dục',
        collapsed: true,
        items: [
          { text: '3.1 Tổng quan AI trong giáo dục 📊', link: '/ai-education/tong-quan' },
          { text: '3.2 Lợi ích của AI 💡', link: '/ai-education/loi-ich' },
          { text: '3.3 Thách thức và giải pháp ⚡', link: '/ai-education/thach-thuc' },
          { text: '3.4 Xu hướng tương lai 🚀', link: '/ai-education/xu-huong' }
        ]
      },
      {
        text: '💼 4. Ứng dụng thực tế',
        collapsed: true,
        items: [
          { text: '4.1 Soạn giáo án với AI 📝', link: '/applications/soan-giao-an' },
          { text: '4.2 Tạo nội dung học tập 🎨', link: '/applications/noi-dung' },
          { text: '4.3 Đánh giá và phản hồi 📊', link: '/applications/danh-gia' },
          { text: '4.4 Cá nhân hóa học tập 🎯', link: '/applications/ca-nhan-hoa' }
        ]
      },
      {
        text: '📚 5. Tài nguyên bổ sung',
        collapsed: true,
        items: [
          { text: 'Tham khảo nhanh 📋', link: '/appendix/cheatsheet' },
          { text: 'Câu hỏi thường gặp ❓', link: '/appendix/faq' },
          { text: 'Tài nguyên và liên kết 🔗', link: '/appendix/resources' }
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
      copyright: 'Bản quyền © 2024 - Tạo bởi zukahai'
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