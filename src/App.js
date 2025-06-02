import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './style/reset.css';
import './style/common.css';
import Header from './layout/Header'; //헤더
import Footer from './layout/Footer'; //푸터
import Main from './components/Main'; //메인
import Intro from './components/Intro'; //브랜드 소개
import Info from './components/Info'; // 반려견 정보
import Event from './components/Event'; // 이벤트
import Customer from './components/Customer'; // 고객지원
import Login from './components/Login'; // 로그인
import Join from './components/Join'; // 회원가입
import Order from './components/Order'; // 주문조회
import Cart from './components/Cart'; // 장바구니

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      {/* 상단 내비게이션 메뉴 클릭시 해당 컴포넌트가 나오게 */}
      <Routes>
        <Route path='/ginipet' element={<Main />} />
        <Route path='/intro' element={<Intro />}></Route>
        <Route path='/info' element={<Info />}></Route>
        <Route path='/event' element={<Event />}></Route>
        <Route path='/customer' element={<Customer />}></Route>
        
        {/* 회원가입, 로그인, 주문조회, 장바구니 컴포넌트 */}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/join' element={<Join />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
