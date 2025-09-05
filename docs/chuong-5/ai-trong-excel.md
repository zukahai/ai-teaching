---
title: AI trong Excel
---

# AI trong Excel — Hướng dẫn chi tiết cho người mới

Mục tiêu bài này: giúp bạn hiểu và thực hành các công cụ thông minh trong Excel để quản lý bảng điểm, phân tích dữ liệu lớp và tạo báo cáo một cách nhanh chóng. Không cần kiến thức lập trình — chỉ làm theo các bước hướng dẫn.

Nội dung gồm: khái niệm đơn giản, từng bước thực hành, ví dụ cụ thể, công thức mẫu và bài tập để luyện tay.

---

## 1. Khái niệm cơ bản (rất đơn giản)

- Excel là chương trình bảng tính. AI ở đây có nghĩa là các tính năng tự động giúp gợi ý công thức, tạo biểu đồ, tóm tắt dữ liệu hoặc gợi ý nhận xét. Bạn vẫn là người kiểm soát — AI chỉ hỗ trợ.

Thuật ngữ cần biết:
- Prompt: lời mô tả bạn gửi cho AI (nếu dùng ChatGPT hoặc Copilot).
- Ideas / Analyze Data: tính năng trong Excel gợi ý biểu đồ và phân tích.
- Flash Fill: tự điền/chuẩn hóa dữ liệu dựa trên mẫu bạn cho.
- Power Query: công cụ nhập và làm sạch dữ liệu.

## 2. Chuẩn bị dữ liệu mẫu

Tạo một file Excel mới và thêm sheet `BangDiem` với dữ liệu mẫu (bắt đầu ở A1):

| A (Họ tên) | B (MaHS) | C (Toan) | D (Van) | E (Anh) |
|------------|---------:|--------:|-------:|-------:|
| Nguyen Van A | HS001 | 8.5 | 7.0 | 8.0 |
| Tran Thi B    | HS002 | 6.0 | 6.5 | 5.5 |
| Le Van C      | HS003 | 9.0 | 8.5 | 9.0 |

Lưu file: `BangDiem_Lop.xlsx`.

## 3. Phân tích nhanh bằng "Ideas / Gợi ý"

1. Chọn toàn bộ vùng A1:E4 (bao gồm tiêu đề).
2. Trên ribbon (thanh công cụ), tìm `Analyze Data` hoặc `Ideas` (tùy phiên bản Excel, có thể là tiếng Việt "Gợi ý").
3. Excel sẽ hiển thị gợi ý: biểu đồ phân phối điểm, trung bình theo môn, học sinh có điểm cao/ thấp.
4. Chọn một gợi ý bạn thích và nhấn "Insert" để chèn vào sheet.

Lưu ý: nếu không thấy tính năng, bạn có thể cập nhật Office hoặc dùng Excel Online (OneDrive).

## 4. Công thức cơ bản (cách người mới hiểu)

- Tính điểm trung bình 1 học sinh (ô F2):

```
=AVERAGE(C2:E2)
```

- Tính điểm trung bình cả lớp cho môn Toán (ở dưới bảng hoặc ô riêng):

```
=AVERAGE(C2:C100)
```

- Xếp loại đơn giản (ô G2):

```
=IF(F2>=8,"Giỏi",IF(F2>=6.5,"Khá","Cần cố gắng"))
```

Giải thích ngắn: AVERAGE tính trung bình; IF kiểm tra điều kiện và trả về chữ.

## 5. Tự động hóa thao tác lặp (Flash Fill & Power Query)

- Flash Fill (tách họ và tên):
	1. Giả sử cột A có "Nguyen Van A". Ở cột H gõ "Nguyen" tương ứng ô H2.
	2. Excel gợi ý điền tiếp cho các ô còn lại — nhấn Ctrl+E để tự điền.

- Power Query (gộp nhiều file điểm):
	1. Data → Get Data → From Folder → Chọn thư mục chứa nhiều file Excel.
	2. Power Query sẽ liệt kê các file; chọn Combine → Transform Data để làm sạch (xoá cột thừa, đổi tên).
	3. Load dữ liệu đã kết hợp vào sheet mới.

## 6. Mẫu prompt và cách dùng ChatGPT/Copilot với Excel

Ví dụ prompt (dùng khi bạn sao chép dữ liệu vào ChatGPT hoặc bật Copilot):

"Từ bảng điểm sau, hãy cho tôi: điểm trung bình từng môn, 3 học sinh có điểm trung bình cao nhất, 3 học sinh cần hỗ trợ, và một đoạn nhận xét ngắn cho phụ huynh. Dữ liệu: [paste dữ liệu]."

AI sẽ trả về văn bản. Bạn copy kết quả về Excel hoặc Word.

## 7. Ví dụ nâng cao: tạo nhận xét tự động (mẫu công thức)

Ví dụ: ô H2 chứa nhận xét tự động:

```
=IF(F2>=8,"Em học tốt. Gợi ý: nâng cao bài tập thực hành.",IF(F2>=6.5,"Tiến bộ, cần tập trung hơn vào Toán.","Cần bổ sung ôn luyện và hỗ trợ thêm."))
```

## 8. Office Script (ví dụ đơn giản) — tự động tóm tắt dữ liệu

Ghi chú: Office Script chạy trên Excel Online (OneDrive / SharePoint). Đây là ví dụ minh họa, bạn cần thay `YOUR_API_KEY` nếu tích hợp API.

```javascript
// Office Script - minh họa: tính điểm trung bình và ghi vào cột F
function main(workbook: ExcelScript.Workbook) {
	const sheet = workbook.getWorksheet("BangDiem");
	const used = sheet.getUsedRange();
	if (!used) return;
	const values = used.getValues();
	// giả sử hàng 0 là tiêu đề
	for (let r = 1; r < values.length; r++) {
		const toan = Number(values[r][2]) || 0;
		const van = Number(values[r][3]) || 0;
		const anh = Number(values[r][4]) || 0;
		const avg = Math.round(((toan + van + anh) / 3) * 10) / 10;
		sheet.getRangeByIndexes(r, 5, 1, 1).setValues([[avg]]); // cột F (index 5)
	}
}
```

## 9. Bảo mật và lưu ý khi dùng AI

- Không gửi thông tin nhạy cảm (số chứng minh, địa chỉ, email) cho dịch vụ AI công khai.
- Trước khi dùng ChatGPT/Copilot, xóa hoặc thay thế thông tin cá nhân bằng mã ẩn (ví dụ: HS001 thay cho họ tên đầy đủ).
- Luôn kiểm tra lại kết quả AI — đôi khi AI có thể hiểu sai dữ liệu.

## 10. Bài tập thực hành (theo bước)

1. Tạo file `BangDiem_Lop.xlsx` với 10 học sinh và 3 môn.
2. Dùng Ideas để sinh biểu đồ phân bố điểm từng môn.
3. Viết công thức tính điểm trung bình và xếp loại.
4. Dùng Flash Fill để tách họ và tên.
5. (Tuỳ chọn) Tạo Office Script nhỏ để tự động tính trung bình cho toàn bảng.

---

Nếu bạn muốn, tôi có thể tạo sẵn file mẫu (`BangDiem_Lop.xlsx`) và một Office Script để bạn tải lên OneDrive và chạy thử.
Nội dung ngắn gọn, dễ hiểu để bạn bắt đầu dùng các tính năng thông minh trong Excel nhằm tiết kiệm thời gian khi quản lý điểm và phân tích dữ liệu lớp học.

## 1. AI có thể làm gì trong Excel
- Gợi ý công thức thông minh và sửa lỗi cơ bản
- Đề xuất biểu đồ phù hợp từ dữ liệu thô
- Tóm tắt và phân tích nhanh (xu hướng, điểm ngoại lệ)
- Tự động chuẩn hóa dữ liệu (tách họ tên, loại bỏ trùng)

## 2. Bắt đầu nhanh — ví dụ thực hành (5 phút)
1. Tạo bảng điểm với các cột: Họ tên, Mã HS, Toán, Văn, Anh.
2. Chọn vùng dữ liệu và dùng tính năng gợi ý phân tích (Ideas / Gợi ý) để xem các biểu đồ và nhận xét tự động.
3. Chọn một đề xuất phù hợp và chèn vào báo cáo.

> Ghi chú: Tên các chức năng trên giao diện có thể khác nhau theo ngôn ngữ Excel. Tìm mục có tên tương tự "Gợi ý" hoặc "Analyze Data".

## 3. Công thức thường dùng (dễ hiểu)
- Tính điểm trung bình: =AVERAGE(C2:E2)
- Tính xếp loại đơn giản:
```
=IF(AVERAGE(C2:E2)>=8,"Giỏi",IF(AVERAGE(C2:E2)>=6.5,"Khá","Cần cố gắng"))
```

## 4. Tự động hóa thao tác lặp lại
- Dùng Flash Fill để tách họ và tên.
- Dùng Power Query để nối nhiều file điểm và làm sạch dữ liệu.
- Dùng Office Scripts (Excel Online) để chạy tự động trên OneDrive.

## 5. Mẫu prompt (khi dùng ChatGPT/Copilot)
"Từ bảng điểm này, viết nhận xét ngắn cho mỗi học sinh: nêu 1 điểm mạnh và 1 gợi ý cải thiện."

## 6. Mẹo bảo mật
- Trước khi gửi dữ liệu ra dịch vụ bên ngoài, loại bỏ hoặc mã hóa thông tin cá nhân (mã HS hoặc họ tên đầy đủ).
- Lưu API key ở nơi an toàn, không chia sẻ công khai.

## 7. Bài tập thực hành
1. Tạo bảng điểm cho 10 học sinh.
2. Dùng tính năng gợi ý để sinh biểu đồ và nhận xét chung cho cả lớp.
3. Viết một công thức tạo nhận xét tự động cho từng học sinh.

---
Thực hành xong, nếu bạn muốn tôi sẽ chuyển ví dụ thành script Office Script mẫu để bạn chạy trực tiếp trên Excel Online.