---
title: Tích hợp GPT vào quy trình làm việc
---

# Tích hợp GPT vào quy trình làm việc (dành cho người mới)

Mục tiêu của bài này là hướng dẫn cách sử dụng GPT (ví dụ: ChatGPT hoặc Copilot) kết hợp với Microsoft Office để:
- Tự động tạo báo cáo, giáo án, câu hỏi kiểm tra.
- Tóm tắt hoặc rút gọn nội dung từ dữ liệu như bảng điểm.
- Áp dụng các biện pháp bảo vệ thông tin cá nhân khi cần gửi dữ liệu cho dịch vụ bên ngoài.

Nội dung viết bằng tiếng Việt, dễ hiểu cho người mới bắt đầu, đi kèm ví dụ thực tế và mã minh họa đơn giản.

## 1. Khái niệm cơ bản
- GPT là mô hình sinh văn bản: bạn gửi prompt và nhận về văn bản theo yêu cầu.
- Khi tự động gọi GPT từ chương trình, bạn thường cần một API key — hãy giữ bí mật và lưu an toàn.
- Tránh gửi dữ liệu nhạy cảm (số điện thoại, email, mã học sinh) tới dịch vụ công cộng.

## 2. Quy trình tổng quát (4 bước)
1. Chuẩn bị dữ liệu trong Excel (ví dụ: danh sách học sinh và điểm).
2. Viết script nhỏ (Office Script, macro hoặc Power Automate) để đọc dữ liệu.
3. Tạo prompt mô tả rõ ràng yêu cầu gửi tới GPT.
4. Nhận kết quả và chèn lại vào Word/Excel/PowerPoint hoặc gửi email cho phụ huynh.

## 3. Ví dụ Office Script (mã minh họa)
Đoạn mã sau là ví dụ đơn giản chạy trên Excel Online (Office Script). Mục đích: lấy dữ liệu, tạo prompt, gọi API GPT và ghi kết quả vào ô. Đây là mẫu tham khảo — thay apiKey và endpoint theo nhà cung cấp bạn dùng.

```javascript
// Office Script - ví dụ minh họa
async function main(workbook) {
  const sheet = workbook.getWorksheet('BangDiem');
  const range = sheet.getRange('A1:E6'); // A1 tiêu đề, A2:E6 dữ liệu
  const values = range.getValues();

  // Chuyển dữ liệu thành chuỗi ngắn để làm prompt
  let dataText = '';
  for (let i = 1; i < values.length; i++) {
    dataText += `${values[i][0]} | ${values[i][2]} | ${values[i][3]} | ${values[i][4]}\n`;
  }

  const prompt = `Từ dữ liệu sau, viết nhận xét 1 câu cho mỗi học sinh:\n${dataText}`;

  // LƯU Ý: không để API key trực tiếp trong mã nguồn công khai
  const apiKey = 'REPLACE_API_KEY';
  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
    body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }] })
  });
  const j = await resp.json();
  const answer = j.choices?.[0]?.message?.content || 'Không có kết quả';

  // Ghi kết quả vào ô G2
  sheet.getRange('G2').setValue(answer);
}
```

Ghi chú: dùng Power Automate để lưu khóa an toàn hoặc dùng secret store; Office Script trên Excel Online không thích hợp để lưu API key công khai.

## 4. Cách làm an toàn với dữ liệu học sinh
- Trước khi gửi dữ liệu lên GPT, hãy loại bỏ hoặc ẩn các thông tin cá nhân (dùng mã HS, chỉ gửi điểm/nhận xét tổng quát).
- Nếu cần xử lý dữ liệu nhạy cảm, hãy yêu cầu hợp đồng bảo mật (DPA) với nhà cung cấp hoặc xử lý trên hệ thống nội bộ.

## 5. Mẫu prompt dễ dùng
"Từ bảng điểm gồm: tên viết tắt, điểm Toán, điểm Văn, viết 1 câu nhận xét ngắn cho mỗi học sinh, nêu 1 điểm mạnh và 1 gợi ý cải thiện."

## 6. Các cách tích hợp (tóm tắt)
- Thủ công: copy/paste dữ liệu vào ChatGPT web và sao chép kết quả về Excel/Word.
- Semi-automated: dùng browser extension (ChatGPT Writer) để tạo sidebar và thao tác nhanh.
- Tự động: dùng Office Script hoặc Power Automate để gọi API và chèn kết quả tự động.

## 7. Công cụ miễn phí hữu ích
- ChatGPT Free (web)
- ChatGPT Writer (extension)
- AutoHotkey (để tạo phím tắt copy/paste nhanh)

## 8. Quy trình triển khai nhanh (15–30 phút)
1. Tạo file Excel mẫu với 5 học sinh.
2. Thử prompt thủ công trên chat.openai.com.
3. Khi kết quả ổn, chuyển sang Office Script hoặc Power Automate để tự động.

## 9. Lưu ý pháp lý và bảo mật
- Không upload ảnh hoặc dữ liệu nhạy cảm của học sinh.
- Kiểm tra chính sách trường trước khi dùng dịch vụ bên thứ ba.
- Ghi lại log, kiểm tra và duyệt kết quả do AI sinh ra.

---

Nếu bạn muốn, tôi có thể tạo sẵn Office Script mẫu, viết hướng dẫn Power Automate chi tiết, hoặc tạo template email để gửi kết quả cho phụ huynh.