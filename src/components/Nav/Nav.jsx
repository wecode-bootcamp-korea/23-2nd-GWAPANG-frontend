import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Nav() {
  const [log, setLog] = useState(false);
  const history = useHistory();

  const goToMain = () => {
    history.push('/');
  };
  const goToLogin = () => {
    history.push('/login');
  };
  const goToLogout = () => {
    history.push('/logout');
  };
  const goToUpload = () => {
    history.push('/seller-upload');
  };
  const goToSellerList = () => {
    history.push('/seller-list-main');
  };
  return (
    <NavWrapper>
      <NavInnerContainer>
        <MainLogo src="/images/GwapangLogo.png" alt="logo" onClick={goToMain} />
        <MenuSelect onClick={goToMain}>홈</MenuSelect>
        <MenuUnSeleted type="radio" onClick={goToSellerList}>
          셀러
        </MenuUnSeleted>
        <IconContainer>
          {localStorage.getItem('TOKEN') ? (
            <>
              <IconUpload
                src="https://s3.marpple.co/files/u_1396787/2021/5/original/d42ba6734d06cc9bf5c4f751d32fc6d370f1f4fc4.svg"
                alt="uploadIcon"
                onClick={goToUpload}
              />
              <IconLogout
                src="https://image.flaticon.com/icons/png/128/4161/4161780.png"
                alt="logoutIcon"
                onClick={goToLogout}
              />
            </>
          ) : (
            <>
              <IconLogin
                src="https://s3.marpple.co/files/u_1396787/2021/5/original/327c52e14972934562d9f11f2f0acc390f7306e18.svg"
                alt="loginIcon"
                onClick={goToLogin}
              />
            </>
          )}
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

const MenuSelect = styled.p`
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
const MenuUnSeleted = styled.div`
  background-color: white;
  border: 0px;
  vertical-align: middle;
  color: #a2a2a2;
  font-size: 23px;
  font-weight: 700;
  padding-top: 5px;
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

const IconLogout = styled.img`
  height: 25px;
  width: 25px;
  margin-left: 25px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  margin-left: auto;
`;
