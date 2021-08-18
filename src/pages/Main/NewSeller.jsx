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
