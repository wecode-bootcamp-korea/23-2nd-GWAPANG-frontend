import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
// import { API } from '../config';

const SellerSearch = props => {
  const clickCheck = e => {
    console.log('여기 찍힘');
    console.log(e.target.className);
  };

  return (
    <AllWrap>
      <SearchBox>
        <SearchInput type="text" placeholder="셀러명을 검색해 주세요" />
        <i className="fas fa-apple-alt fa-2x" onClick={e => clickCheck(e)}></i>
      </SearchBox>
    </AllWrap>
  );
};

const AllWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;
const SearchBox = styled.div`
  width: 1190px;
  height: 65px;
  border: 2px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;

  .fa-apple-alt {
  }
`;
const SearchInput = styled.input`
  width: 1100px;
  height: 100%;
  padding-left: 20px;
  border: none;
  font-size: 22px;

  :focus {
    outline: none;
  }
  ::placeholder {
  }
`;

export default SellerSearch;
