import { useEffect, useRef, useState } from 'react';
import { navigation } from '../../data/company';
import { Brand } from '../ui/Brand';
export function Header() {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!isMenuOpen) return;
    const close = (event: KeyboardEvent) => { if(event.key === 'Escape') {setIsMenuOpen(false);toggle.current?.focus();} };
    const media = window.matchMedia('(min-width: 1024px)');
    const resize = () => { if(media.matches) setIsMenuOpen(false); };
    window.addEventListener('keydown',close);media.addEventListener('change',resize);
    return () => {window.removeEventListener('keydown',close);media.removeEventListener('change',resize);};
  },[isMenuOpen]);
  return <header className="header"><div className="container header-inner"><Brand/><nav className="desktop-nav" aria-label="Điều hướng chính">{navigation.slice(0,3).map(item=><a key={item.id} href={`/#${item.id}`}>{item.label}</a>)}</nav><a className="button header-contact" href="/#contact">Liên hệ</a><button ref={toggle} className="menu-toggle" aria-label={isMenuOpen?'Đóng menu':'Mở menu'} aria-expanded={isMenuOpen} aria-controls="mobile-menu" onClick={()=>setIsMenuOpen(!isMenuOpen)}>{isMenuOpen?<span className="close-icon">×</span>:<img src="/assets/menu.svg" alt=""/>}</button></div><nav id="mobile-menu" className="mobile-nav container" aria-label="Điều hướng trên điện thoại" hidden={!isMenuOpen}>{navigation.map(item=><a key={item.id} href={`/#${item.id}`} onClick={()=>setIsMenuOpen(false)}>{item.label}</a>)}</nav></header>;
}
