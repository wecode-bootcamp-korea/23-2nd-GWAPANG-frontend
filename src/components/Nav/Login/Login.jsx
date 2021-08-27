import React from 'react';
import styled from 'styled-components';
import axios, { GET, POST, DELETE, PUT } from 'axios';
import { API } from '../../../config';

function Login(props) {
  const loginWithKakao = () => {
    window.Kakao.Auth.login({
      success: authObj => {
        axios(API.LOGIN, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authObj.access_token,
          },
        }).then(res => {
          alert('과즙팡팡🍒 과팡에 방문해주셔서 감사합니다.🍊');
          console.log(res);
          localStorage.setItem('TOKEN', res.data.token);
          props.history.push('/');
          window.location.reload();
        });
      },
      fail: error => {
        console.log('이것도???');
        alert('아이디, 비밀번호를 다시 확인해주세요.🍌');
        alert(JSON.stringify(error));
      },
    });
  };

  return (
    <Wrapper>
      <LoginContainer>
        <LoginText>로그인</LoginText>
        <InputIdBox
          type="text"
          placeholder="아이디를 입력해주세요"
        ></InputIdBox>
        <InputPWBox
          type="password"
          placeholder="비밀번호를 입력해주세요"
        ></InputPWBox>
        <LoginSave>
          <CheckBox type="checkbox"></CheckBox>
          <IdSave>아이디저장</IdSave>
        </LoginSave>
        <LoginSubmitBtn>로그인</LoginSubmitBtn>
        <SignUp>
          아이디가 없으신가요?
          <p>회원가입</p>
        </SignUp>
        <KakaoLoginButton onClick={loginWithKakao}>
          <KakaoSymbol
            src="https://www.brandi.co.kr/static/21.02.09/images/icon-kakao-login-26-pt.svg"
            alt=""
          />
          <span>카카오로 10초만에 시작하기</span>
        </KakaoLoginButton>
      </LoginContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

const LoginContainer = styled.div`
  width: 335px;
  display: block;
  margin: 50px 0 50px 0;
  text-align: center;
`;

const LoginText = styled.h2`
  color: black;
  font-size: 28px;
  text-align: center;
  font-weight: bold;
`;
const InputIdBox = styled.input`
  margin: 30px 0 0 0;
  border: 1.5px solid #8c8c8c;
  width: 335px;
  height: 50px;
  background-image: url('https://lush.co.kr/data/skin/front/howling/img/etc/icon_id.png');
  background-size: 20px 22px;
  background-position: 15px center;
  background-repeat: no-repeat;
  text-align: center;
  text-indent: 0;
  &::placeholder {
    color: silver;
    font-size: 13px;
  }
`;

const InputPWBox = styled.input`
  margin: 15px 0 0 0;
  border: 1.5px solid #8c8c8c;
  width: 335px;
  height: 50px;
  background-image: url('https://lush.co.kr/data/skin/front/howling/img/etc/icon_password.png');
  background-size: 20px 22px;
  background-position: 15px center;
  background-repeat: no-repeat;
  text-align: center;
  text-indent: 0;
  &::placeholder {
    color: silver;
    font-size: 13px;
  }
`;
const LoginSave = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: left;
`;
const CheckBox = styled.input`
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  color: #8f8f8f;
`;
const IdSave = styled.p`
  margin-left: 10px;
  padding-top: 3px;
  font-size: 13px;
`;

const KakaoSymbol = styled.img`
  width: 20px;
  height: 20px;
`;

const LoginSubmitBtn = styled.button`
  width: 335px;
  height: 50px;
  background-color: black;
  margin-top: 20px;
  color: white;
  text-align: center;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const LogoutSubmitBtn = styled.button`
  opacity: 0;
  width: 10px;
  height: 10px;
`;

const KakaoLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 50px;
  background-color: #fee500;
  margin-top: 20px;
  color: black;
  text-align: center;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  span {
    display: flex;
    margin-left: 10px;
    align-items: center;
    font-size: 13px;
  }
`;
const SignUp = styled.p`
  float: right;
  margin: 15px 0 15px 0;
  display: flex;
  font-weight: lighter;
  font-size: 13px;
  p {
    margin-left: 10px;
    font-weight: 500;
  }
`;

export default Login;
