import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProductReview from './ProdcutReview';
import { API } from '../../../src/config';

const origin = { DOMESTIC: '국내산', IMPORTED: '수입산' };
const storage = { 1: '냉장', 2: '냉동', 3: '건조' };

function ProductDetail(props) {
  const { id } = props.match.params;
  const [stock, setstock] = useState('');
  const [productInfo, setProductInfo] = useState('story');
  const [data, setData] = useState({});
  const [modal, setModal] = useState('');

  const handleProductInfo = e => {
    setProductInfo(e.target.id);
  };

  useEffect(() => {
    axios
      .get(`${API.DETAIL}/${id}`)
      .then(result => {
        console.log(result.data.RESULT[0]);
        setData(result.data.RESULT[0]);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (Number(stock) > Number(data.product_stock)) {
      alert('그만 담아 주세요!!! 너무 많아요!!');
      setstock(data.product_stock);
    }
  }, [stock]);

  const handleTotalPrice = () => {
    return data.product_price * stock;
  };

  return (
    <>
      <BodyContainer>
        <ProdcutSection>
          <UploadContainer>
            <CarouselImage>
              <ProductImage alt="shirt" src={data.product_image?.[0]} />
            </CarouselImage>
          </UploadContainer>
          <Menu>
            <MenuBtnStory
              type="radio"
              id="story"
              name="radio"
              onClick={handleProductInfo}
              checked={productInfo === 'story' ? true : null}
            />
            <MenuBlock for="radio">Story</MenuBlock>
            <MenuBtnDesc
              type="radio"
              id="desc"
              name="radio"
              onClick={handleProductInfo}
            />
            <MenuBlock for="radio">Description</MenuBlock>
          </Menu>
          {productInfo === 'story' && (
            <ProductDesc>
              {data.image?.map((item, index) => (
                <ReviewContainer order={index}>
                  <ReviewImage
                    alt="reviewImage"
                    src={item.url}
                    key={index}
                  ></ReviewImage>
                  <RateContainer>
                    <ReviewId>{item.user_id}</ReviewId>
                    <Rate>{'★'.repeat(item.rate)}</Rate>
                  </RateContainer>
                </ReviewContainer>
              ))}
            </ProductDesc>
          )}
          {productInfo === 'desc' && (
            <ProductDesc>
              <Desc>{data.product_description}</Desc>
              {data.product_image.slice(1).map((item, index) => (
                <ProductImage alt="shirt" key={index} src={item} />
              ))}
            </ProductDesc>
          )}
        </ProdcutSection>
        <DetailForm>
          <DetailSection>
            <Title>{data.product_name}</Title>
            <Price>
              {parseInt(data.product_price)?.toLocaleString('ko-KR')}원
            </Price>
            <CategoryContainer>
              <Category>{data.product_origin}</Category>
              <Category>{data.product_storage}</Category>
            </CategoryContainer>
            <Seller>
              <SellerImage alt="seller" src={data.seller_image} />
              <SellerDesc>
                <SellerDescTop>Grown By</SellerDescTop>
                <SellerDescBot>{data.seller_name}</SellerDescBot>
              </SellerDesc>
            </Seller>
            <StockContainer>
              {data.product_stock} /
              <Increase
                type="number"
                value={stock}
                onChange={e => {
                  setstock(e.target.value);
                }}
              />
              <StockShow> : 수량</StockShow>
            </StockContainer>
            <TotalPrice>
              {handleTotalPrice().toLocaleString('ko-KR')}원
            </TotalPrice>
            <CategoryContainer>
              <ShopBtn>구매하기</ShopBtn>
              <ShopBtn onClick={() => setModal(1)}>댓글달기</ShopBtn>
            </CategoryContainer>
          </DetailSection>
        </DetailForm>
      </BodyContainer>
      {modal === 1 && <ProductReview setModal={setModal} />}
    </>
  );
}

export default ProductDetail;

const RateContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
`;

const ReviewContainer = styled.div`
  position: relatvie;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  border: 8px solid #fafafa;
  height: 100%;
`;

const ReviewImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Rate = styled.div`
  position: absolute;
  top: 45px;
  left: 18px;
  display: flex;
  padding: 18px;
  color: black;
  font-size: 10px;
`;

const ReviewId = styled(Rate.withComponent('div'))`
  padding-bottom: 30px;
  top: 15px;
  left: 15px;
  font-size: 20px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Desc = styled.p`
  padding: 30px;
`;

const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  border: 8px solid #ade06a;
`;

const MenuBtnStory = styled.input`
  width: 363px;
  height: 44px;
  position: absolute;
  opacity: 0;

  :hover + label {
    color: green;
    background-color: #ade09d;
  }

  :checked + label {
    color: green;
    background-color: #ade09d;
  }
`;

const MenuBtnDesc = styled.input`
  width: 363px;
  height: 44px;
  position: absolute;
  right: 0;
  opacity: 0;

  :hover + label {
    color: green;
    background-color: #ade09d;
  }

  :checked + label {
    color: green;
    background-color: #ade09d;
  }
`;

const StockShow = styled.div`
  font-size: 40px;
  padding-right: 13px;
`;

const Increase = styled.input`
  direction: ltr;
  width: 60px;
  appearance: none;
  background-color: #ade06a;
  border: none;
  font-size: 30px;
  color: white;
  margin: 0;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  :focus {
    appearance: none;
    border: none;
  }
`;

const Title = styled.div`
  font-size: 40px;
  direction: rtl;
  padding: 7px 7px 5px 7px;
  border-bottom: 8px solid white;
  color: white;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  background-color: #ade06a;

  :hover {
    background: white;
    color: #ade06a;
    font-weight: 700;
  }
`;

const CategoryContainer = styled(Title.withComponent('div'))`
  display: flex;
`;

const StockContainer = styled(Title.withComponent('div'))`
  display: flex;

  :hover > input {
    background-color: white;
    color: #ade06a;
  }
`;

const Category = styled(Title.withComponent('div'))`
  display: flex;
  font-size: 30px;
  border-right: 8px solid white;
`;

const Price = styled(Title.withComponent('div'))``;

const TotalPrice = styled(Title.withComponent('div'))``;

const ShopBtn = styled(Title.withComponent('div'))`
  font-size: 30px;
  border-right: 8px solid white;
  cursor: pointer;
`;

const ProductDesc = styled.div`
  padding: 20px;
  background-color: #fafafa;
  margin-top: 15px;
  display: flex;
  flex-flow: column wrap;
`;

const Menu = styled.div`
  display: flex;
  height: 50px;
  margin-top: 15px;
  position: relative;
`;

const MenuBlock = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-radius: 15px;
  background-color: #fafafa;
  color: #ade06a;
  font-size: 20px;
  margin: 3px;
  transition: all 0.2s ease-in-out;

  :hover {
    color: white;
    background-color: lightgreen;
  }
`;

const Seller = styled.div`
  display: flex;
  background-color: white;
  /* height: 80px; */
  padding: 30px;
`;

const SellerImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  background-color: brown;
  border-radius: 25px;
`;

const SellerDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
  /* background-color: #124133; */
`;
const SellerDescTop = styled.span`
  color: grey;
  font-weight: 500;
  font-size: 15px;
  margin-top: 5px;
`;

const SellerDescBot = styled.span`
  margin-top: 5px;
  color: green;
  font-weight: 900;
  font-size: 25px;
`;

const DetailForm = styled.form`
  min-width: 390px;
  margin-left: 3rem;
`;

const UploadContainer = styled.div``;

const CarouselImage = styled.div``;

const BodyContainer = styled.div`
  position: relative;
  display: flex;
  padding: 5.71429rem 5.71429rem 2rem 5.71429rem;
  margin: 0 auto;
  max-width: 1360px;
`;

const ProdcutSection = styled.section``;

const DetailSection = styled.div`
  position: sticky;
  top: 20px;
  border-right: 8px solid green;
  border-left: 8px solid green;
  padding: 0px 8px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px #ade06a;
`;
