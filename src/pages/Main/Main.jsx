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
        <CategoryLink>인기 상품 &gt;</CategoryLink>
        <SubTitle>🍉 너도 사? 나도 사!</SubTitle>
        <HotItem />
        <NewItem />
        <CategoryLink>인기 셀러 &gt;</CategoryLink>
        <SubTitle>🥝 8월달 가장 주문이 많은 셀러는?</SubTitle>
        <HotSeller />
        <CategoryLink>마감임박 제품 &gt;</CategoryLink>
        <SubTitle>🍒 우리에겐 시간이 얼마 남지 않았어!</SubTitle>
        <ImminentItem />
        <CategoryLink>신규 셀러 &gt;</CategoryLink>
        <SubTitle>🍌 미리 미리 알아둬요, 언제 유명해질지 모르니까!</SubTitle>
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
