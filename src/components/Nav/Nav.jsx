import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Nav() {
  const [log, setLog] = useState(false);
  const [color, setColor] = useState({ color: 'grey' });
  const history = useHistory();
  const logoutWithNav = () => {
    if (localStorage.getItem('TOKEN')) {
      localStorage.removeItem('TOKEN');
      alert('다음에 또 방문해주세요.🍉');
      setLog(!log);
    } else {
      console.log('error');
    }
  };
  const goToMain = () => {
    history.push('/');
  };
  const goToLogin = () => {
    history.push('/login');
  };
  const goToCart = () => {
    history.push('/seller-upload');
  };
  const goToSeller = () => {
    history.push('/seller-list-main');
  };
  return (
    <NavWrapper>
      <NavInnerContainer>
        <MainLogo src="/images/GwapangLogo.png" alt="logo" onClick={goToMain} />
        <MenuSelect type="radio" onClick={goToMain}>
          홈
        </MenuSelect>
        <MenuSelect type="radio" onClick={goToSeller}>
          셀러
        </MenuSelect>
        <IconContainer>
          <IconUpload
            src="https://s3.marpple.co/files/u_1396787/2021/5/original/d42ba6734d06cc9bf5c4f751d32fc6d370f1f4fc4.svg"
            alt="uploadIcon"
            onClick={goToCart}
          />
          <IconLogin
            src="https://s3.marpple.co/files/u_1396787/2021/5/original/327c52e14972934562d9f11f2f0acc390f7306e18.svg"
            alt="userIcon"
            onClick={goToLogin}
          />
        </IconContainer>
      </NavInnerContainer>
    </NavWrapper>
  );
}

export default Nav;

const NavWrapper = styled.nav`
  position: absolute;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  padding: 0 5.714285714285714rem;
  margin-bottom: 10px;
  height: 70px;
  width: 100%;
`;
const NavInnerContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 80px;
  justify-content: flex-start;
`;

const MainLogo = styled.img`
  display: flex;
  width: 200px;
  height: 30px;
  cursor: pointer;
  /* cursor: url('https://image.flaticon.com/icons/png/512/1625/1625099.png') 3,
    3 auto; */
`;

const MenuSelect = styled.div`
  background-color: white;
  border: 0px;
  vertical-align: middle;
  color: green;
  font-size: 23px;
  font-weight: 700;
  padding-top: 5px;
  margin: auto 0;
  padding-left: 30px;
  cursor: pointer;
`;
const MenuUnSeleted = styled.span`
  color: #a2a2a2;
  font-size: 17px;
  font-weight: 500;
  padding-top: 6px;
  margin: auto 0;
  padding-left: 30px;
  cursor: pointer;
`;

const IconLogin = styled.img`
  margin-left: 25px;
  cursor: pointer;
`;

const IconUpload = styled.img`
  margin-left: 25px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  margin-left: auto;
`;
