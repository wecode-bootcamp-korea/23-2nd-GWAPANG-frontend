import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../config';
import axios, { get } from 'axios';

const NewItem = () => {
  const [newItem, setnewItem] = useState([]);
  const history = useHistory();
  //신규상품
  useEffect(() => {
    axios
      .get(API.SELLERPRODUCT + `?category=`)
      .then(result => {
        setnewItem(result.data.product);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);
  return (
    <SellerProductsBoxWrap>
      {newItem?.map((item, index) => (
        <>
          {index < 5 ? (
            <SellerProductsBox key={index}>
              <SellerProductsImageBox>
                <SellerProductsImg
                  isSoldOut={item.quantity === 0}
                  src={item.image}
                  alt="prodctImage"
                  onClick={() => {
                    history.push(`/product-detail/${item.id}/${item.name}`);
                  }}
                />
                {item.quantity === 0 && <SoldOutTag>매진</SoldOutTag>}
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
          ) : null}
        </>
      ))}
    </SellerProductsBoxWrap>
  );
};
export default NewItem;

const SellerProductsBoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

const SellerProductsBox = styled.div`
  margin: 20px 0 70px 0;
`;

const SellerProductsImageBox = styled.div`
  position: relative;
  width: 232px;
  height: 232px;
  :hover {
    cursor: pointer;
    border: 3px solid white;
  }
`;

const SellerProductsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
  opacity: ${props => (props.isSoldOut ? 0.2 : 1)};
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
