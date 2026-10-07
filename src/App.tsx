import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { SocialProof, About, Services, Advantages } from './components/sections/Content';
import { Contact } from './components/sections/Contact';
export function App() {
  const isHome = window.location.pathname === '/';
  return <><a className="skip-link" href="#main">Chuyển đến nội dung chính</a><Header/><main id="main" tabIndex={-1}>{isHome?<><Hero/><SocialProof/><About/><Services/><Advantages/><Contact/></>:<section className="section"><div className="container stack"><p className="eyebrow">404</p><h1>Không tìm thấy trang</h1><p>Đường dẫn này không tồn tại.</p><a className="button" href="/">Về trang chủ</a></div></section>}</main><Footer/></>;
}
