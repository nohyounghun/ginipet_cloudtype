import React, {useState} from 'react';
import axios from 'axios';
import '../style/join.css';

function Join(props) {
  //1. 상태변수 선언하기(useState)
  const [form, setForm] = useState({
    username : '',//1. 사용자 아이디
    password : '',//2. 패스워드
    password2 : '',//3. 패스워드 확인
    email : '',//4. 이메일
    tel : ''//5. 전화번호
  });

  const [error, setError] = useState(''); //회원가입 실패한 경우 출력되는 변수
  const [success, setSuccess] = useState(''); //회원가입 성공시 출력되는 변수
  

  //2. handleChange 함수
  const handleChange =(e)=>{
    //사용자가 각각 입력폼에 데이터를 입력하면 변수에 담는다.
    setForm({...form, [e.target.name]:e.target.value}); //input안의 name 값 
    setError(''); //에러 초기화
    setSuccess(''); //성공 초기화
    //데이터가 없으면 에러, 성공으로 출력
  }

  //3. handleSubmit 함수
  const handleSubmit = async e =>{
    //사용자가 입력한 data를 backend 서버에 post방식으로 넘긴다.
    e.preventDefault(); //새로고침 방지

    //비밀번호1, 비밀번호2가 일치되는지 여부 확인
    if (!form.password || !form.password2 || form.password !== form.password2) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    //서버측에 post방식으로 데이터값을 전달한다.
    try{
      await axios.post('https://port-0-backend-mbeepqzxd38cc578.sel4.cloudtype.app/register',{
        username:form.username,
        password:form.password,
        tel:form.tel,
        email:form.email
      });

      setSuccess('회원가입이 완료되었습니다.');
      setForm({
        username:'',
        password:'',
        password2:'',
        tel:'',
        email:'',
      })
    }catch(error){//전송실패시 에러 출력
      setError('회원가입 실패 : 아이디가 이미 존재하거나 서버 오류입니다.');
    }
  }

  return (
    <section className="join-section">
    <h2 className="join-h2">회원가입</h2>
    <form onSubmit={handleSubmit} className="join-form">
      <p className="join-p">
        <label htmlFor="username" className="join-label">
          아이디 :{' '}
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="아이디 입력"
          onChange={handleChange}
          value={form.username}
          className="join-input"
          required
        />
      </p>
      <p className="join-p">
        <label htmlFor="password" className="join-label">
          패스워드 :{' '}
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="패스워드 입력"
          onChange={handleChange}
          value={form.password}
          className="join-input"
          required
        />
      </p>
      <p className="join-p">
        <label htmlFor="password2" className="join-label">
          패스워드 확인 :{' '}
        </label>
        <input
          type="password"
          id="password2"
          name="password2"
          placeholder="패스워드 확인"
          onChange={handleChange}
          value={form.password2}
          className="join-input"
          required
        />
      </p>
      <p className="join-p">
        <label htmlFor="email" className="join-label">
          이메일 :{' '}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="id@domain.co.kr or com"
          onChange={handleChange}
          value={form.email}
          className="join-input"
          required
        />
      </p>
      <p className="join-p">
        <label htmlFor="tel" className="join-label">
          전화번호 :{' '}
        </label>
        <input
          type="tel"
          id="tel"
          name="tel"
          placeholder="000-0000-0000"
          onChange={handleChange}
          value={form.tel}
          className="join-input"
          required
        />
      </p>
      <p className="join-p join-agree-label">
        <input
          type="checkbox"
          id="agree"
          name="agree"
          onChange={handleChange}
          className="join-checkbox"
          required
        />
        <label htmlFor="agree">
          이용약관 - 개인정보 수집 및 이용에 동의합니다.
        </label>
      </p>
      <p className="join-p">
        <button type="submit" className="join-button">
          회원가입
        </button>
      </p>
      {error && (
        <p className="join-message join-error">{error}</p>
      )}
      {success && (
        <p className="join-message join-success">{success}</p>
      )}
    </form>
  </section>
  );
}

export default Join;
