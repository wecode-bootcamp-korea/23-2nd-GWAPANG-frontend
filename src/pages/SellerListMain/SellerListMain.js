import React, { useState, useEffect, useHistory } from 'react';
import SellerList from '../../components/SellerList';
import SellerTag from '../../components/SellerTag';
import SellerSearch from '../../components/SellerSearch';
import styled from 'styled-components';
import SellerProducts from '../../components/SellerProducts';
import { API } from '../../config';
import axios, { get } from 'axios';

const SellerListMain = props => {
  const [sellerList, setSellerList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    axios
      .get(API.SELLERLST)

      .then(result => {
        setSellerList(result.data.seller);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  const searchStart = keyword => {
    setSearchWord(keyword);

    axios
      .get(API.SEARCHLST + `?keyword=${keyword}`)
      .then(result => {
        setSellerList(result.data.seller);
        setProductList(result.data.item);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

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

  const isTagChecked = checked => {
    return checked;
  };

  console.log(searchWord);
  console.log(productList);
  console.log(searchWord);
  return (
    <div>
      <SellerSearch searchStart={searchStart} />
      {isTagChecked === true ||
        (searchWord === '' && (
          <SellerTag
            sellerList={sellerList}
            tagFilter={tagFilter}
            isTagChecked={isTagChecked}
          />
        ))}
      <SearchNullWrap>
        {sellerList?.length < 1 && (
          <SearchNull>샐러가 존재하지 않습니다.</SearchNull>
        )}
      </SearchNullWrap>
      <SearchNullWrap>
        {sellerList?.length === 0 && productList?.length === 0 && (
          <SearchNull>검색결과가 없습니다.</SearchNull>
        )}
      </SearchNullWrap>
      {sellerList?.length > 0 && <SellerList sellerList={sellerList} />}
      {productList?.length > 0 && (
        <SellerProducts productList={productList} searchWord={searchWord} />
      )}
    </div>
  );
};

const SearchNullWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: xx-large;
`;
const SearchNull = styled.div`
  width: 1190px;
  margin-top: 150px;
  margin-bottom: 150px;
`;

export default SellerListMain;
