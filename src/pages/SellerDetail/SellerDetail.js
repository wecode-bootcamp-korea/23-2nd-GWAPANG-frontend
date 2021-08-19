import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SellerProducts from '../../components/SellerProducts';
import { API } from '../../config';
import styled from 'styled-components';

import axios from 'axios';
import SellerTag from '../../components/SellerTag';

const SellerDetail = props => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get(API.SPRODUCT)
      .then(result => {
        setProductList(result.data.product_list);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  const history = useHistory();

  console.log(productList);
  return (
    <>
      <SellerInfoBox>
        <SellerTilteBox>
          <BackImage
            src="images/angleLeft.png"
            alt="backIcon"
            onClick={() => history.goBack()}
          />
          <SellerTitle>최홍자</SellerTitle>
        </SellerTilteBox>
        <SellerImage></SellerImage>
      </SellerInfoBox>

      <SellerTag></SellerTag>
      <SellerProducts type="Detail" productList={productList} />
    </>
  );
};

const SellerInfoBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 25px;
`;

const BackImage = styled.img`
  height: 30px;
  margin-right: 8px;

  :hover {
    cursor: pointer;
  }
`;

const SellerTilteBox = styled.div`
  width: 1190px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: x-large;
`;

const SellerTitle = styled.div`
  font-weight: bold;
`;

const SellerImage = styled.div`
  width: 1190px;
  height: 430px;
  margin: 30px;
  border: 1px solid black;
`;

export default SellerDetail;
