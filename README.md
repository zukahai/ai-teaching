## Deployment

Deploy tự động: Có một GitHub Actions workflow (`.github/workflows/deploy-docs.yml`) sẽ build site và publish nội dung trong `docs/.vitepress/dist` lên nhánh `gh-pages` khi có push vào `main`.

Deploy thủ công: Chạy `npm run docs:build` rồi publish nội dung của `docs/.vitepress/dist` lên nhánh `gh-pages` bằng cách bạn chọn (ví dụ dùng `gh-pages` local hoặc push thủ công).

# 🎓🤖 Ứng dụng AI vào Giảng dạy

Khóa học toàn diện về ứng dụng AI trong giảng dạy, được viết hoàn toàn bằng tiếng Việt và thiết kế dành cho người chưa biết gì về AI.

## 🌟 Đặc điểm nổi bật

- **🇻🇳 Hoàn toàn tiếng Việt** - Dễ hiểu cho người Việt
- **🆓 Tập trung công cụ miễn phí** - ChatGPT Free, Canva AI, Microsoft Office AI
- **📚 Từ cơ bản đến nâng cao** - Bắt đầu từ con số 0
- **💼 Thực hành ngay** - Ứng dụng trực tiếp vào công việc giảng dạy
- **🎯 Cho mọi cấp học** - Từ mầm non đến đại học

## 📖 Nội dung khóa học

### 📖 1. Giới thiệu khóa học
- 🎯 Mục tiêu học tập
- 👥 Đối tượng tham gia  
- ✨ Lợi ích khi ứng dụng AI

### ⚙️ 2. Kiến thức nền tảng về AI
- 🧠 AI là gì?
- 🌐 Các nhánh của AI (ML, NLP, CV...)
- 📚 AI trong đời sống và giáo dục

### 🛠️ 3. Công cụ AI hỗ trợ giảng dạy
- 🗨️ ChatGPT Free & các mô hình ngôn ngữ
- 🎨 Công cụ tạo hình ảnh (Canva AI, DALL·E free)
- 🎥 Công cụ tạo video & slide AI
- 📝 Công cụ tạo câu hỏi & trắc nghiệm tự động

### 📑 4. Ứng dụng AI trong soạn giảng
- 📖 Tạo giáo án thông minh
- 🎬 Thiết kế slide giảng dạy nhanh
- 🔎 Sinh ví dụ minh họa và bài tập
- 👩‍🏫 Tạo nội dung cá nhân hóa cho học viên

### 💼 5. Ứng dụng AI trong Microsoft Office
- 📝 Sử dụng AI trong Word (viết giáo án, tóm tắt, chỉnh sửa)
- 📊 Sử dụng AI trong Excel (phân tích dữ liệu, tạo bảng điểm)
- 🎤 Sử dụng AI trong PowerPoint (tạo slide tự động, gợi ý thiết kế)
- 🌐 Tích hợp GPT Free vào Office qua web & add-ins

### 🏫 6. Ứng dụng AI trong quản lý lớp học
- 💬 Chatbot hỗ trợ học viên
- 📊 Tự động chấm bài & phản hồi
- 📈 Theo dõi tiến độ học tập
- 🛤️ Gợi ý lộ trình học cá nhân hóa

### 💡 7. Thực hành & Case Study
- ✍️ Soạn giáo án bằng GPT Free
- 🧾 Tạo bộ câu hỏi kiểm tra tự động
- 🎨 Dùng AI để thiết kế slide & hình ảnh
- 🏆 Case Study: Lớp học áp dụng AI thực tế

### ⚖️ 8. Lưu ý và Đạo đức khi dùng AI
- ❗ Hạn chế & sai sót của AI
- 📜 Bản quyền & nguồn tài nguyên
- 👨‍👩‍👧‍👦 Đảm bảo sự công bằng và minh bạch

### 🚀 9. Tổng kết & Định hướng tiếp theo
- 📚 Ôn tập & hệ thống kiến thức
- 🎯 Định hướng áp dụng lâu dài
- 🔗 Cơ hội nâng cao & tài nguyên học thêm

## 🚀 Bắt đầu học

### 📱 Trực tuyến
Truy cập: **[zukahai.github.io/ai-teaching](https://zukahai.github.io/ai-teaching)**

### 💻 Chạy local

1. **Clone repository**
   ```bash
   git clone https://github.com/zukahai/ai-teaching.git
   cd ai-teaching
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   ```

3. **Chạy development server**
   ```bash
   npm run docs:dev
   ```

4. **Build để deploy**
   ```bash
   npm run docs:build
   ```

## 🎯 Đối tượng học

- **Giáo viên phổ thông** các cấp học
- **Giảng viên đại học** và cao đẳng
- **Người làm đào tạo** trong doanh nghiệp
- **Học sinh, sinh viên** muốn hỗ trợ học tập
- **Phụ huynh** muốn hỗ trợ con em

## 📚 Cấu trúc bài học

Mỗi bài học đều tuân theo format:

- **🎯 Giới thiệu & Liên hệ thực tế** - Tình huống cụ thể
- **🔧 Khái niệm & Cú pháp** - Hướng dẫn từng bước
- **🔬 Phân tích & Giải thích chi tiết** - Tại sao và khi nào dùng
- **💻 Ví dụ minh họa** - Demo thực tế với công cụ
- **🏋️ Thực hành** - Bài tập từ cơ bản đến nâng cao
- **📋 Tóm tắt & Chuẩn bị cho bài sau** - Ôn tập và liên kết

## 🛠️ Công nghệ sử dụng

- [VitePress](https://vitepress.dev/) - Static site generator
- [Vue 3](https://vuejs.org/) - Frontend framework
- [Markdown](https://www.markdownguide.org/) - Content format
- [Mermaid](https://mermaid.js.org/) - Diagrams

## 📄 License

Dự án này được phát hành dưới giấy phép MIT - xem file [LICENSE](LICENSE) để biết chi tiết.

## 🤝 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp! Hãy tạo Pull Request hoặc mở Issue để thảo luận.

## 📞 Liên hệ

- **GitHub**: [@zukahai](https://github.com/zukahai)
- **Email**: [zukahai@gmail.com](mailto:zukahai@gmail.com)

---

*"AI không thay thế giáo viên, nhưng giáo viên sử dụng AI sẽ thay thế giáo viên không sử dụng AI"*