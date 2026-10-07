# NOVA DIGITAL — Bài test FE — Nguyễn Đức Chiến Công

React, TypeScript strict và Vite; CSS mobile-first. Thiết kế tham chiếu: https://www.figma.com/design/U1p0d5MVJBZCjkUqPSWNRc (desktop `2:82`, mobile `2:224`).

## Chạy dự án

Node.js 22.12+ hoặc 24. `npm ci`, sau đó `npm run dev`. Kiểm tra: `npm run lint`, `npm run typecheck`, `npm run build`. Xem bản build: `npm run preview`.

Kiểm tra trình duyệt: `npx playwright install chromium`, chạy dev server ở cổng 5173 rồi `node tests/verify.mjs`. Ảnh chụp các viewport được lưu ở `artifacts/`.

## Phạm vi

Trang chủ gồm Header, Hero, Social Proof, Giới thiệu, Dịch vụ, Lợi thế, Liên hệ và Footer. Menu mobile hỗ trợ bàn phím và Escape. CTA dịch vụ dẫn tới liên hệ. URL không tồn tại hiển thị trang 404; khi triển khai cần cấu hình hosting trả HTTP 404 tương ứng.

Thương hiệu, logo đối tác, workspace và email là minh họa. Nút email hiển thị thông báo demo, không gửi thư. Bản demo có noindex; chưa có domain production nên không tạo canonical/sitemap. Chưa có backend, analytics, cookie, trang pháp lý hoặc diagram. Diagram bài nộp do ứng viên tự vẽ theo quy tắc.

Icon tải từ Figma và lưu trong `public/assets`; font Inter tự host từ gói Fontsource (giấy phép OFL đi kèm gói). Figma dùng cùng icon web trên ba card, giữ theo nguồn thiết kế. Không có biến môi trường bắt buộc.
