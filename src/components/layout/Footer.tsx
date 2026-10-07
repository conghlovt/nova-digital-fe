import { company, navigation } from '../../data/company';
import { Brand } from '../ui/Brand';
export function Footer() {
  return <footer className="footer"><div className="container stack"><Brand/><p>Giải pháp số cho trải nghiệm tốt hơn.</p><nav aria-label="Điều hướng chân trang">{navigation.map(item=><a key={item.id} href={`/#${item.id}`}>{item.label}</a>)}</nav><p className="copyright">© {company.year} {company.name}</p></div></footer>;
}
