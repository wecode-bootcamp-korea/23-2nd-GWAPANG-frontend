import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { API } from '../config';

const SellerProductsList = props => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(`${API.PRODUCT}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        setProductList(result.product_list);
      });
  }, []);

  return (
    <AllWrap>
      <SellerProductsTotalBox>
        <SellerProductsTotal>상품 ({productList.length})</SellerProductsTotal>
      </SellerProductsTotalBox>
      <SellerProductsBoxWrap>
        {productList.map((item, index) => {
          return (
            <SellerProductsBox key={index}>
              <SellerProductsImageBox>
                <SellerProductsImg src={item.image_url} alt="" />
                {item.quantity === 0 ? <SoldOutTag>매진</SoldOutTag> : null}
              </SellerProductsImageBox>

              <SellerProductsInfoBox>
                <SellerProductsName>{item.name}</SellerProductsName>
                <SellerProductsPrice>
                  ₩{' '}
                  {(Math.floor(item.price / 1000) * 1000).toLocaleString(
                    'ko-KR'
                  )}
                </SellerProductsPrice>
              </SellerProductsInfoBox>
            </SellerProductsBox>
          );
        })}
      </SellerProductsBoxWrap>
    </AllWrap>
  );
};

const AllWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SellerProductsTotalBox = styled.div`
  width: 1190px;
  height: 45px;
  display: flex;
  align-items: center;
`;

const SellerProductsTotal = styled.div`
  font-size: 20px;
  margin-left: 8px;
`;

const SellerProductsBoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1190px;
`;

const SellerProductsBox = styled.div`
  margin-bottom: 70px;
  margin-left: 6px;
`;

const SellerProductsImageBox = styled.div`
  position: relative;
  width: 232px;
  height: 232px;
`;

const SellerProductsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
`;

const SoldOutTag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  font-size: smaller;
  background-color: gray;
  padding: 5px;
`;

const SellerProductsInfoBox = styled.div`
  align-items: center;
  height: 40px;
  margin-top: 10px;
`;
const SellerProductsName = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`;
const SellerProductsPrice = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  font-weight: bold;
`;

export default SellerProductsList;