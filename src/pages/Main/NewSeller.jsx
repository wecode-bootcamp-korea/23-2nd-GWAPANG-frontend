import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { API } from '../../config';
import axios, { get } from 'axios';

const NewSeller = () => {
  const [newSeller, setnewSeller] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get(API.SELLERLST + `?order_by=id`)
      .then(result => {
        setnewSeller(result.data.seller);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);
  return (
    <SellerWrapper>
      {newSeller?.map((item, index) => (
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
export default NewSeller;

const SellerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

const SellerBox = styled.div`
  margin: 20px 0 70px 0;
  padding: 25px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
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
  margin-top: 20px;

  .fa-heart {
    color: gray;
  }
`;
