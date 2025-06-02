import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../style/common.css';

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogout =()=>{
    localStorage.removeItem('token'); //기존 데이터 비우기
    localStorage.removeItem('username'); //기존 데이터 비우기
    navigate('/login'); //로그인 페이지로 이동
  }

  const closeMenuAndNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header>
      <div className="header">
        <img src={`${process.env.PUBLIC_URL}/images/topIcon_burger.png`} alt="상단토글버튼" onClick={()=>setMenuOpen(true)}/>
        <Link to='/ginipet' className='header_logo'><img src={`${process.env.PUBLIC_URL}/images/logo_clr.png`} alt="상단로고" /></Link>
        <img src={`${process.env.PUBLIC_URL}/images/icon_cart.png`} alt="장바구니" />
      </div>

      <nav className='navi' style={{
        left:menuOpen?'0%':'-100%'
        //삼항조건연산자 = 조건식?참인 값:거짓인 값
      }}>
        <div style={{position:'relative', display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
          <button className="close_btn" onClick={()=>setMenuOpen(false)}>
            <img src={`${process.env.PUBLIC_URL}/images/btn_close.png`} alt="닫기" />
          </button>
          <p style={{color:'#fff',padding:'30px 30px', fontSize:'16px'}}><b>{username}</b>님 환영합니다!</p>
        </div>

        <ul className='gnb'>
          <li><Link to='/' title='지니펫 쇼핑몰' onClick={()=>setMenuOpen(false)}>지니펫 쇼핑몰</Link></li>
          <li><Link to='/intro' title='브랜드 소개'onClick={()=>setMenuOpen(false)} >브랜드 소개</Link></li>
          <li><Link to='/info' title='반려견 정보' onClick={()=>setMenuOpen(false)}>반려견 정보</Link></li>
          <li><Link to='/event' title='이벤트' onClick={()=>setMenuOpen(false)}>이벤트</Link></li>
          <li><Link to='/customer' title='고객지원' onClick={()=>setMenuOpen(false)}>고객지원</Link></li>
        </ul>

        <ul className='form_navi'>
          <li>
          {username ?(
          <span>
            <button onClick={handleLogout} style={{background:'none', border:'none',color:'#fff', fontWeight:'bold', cursor:'pointer'}}>로그아웃</button>
          </span>
        ) : (
          <Link to='/login' onClick={()=>closeMenuAndNavigate('/login')}>로그인</Link>
        )
        }
{/* <Link to='/login' title='로그인' onClick={()=>setMenuOpen(false)}>로그인</Link> */}
          </li>
          <li><Link to='/join' title='회원가입' onClick={()=>setMenuOpen(false)}>회원가입</Link></li>
          <li><Link to='/order' title='주문조회' onClick={()=>setMenuOpen(false)}>주문조회</Link></li>
          <li><Link to='/cart' title='장바구니' onClick={()=>setMenuOpen(false)}>장바구니</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;