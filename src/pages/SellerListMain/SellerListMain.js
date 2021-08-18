import React, { useState, useEffect, useHistory } from 'react';
import SellerList from '../../components/SellerList';
import SellerTag from '../../components/SellerTag';
import SellerSearch from '../../components/SellerSearch';
import SellerProducts from '../../components/SellerProducts';
import { API } from '../../config';
import axios from 'axios';

const SellerListMain = props => {
  const [sellerList, setSellerList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${API.SELLER}`,
      responseType: 'stream',
    })
      .then(result => {
        setSellerList(result.data.seller_list);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  console.log(sellerList);
  return (
    <>
      <SellerSearch />
      <SellerTag />
      <SellerList sellerList={sellerList} />
      <SellerProducts />
    </>
  );
};

export default SellerListMain;
