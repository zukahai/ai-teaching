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
          'en-US': {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search docs'
              },
              modal: {
                displayDetails: 'Display details',
                resetButtonTitle: 'Clear search',
                backButtonTitle: 'Close search',
                noResultsText: 'No results found',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
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
        text: '📋 Introduction',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/introduction/intro' },
        ]
      },
      {
        text: '� Appendix',
        collapsed: true,
        items: [
          { text: 'Quick Reference', link: '/appendix/cheatsheet' },
          { text: 'FAQ', link: '/appendix/faq' },
          { text: 'Resources', link: '/appendix/resources' }
        ]
      }
    ],

    socialLinks: [
      { 
        icon: 'github', 
        link: 'https://github.com/yourusername/your-project' 
      }
    ],

    footer: {
      message: 'Modern documentation template',
      copyright: 'Copyright © 2024'
    },

    editLink: {
      pattern: 'https://github.com/yourusername/your-project/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  }
})