import { useState } from 'react';
import { company } from '../../data/company';
export function Contact() {
  const [isDemoNoticeVisible,setIsDemoNoticeVisible] = useState(false);
  return <section id="contact" className="section contact"><div className="container stack"><p className="eyebrow">BẮT ĐẦU DỰ ÁN</p><h2>Bạn đang có ý tưởng cho dự án?</h2><p className="lead">Chia sẻ nhu cầu để cùng tìm giải pháp phù hợp.</p><p className="contact-email">Email: {company.email}</p><button className="button contact-button" onClick={()=>setIsDemoNoticeVisible(true)}>Gửi email tư vấn →</button><p className="demo-note" role="status">{isDemoNoticeVisible?'Bản demo — yêu cầu chưa được gửi. Địa chỉ email này chỉ dùng minh họa cho bài test.':'Địa chỉ email minh họa cho bài test.'}</p></div></section>;
}
