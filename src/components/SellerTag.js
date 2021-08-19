import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { SVG } from './svg';

const SellerTag = props => {
  return;
};

const SellerTagWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${props => (props.sellerList !== undefined ? '80px' : '15px')};
  margin-bottom: 25px;
`;

const SellerTagTitle = styled.div`
  width: 1190px;
  font-size: x-large;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 20px;
  justify-content: center;
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
  background-color: ${props => (props.value ? 'blue' : '#f8f8f8')};
  svg {
    margin-right: 5px;
  }
`;

export default SellerTag;
