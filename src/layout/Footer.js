import React from 'react';

function Footer(props) {
  return (
    <footer>
      <div className="footer_notice">
        <span>공지사항</span>
      </div>

      <div className="footer_info">
        <p>개인정보처리방침</p>
        <p>쇼핑몰약관</p>
        <span><img src={`${process.env.PUBLIC_URL}/images/title_instar_icon.png`} alt="인스타그램" /></span>
      </div>

      <div className="footer_contact">
        <p>고객센터</p>
        <p>02-2166-7770</p>
        <p>평일 10:00 ~ 17:00</p>
        <p>(점심 : 12:00 ~ 13:00)</p>
      </div>

      <div className="footer_copy">
        <p>지니펫 사업자 정보 확인</p>
        <span><img src={`${process.env.PUBLIC_URL}/images/iconArrow_bottom.png`} alt="" /></span>
      </div>
    </footer>
  );
}

export default Footer;