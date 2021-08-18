import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { SVG } from './svg';

const SellerTag = props => {
  return (
    <SellerTagWrap>
      <SellerTagTitle>여기가 바로 과일 맛집!!!</SellerTagTitle>
      <SellerTagBox>
        <SellerTags>{SVG.REFRIGERATOR}냉장</SellerTags>

        <SellerTags>
          {SVG.FROZEN}
          냉동
        </SellerTags>
        <SellerTags>{SVG.DRY}건조</SellerTags>
        <SellerTags>
          {SVG.MAP}
          국내산
        </SellerTags>
        <SellerTags>{SVG.IMPORT}수입산</SellerTags>
      </SellerTagBox>
    </SellerTagWrap>
  );
};

const SellerTagWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 80px;
`;

const SellerTagTitle = styled.div`
  width: 1190px;
  font-size: x-large;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const SellerTagBox = styled.div`
  width: 1190px;
  display: flex;
`;

const SellerTags = styled.button`
  height: 38px;
  display: flex;
  align-items: center;
  border: none;
  background-color: #f8f8f8;
  border-radius: 19px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: 10px;
  font-size: large;

  svg {
    margin-right: 5px;
  }
`;

export default SellerTag;
