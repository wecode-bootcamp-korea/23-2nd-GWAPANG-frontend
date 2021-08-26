import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../config';
import axios, { get } from 'axios';

const HotSeller = () => {
  const [hotSeller, sethotSeller] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(API.SELLERLST + `?order_by=order`)
      .then(result => {
        sethotSeller(result.data.seller);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <SellerWrapper>
      {hotSeller?.map((item, index) => (
        <>
          {index < 6 ? (
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
          ) : null}
        </>
      ))}
    </SellerWrapper>
  );
};
export default HotSeller;

const SellerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const SellerBox = styled.div`
  margin: 20px 10px 70px 0;
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
