import React from 'react';
import styled from 'styled-components';
import axios, { GET, POST, DELETE, PUT } from 'axios';
import { API } from '../../../config';

function Logout(props) {
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
      localStorage.removeItem('TOKEN');
      props.history.push('/login');
      window.location.reload();
    }
  };

  return (
    <Wrapper>
      <LogoutContainer>
        <LogoutSubmitBtn onClick={KakaoLogout}>로그아웃</LogoutSubmitBtn>
      </LogoutContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

const LogoutContainer = styled.div`
  width: 335px;
  display: block;
  margin: 50px 0 50px 0;
  text-align: center;
`;

const LogoutSubmitBtn = styled.button`
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

export default Logout;
