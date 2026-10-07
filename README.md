# NOVA DIGITAL — Bài test Frontend

**Ứng viên:** Nguyễn Đức Chiến Công  
**Đơn vị ra đề:** Công ty TNHH Giải pháp số Hoàng Hà

Website giới thiệu doanh nghiệp NOVA DIGITAL, triển khai từ thiết kế Figma với hai kích thước tham chiếu **Desktop 1440px** và **Mobile 390px**. Bài làm tập trung vào bố cục responsive, cấu trúc nội dung và điều hướng từ khám phá dịch vụ đến liên hệ.

## Tài liệu bài nộp

| Hạng mục | Đường dẫn |
| --- | --- |
| Desktop — 1440px | [Figma Desktop](https://www.figma.com/design/U1p0d5MVJBZCjkUqPSWNRc?node-id=2-82) |
| Mobile — 390px | [Figma Mobile](https://www.figma.com/design/U1p0d5MVJBZCjkUqPSWNRc?node-id=2-224) |
| Sơ đồ hoạt động | [Biểu đồ Activity Diagram](<Biểu đồ activity diagram.png>) |
| Mã nguồn | [GitHub — nova-digital-fe](https://github.com/conghlovt/nova-digital-fe) |

Repository ở chế độ **public**, có thể xem mã nguồn mà không cần cấp quyền riêng. Link Figma cần quyền **View/Inspect** phù hợp để người nhận xem thiết kế. Diagram được đính kèm dưới dạng PNG; theo đề, phần này cần do ứng viên tự vẽ, không sử dụng AI. Các phần khác, bao gồm code, được phép sử dụng AI.

## Đối chiếu yêu cầu bài test

| Yêu cầu | Nội dung triển khai |
| --- | --- |
| Desktop 1440px và Mobile 390px | Cùng một trang responsive; bố cục thay đổi theo kích thước màn hình |
| Header: menu, logo, nút Liên hệ | Logo NOVA DIGITAL, điều hướng đến các section và nút Liên hệ; menu thu gọn trên mobile |
| Hero: thông điệp chính và CTA | Thông điệp giải pháp số, nút “Trao đổi dự án” và “Khám phá dịch vụ” |
| Social Proof | Bốn logo đối tác/khách hàng minh họa |
| Giới thiệu ngắn | Giới thiệu cách tiếp cận và các năng lực số |
| Dịch vụ/Sản phẩm dạng Grid/Card | Ba card: Thiết kế website, Phát triển phần mềm, Bảo trì & tối ưu |
| Lợi thế cạnh tranh | Ba lợi thế kèm mô tả cụ thể |
| Footer | Thương hiệu, điều hướng và thông tin bản quyền |

Phần **Liên hệ** được bổ sung để các CTA có đích đến rõ ràng. Luồng nội dung: Header → Hero → Social Proof → Giới thiệu → Dịch vụ → Lợi thế → Liên hệ → Footer.

## Công nghệ

- **React 19**: xây dựng giao diện theo component.
- **TypeScript strict**: kiểm tra kiểu dữ liệu.
- **Vite 7**: môi trường phát triển và production build.
- **CSS mobile-first**: bố cục Grid/Flexbox, biến CSS cho màu sắc.
- **Inter Variable**: font phục vụ tại chỗ qua Fontsource, hỗ trợ tiếng Việt.
- **ESLint và Playwright**: kiểm tra code và hành vi trình duyệt.

## Cài đặt và chạy

**Yêu cầu:** Node.js 22.12+ hoặc Node.js 24 và npm. Không cần biến môi trường, API key hay backend.

```bash
git clone https://github.com/conghlovt/nova-digital-fe.git
cd nova-digital-fe
npm ci --include=dev
npm run dev
```

Mở địa chỉ `Local` trong terminal, mặc định là `http://127.0.0.1:5173`. Nếu cổng đã được sử dụng, Vite chọn cổng khác.

### Build và xem bản production

```bash
npm run build
npm run preview
```

Kết quả build nằm trong `dist/`. Preview mặc định tại `http://127.0.0.1:4173`.

## Cấu trúc mã nguồn

```text
src/
├── components/
│   ├── layout/          # Header, Footer và điều hướng mobile
│   ├── sections/        # Các phần nội dung trang chủ
│   └── ui/              # Thành phần thương hiệu dùng chung
├── data/                # Dữ liệu doanh nghiệp, menu, dịch vụ, lợi thế
├── styles/              # CSS toàn cục và responsive
├── App.tsx              # Ghép trang chủ và giao diện 404
└── main.tsx             # Điểm khởi tạo ứng dụng
public/assets/           # Icon SVG từ Figma
tests/verify.mjs          # Kiểm tra responsive và điều hướng
```

## Tương tác và responsive

- Menu desktop và footer dẫn đến các section tương ứng.
- Menu mobile đóng khi chọn liên kết; phím Escape đóng menu và trả focus về nút mở.
- Hero chuyển từ hai cột trên desktop sang một cột trên mobile; CTA xếp dọc trên mobile.
- Logo chuyển từ bốn cột sang hai cột; dịch vụ chuyển từ ba cột sang một cột, có bố cục hai cột ở tablet.
- Nút “Trao đổi về dịch vụ” trên mỗi card dẫn đến phần Liên hệ.
- Có skip link đến nội dung chính, focus-visible và nhãn hỗ trợ trình đọc màn hình.
- Đường dẫn không tồn tại hiển thị giao diện 404 và liên kết về trang chủ.

## Kiểm tra đã thực hiện

| Kiểm tra | Kết quả |
| --- | --- |
| ESLint, TypeScript strict và production build | Đạt |
| Viewport 320, 390, 768, 1024 và 1440px | Không tràn ngang; icon hiển thị đúng kích thước |
| Quan sát giao diện 1440px và 390px | Đã kiểm tra ảnh chụp trang |
| Menu mobile, Escape, skip link và điều hướng section | Đạt |
| Thông báo liên hệ demo và giao diện 404 | Đạt |
| Console trong các luồng được kiểm tra | Không ghi nhận lỗi |

Chạy lại kiểm tra code:

```bash
npm run lint
npm run typecheck
npm run build
```

Để kiểm tra trình duyệt, cài Chromium cho Playwright và mở dev server ở cổng 5173:

```bash
npx playwright install chromium
npm run dev -- --port 5173 --strictPort
```

Trong terminal thứ hai:

```bash
node tests/verify.mjs
```

Script lưu ảnh chụp các viewport trong `artifacts/`; thư mục này không được commit vào Git. Các kết quả phản ánh phạm vi đã kiểm tra, không phải chứng nhận accessibility hay đánh giá hiệu suất Lighthouse.

## Phạm vi bản demo

NOVA DIGITAL, các logo đối tác, workspace và `hello@nova.example` là nội dung minh họa phục vụ bài test. Nút “Gửi email tư vấn” hiển thị thông báo **“Bản demo — yêu cầu chưa được gửi”**, không gửi email hoặc dữ liệu tới dịch vụ bên ngoài.

Dự án là frontend tĩnh, chưa có backend, analytics hay website được triển khai công khai. Bản demo đặt `noindex`; chưa cấu hình canonical/sitemap vì chưa có domain production. Giao diện 404 xử lý ở client; nếu triển khai thực tế, cần cấu hình hosting trả mã HTTP 404 phù hợp.
