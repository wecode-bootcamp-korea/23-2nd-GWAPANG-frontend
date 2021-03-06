import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import HotItem from './HotItem';
import HotSeller from './HotSeller';
import ImminentItem from './ImminentItem';
import NewItem from './NewItem';
import NewSeller from './NewSeller';
import SimpleSlider from './Slide';
import { API } from '../../config';

function Main() {
  const [sellerList, setSellerList] = useState([]);
  const [productList, setProductList] = useState([]);
  const tagFilter = tagId => {
    axios
      .get(API.SELLERLST + `?category=${tagId}`)
      .then(result => {
        setSellerList(result.data.seller);
        setProductList(result.data.item);
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  return (
    <Wrapper>
      <ContentsWrapper>
        <SlideContainer>
          <SimpleSlider />
        </SlideContainer>
        <CategoryLink>μΈκΈ° μν &gt;</CategoryLink>
        <SubTitle>π λλ μ¬? λλ μ¬!</SubTitle>
        <HotItem />
        <NewItem />
        <CategoryLink>μΈκΈ° μλ¬ &gt;</CategoryLink>
        <SubTitle>π₯ 8μλ¬ κ°μ₯ μ£Όλ¬Έμ΄ λ§μ μλ¬λ?</SubTitle>
        <HotSeller />
        <CategoryLink>λ§κ°μλ° μ ν &gt;</CategoryLink>
        <SubTitle>π μ°λ¦¬μκ² μκ°μ΄ μΌλ§ λ¨μ§ μμμ΄!</SubTitle>
        <ImminentItem />
        <CategoryLink>μ κ· μλ¬ &gt;</CategoryLink>
        <SubTitle>π λ―Έλ¦¬ λ―Έλ¦¬ μμλ¬μ, μΈμ  μ λͺν΄μ§μ§ λͺ¨λ₯΄λκΉ!</SubTitle>
        <NewSeller />
      </ContentsWrapper>
    </Wrapper>
  );
}
export default Main;

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 0 5.714285714285714rem;
  margin-bottom: 50px;
`;
const ContentsWrapper = styled.div`
  padding: 0 80px;
`;
const SlideContainer = styled.div`
  margin-top: 70px;
  position: relative;
  display: block;
  align-items: center;
  justify-content: space-between;
`;

const CategoryLink = styled.div`
  display: flex;
  margin-top: 50px;
  font-size: 19px;
  font-weight: 600;
`;
const SubTitle = styled.div`
  display: flex;
  margin-top: 15px;
  color: black;
  font-size: 17px;
  font-weight: 600;
`;
