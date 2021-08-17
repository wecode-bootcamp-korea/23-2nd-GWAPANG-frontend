import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

function Nav() {
  const history = useHistory();
  const goToMain = () => {
    history.push('/');
  };
  const goToLogin = () => {
    history.push('/login');
  };
  const goToCart = () => {
    history.push('/cart');
  };
  const goToSeller = () => {
    history.push('/seller');
  };
  return (
    <NavWrapper>
      <NavInnerContainer>
        <MainLogo src="/images/GwapangLogo.png" alt="logo" onClick={goToMain} />
        <MenuSeleted onClick={goToMain}>홈</MenuSeleted>
        <MenuUnSeleted onClick={goToSeller}>셀러</MenuUnSeleted>
        <IconContainer>
          <Icon
            src="https://s3.marpple.co/files/u_1396787/2021/5/original/db2a15fcf8f4913f2079caa31f0864ec068f7b951.svg"
            alt="cartIcon"
            onClick={goToCart}
          />
          <Icon
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
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  padding: 2rem 5.71429rem 2rem 5.71429rem;
  height: 70px;
  width: 100%;
  /*  */
`;
const NavInnerContainer = styled.div`
  display: flex;
  width: 100%;
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

const MenuSeleted = styled.span`
  vertical-align: middle;
  color: mediumblue;
  font-size: 18px;
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

const Icon = styled.img`
  margin: auto 15px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  margin-left: auto;
`;
