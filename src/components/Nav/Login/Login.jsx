import React from 'react';
import styled from 'styled-components';
import axios, { GET, POST, DELETE, PUT } from 'axios';
import { API } from '../../../config';

function Login(props) {
  const KakaoLogin = () => {
    window.Kakao.Auth.login({
      success: authObj => {
        // axios
        //   .GET(API.LOGIN, {
        //     headers: {
        //       'Content-Type': 'application/json',
        //       Authorization: authObj.access_token,
        //     },
        //   })
        axios(API.LOGIN, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authObj.access_token,
          },
        }).then(res => {
          alert('과즙팡팡🍒 과팡에 방문해주셔서 감사합니다.🍊');
          localStorage.setItem('TOKEN', res.data.token);
          props.history.push('/');
        });
      },
      fail: error => {
        alert('아이디, 비밀번호를 다시 확인해주세요.🍌');
        alert(JSON.stringify(error));
      },
    });
  };

  //로그아웃처리를 어떻게할지 아직 못정해서 일단 숨겨두었습니다.
  const KakaoLogout = () => {
    if (window.Kakao.Auth.getAccessToken()) {
      window.Kakao.API.request({
        url: '/v1/user/unlink',
        success: function (response) {
          console.log(response);
        },
        fail: function (error) {
          console.log(error);
        },
      });
      alert('다음에 또 방문해주세요.🍉');
      // window.Kakao.Auth.setAccessToken(undefined);
    }
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
        <KakaoLoginButton onClick={KakaoLogin}>
          <KakaoSymbol
            src="https://www.brandi.co.kr/static/21.02.09/images/icon-kakao-login-26-pt.svg"
            alt=""
          />
          <span>카카오로 10초만에 시작하기</span>
        </KakaoLoginButton>
      </LoginContainer>
      <LogoutSubmitBtn onClick={KakaoLogout}></LogoutSubmitBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
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