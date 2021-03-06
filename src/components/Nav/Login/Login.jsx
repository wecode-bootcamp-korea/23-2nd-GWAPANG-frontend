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
          alert('๊ณผ์ฆํกํก๐ ๊ณผํก์ ๋ฐฉ๋ฌธํด์ฃผ์์ ๊ฐ์ฌํฉ๋๋ค.๐');
          console.log(res);
          localStorage.setItem('TOKEN', res.data.TOKEN);
          props.history.push('/');
          window.location.reload();
        });
      },
      fail: error => {
        console.log('์ด๊ฒ๋???');
        alert('์์ด๋, ๋น๋ฐ๋ฒํธ๋ฅผ ๋ค์ ํ์ธํด์ฃผ์ธ์.๐');
        alert(JSON.stringify(error));
      },
    });
  };

  return (
    <Wrapper>
      <LoginContainer>
        <LoginText>๋ก๊ทธ์ธ</LoginText>
        <InputIdBox
          type="text"
          placeholder="์์ด๋๋ฅผ ์๋ ฅํด์ฃผ์ธ์"
        ></InputIdBox>
        <InputPWBox
          type="password"
          placeholder="๋น๋ฐ๋ฒํธ๋ฅผ ์๋ ฅํด์ฃผ์ธ์"
        ></InputPWBox>
        <LoginSave>
          <CheckBox type="checkbox"></CheckBox>
          <IdSave>์์ด๋์ ์ฅ</IdSave>
        </LoginSave>
        <LoginSubmitBtn>๋ก๊ทธ์ธ</LoginSubmitBtn>
        <SignUp>
          ์์ด๋๊ฐ ์์ผ์ ๊ฐ์?
          <p>ํ์๊ฐ์</p>
        </SignUp>
        <KakaoLoginButton onClick={loginWithKakao}>
          <KakaoSymbol
            src="https://www.brandi.co.kr/static/21.02.09/images/icon-kakao-login-26-pt.svg"
            alt=""
          />
          <span>์นด์นด์ค๋ก 10์ด๋ง์ ์์ํ๊ธฐ</span>
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
