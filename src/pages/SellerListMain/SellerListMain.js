import React, { useState, useEffect, useHistory } from 'react';
import SellerList from '../../components/SellerList';
import SellerTag from '../../components/SellerTag';
import SellerSearch from '../../components/SellerSearch';
import SellerProducts from '../../components/SellerProducts';
import { API } from '../../config';
import axios, { get } from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const SellerListMain = props => {
  const [sellerList, setSellerList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get(API.SELLER)
      .then(result => {
        setSellerList(result.data.seller_list);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(API.PRODUCT)
  //     .then(result => {
  //       setProductList(result.data.product_list);
  //     })
  //     .catch(error => {
  //       console.log(error.message);
  //     });
  // }, []);

  const tagFilter = tagId => {
    console.log(tagId);
  };

  return (
    <>
      <SellerSearch />
      <SellerTag sellerList={sellerList} tagFilter={tagFilter} />
      <SellerList sellerList={sellerList} />
      {productList.length > 0 && <SellerProducts productList={productList} />}
    </>
  );
};

export default SellerListMain;
