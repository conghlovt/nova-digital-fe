import { advantages, services } from '../../data/company';
export function SocialProof() {
  return <section className="social-proof" aria-label="Logo minh họa khách hàng và đối tác"><div className="container stack"><p className="eyebrow muted">KHÁCH HÀNG & ĐỐI TÁC</p><div className="logo-grid">{['◉ orbit','◇ LUMEN','△ vertex','▰ MONO'].map(logo=><p key={logo}>{logo}</p>)}</div></div></section>;
}
export function About() {
  return <section id="about" className="section"><div className="container stack"><p className="eyebrow">VỀ NOVA DIGITAL</p><h2>Công nghệ phù hợp. Giá trị lâu dài.</h2><div className="about-grid"><div className="stack"><p className="lead">Chúng tôi bắt đầu bằng việc lắng nghe bài toán của doanh nghiệp, từ đó xây dựng trải nghiệm số phù hợp với người dùng và mục tiêu phát triển.</p>{['Hiểu nhu cầu','Thiết kế rõ ràng','Phát triển bền vững'].map(text=><p className="check" key={text}>✓ {text}</p>)}</div><div className="capabilities"><h3>Một nền tảng. Nhiều khả năng.</h3>{['Website — Kết nối khách hàng','Ứng dụng — Tối ưu công việc','Dữ liệu — Hỗ trợ quyết định'].map(text=><p key={text}>{text}</p>)}</div></div></div></section>;
}
export function Services() {
  return <section id="services" className="section soft"><div className="container stack"><p className="eyebrow">DỊCH VỤ CỐT LÕI</p><h2>Giải pháp cho từng nhu cầu</h2><p className="lead">Tập trung vào điều doanh nghiệp cần, để tạo ra giá trị có thể sử dụng.</p><div className="service-grid">{services.map(service=><article className="service-card" key={service.title}><div className="service-icon"><img src="/assets/web.svg" alt=""/></div><h3>{service.title}</h3><p className="service-subtitle">{service.subtitle}</p><p>{service.body}</p><a className="text-link" aria-label={`Trao đổi về ${service.title}`} href="/#contact">Tìm hiểu thêm →</a></article>)}</div></div></section>;
}
export function Advantages() {
  return <section id="advantages" className="section"><div className="container stack"><p className="eyebrow">LỢI THẾ CẠNH TRANH</p><h2>Vì sao chọn NOVA DIGITAL?</h2><div className="advantages-grid">{advantages.map((advantage,index)=><article className="advantage" key={advantage.title}><p className="number">0{index+1}</p><h3>{advantage.title}</h3><p>{advantage.body}</p></article>)}</div></div></section>;
}
