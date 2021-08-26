import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../config';
import { ColorExtractor } from 'react-color-extractor';

const SellerList = ({ sellerList }) => {
  const history = useHistory();
  return (
    <AllWrap>
      <SellerTotalBox>
        <SellerTotal>셀러 ({sellerList?.length})</SellerTotal>
      </SellerTotalBox>
      <SellerBoxWrap>
        {sellerList?.map((item, index) => {
          return (
            <SellerBox
              key={index}
              onClick={() => {
                history.push(`/seller-detail/${item.id}/${item.name}`);
              }}
            >
              <SellerImg src={item.profile_image} alt="sellerThumbNail" />
              <SellerNameBox>
                <div>{item.name}</div>
                <div>
                  <i className="far fa-heart" value="false"></i>
                </div>
              </SellerNameBox>
            </SellerBox>
          );
        })}
      </SellerBoxWrap>
    </AllWrap>
  );
};

const AllWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 70px;
`;

const SellerTotalBox = styled.div`
  width: 1190px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const SellerTotal = styled.p`
  padding-left: 5px;
  font-size: 20px;
`;

const SellerBoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 1189px;
`;

const SellerBox = styled.div`
  margin-bottom: 30px;
  margin-left: 7px;
`;

const SellerImg = styled.img`
  width: 190px;
  height: 190px;
  object-fit: cover;
  border-radius: 50px;

  transform: scale(1);
  /* -webkit-transform: scale(1); */

  transition: all 0.1s ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    /* -webkit-transform: scale(1.1); */
  }
`;

const SellerNameBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding-right: 10px;

  .fa-heart {
    color: gray;
  }
`;

export default SellerList;
