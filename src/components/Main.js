import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../style/swiper.css';
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import '../style/main.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Main(props) {
  return (
      <main>
        {/* 슬라이드 */}
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]} 
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay:3000,
              disableOnInteraction: false,
            }}
            loop={true}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1500}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className='first_slide'>
              <p className='slide1_txt'><span>펫푸드</span>의 바른길 <br />&nbsp;정관장 <span>지니펫</span></p>
              <p className='slide1_txt2'>121년 정관장 정신을 담은<br /> &nbsp;펫푸드의 바른길, 지니펫</p>
              <button>지니펫 7원칙 바로가기 &#x25B6;</button>
              <img src={`${process.env.PUBLIC_URL}/images/mo_bg_full_23.png`} alt="스와이퍼슬라이드1 배경"  className="bg-image" />
              <img src={`${process.env.PUBLIC_URL}/images/mo_bg_23.png`} alt="스와이퍼슬라이드1 강아지" className="dog-image"/>
              </SwiperSlide>
              <SwiperSlide className='second_slide'>
                <p className='slide2_txt'>GINIPET</p>
                <p className='slide2_txt2'>면역력 증진효과 확인</p>
                <button>바로가기</button>
                <img src={`${process.env.PUBLIC_URL}/images/mo_bg_01.jpg`} alt="스와이퍼슬라이드2 이미지"  className="other-image" />
              </SwiperSlide>
          </Swiper>
        </div>
          
        {/* 2번째 컨텐츠 */}
        <div className='second_con_wrap'>
          <div>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/title_shopping_icon.png`} alt="강아지이미지" />
            </div>
            <h2><span>지니펫 쇼핑</span>하러 가기</h2>
            <Link to='https://www.ginipet.co.kr/prod/selProdList.do?CATEGORY_ID=C00009'><button>바로가기</button></Link>
          </div>
          <div className="second_con">
            <img src={`${process.env.PUBLIC_URL}/images/petfood1.jpg`} alt="사료이미지" />
            <div className='petfood_txt'>
              <div>
                <p>[사료]홀리스틱</p>
                <p>홍삼&호주산양고기(5.2kg)</p>
              </div>
              <p>78,000원</p>
              <div className='second_con_icon'>
                <span><FontAwesomeIcon icon={faCartShopping} /></span>
                <span><FontAwesomeIcon icon={faHeart} /></span>
                <span><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></span>
              </div>
            </div>
          </div>
        </div>

        {/* 3번째 컨텐츠 */}
        <div className="third_con_wrap">
          <div>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/banner_story_icon.png`} alt="강아지이미지" />
            </div>
            <h2>지니펫 <span>스토리</span></h2>
            <p>소중한 반려견을 위한<br />
            지니펫의 다양한 소식을 만나보세요!</p>
            <Link to='https://www.ginipet.co.kr/star/selStarGalleryListNew.do'><button>자세히보기</button></Link>
            </div>
        </div>

        {/* 4번째 컨텐츠 */}
          <div className='dog_photo'>
            <img src={`${process.env.PUBLIC_URL}/images/banner_story_img.png`} alt="강아지 이미지" />
          </div>
          <div className='fourth_con_wrap'>
              <div className='fourth_con_title'>
                <FontAwesomeIcon icon={faInstagram} className='insta_logo' />
                <h2>지니펫 <span>in 스타</span></h2>
              </div>
              <p>지니펫의 다양한 소식과 정보를 만나보세요</p>

              <div className='fourth_con'>
                <div className='fourth_con1'>
                  <img src={`${process.env.PUBLIC_URL}/images/snsTitle_1.jpg`} alt="최근게시물" />
                  <Link to='https://www.instagram.com/ginipet/'><img src={`${process.env.PUBLIC_URL}/images/1672300757689.jpg`} alt="인스타바로가기" /></Link>
                </div>

                <div className='fourth_con2'>
                  <img src={`${process.env.PUBLIC_URL}/images/snsTitle_2.jpg`} alt="베스트게시물" />
                  <Link to='https://www.instagram.com/p/CxNHt__SJYy/'><img src={`${process.env.PUBLIC_URL}/images/1692944142605.jpg`} alt="인스타바로가기" /></Link>
              </div>
          </div>
        </div>
    </main>
  );
}

export default Main;