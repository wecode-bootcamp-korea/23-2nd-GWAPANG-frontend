import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ImageUploader from './ImageUploader';
import UploadCategory from './UploadCategory';

function SellerUpload() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [origin, setOrigin] = useState('');
  const [storage, setStorage] = useState('');
  const [selectedImage, setSelectedImage] = useState([]);
  const [imageForUpload, setImageForUpload] = useState([]);

  const wordsCount = e => {
    const { value, name } = e.target;
    if (name === 'text') {
      setTitle(value);
    } else if (name === 'area') {
      setDesc(value);
    } else if (name === 'price') {
      setPrice(value);
    } else if (name === 'quantity') {
      setQuantity(value);
    }
  };

  const handleUploadImage = e => {
    const formData = new FormData();
    for (let i = 0; i < imageForUpload.length; i++) {
      formData.append('images', imageForUpload[i]);
    }
    formData.append('name', title);
    formData.append('price', price);
    formData.append('description', desc);
    formData.append('stock', quantity);
    formData.append('origin', origin);
    formData.append('storage', storage);
    const header = {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.KjgqHsnmB7K95fHLKWPIsylZ3f4KEeLuCHkvVutkDdw',
        'Content-Type': 'multipart/form-data',
      },
    };
    axios.post(
      'http://10.58.2.254:8000/products?product_id=97',
      formData,
      header
    );
  };

  useEffect(() => {
    axios
      .get('http://10.58.2.254:8000/products?product_id=97', {
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.KjgqHsnmB7K95fHLKWPIsylZ3f4KEeLuCHkvVutkDdw',
        },
      })
      .then(result => {
        const { RESULT } = result.data;
        setTitle(RESULT.name);
        setPrice(RESULT.price);
        setDesc(RESULT.description);
        setQuantity(RESULT.stock);
        setOrigin(RESULT.origin);
        setStorage(RESULT.storage);
        setImageForUpload(RESULT.images);
        setSelectedImage(RESULT.images);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(imageForUpload);
  return (
    <SellerUploadSection>
      <InfoHeader>
        기본정보
        <InfoRight>*필수항목</InfoRight>
      </InfoHeader>
      <ImageUploader
        setSelectedImage={setSelectedImage}
        setImageForUpload={setImageForUpload}
        imageForUpload={imageForUpload}
        selectedImage={selectedImage}
      />
      <LiContainer>
        <Desc>
          제목<RedSpan>*</RedSpan>&nbsp;
        </Desc>
        <InputNameContainer>
          <InputName
            name="text"
            type="text"
            placeholder="상품 제목을 입력해 주세요"
            maxLength="40"
            onChange={
              title && title.length === 40
                ? alert('40자 제한입니다.')
                : wordsCount
            }
            value={title}
          />
          <CountWord>{title && title.length} / 40</CountWord>
          <InvalidNameList href="/">
            <u>거래금지 품목</u>
          </InvalidNameList>
        </InputNameContainer>
      </LiContainer>
      <UploadCategory
        setOrigin={setOrigin}
        setStorage={setStorage}
        origin={origin}
        storage={storage}
      />
      <LiContainer>
        <Desc>
          가격<RedSpan>*</RedSpan>&nbsp;
        </Desc>
        <InputContainer>
          <InputPrice
            type="number"
            name="price"
            placeholder="숫자만 입력해주세요"
            step="1000"
            min="1000"
            prefix="원"
            onChange={wordsCount}
            pattern="/d*"
            value={price}
          ></InputPrice>
          <Currency href="/">원</Currency>
        </InputContainer>
      </LiContainer>
      <LiContainer>
        <Desc>설명</Desc>
        <InputTextContainer>
          <InputText
            placeholder="상품 제목을 입력해 주세요"
            rows="6"
            cols="50"
            onChange={
              desc && desc.length === 300
                ? alert('300자 제한입니다.')
                : wordsCount
            }
            maxLength="300"
            name="area"
            value={desc}
          ></InputText>
          <CountWordText>{desc && desc.length} / 300</CountWordText>
        </InputTextContainer>
      </LiContainer>
      <LiContainer>
        <Desc>수량</Desc>
        <InputContainer>
          <InputPrice
            type="number"
            name="quantity"
            min="0"
            pattern="/d*"
            onChange={wordsCount}
            value={quantity}
          ></InputPrice>
          <Currency>개</Currency>
        </InputContainer>
      </LiContainer>
      <UploadBtnContainer>
        <UploadBtn onClick={handleUploadImage}>등록하기</UploadBtn>
      </UploadBtnContainer>
    </SellerUploadSection>
  );
}

export default SellerUpload;

const SellerUploadSection = styled.section`
  margin: 35px auto;
  width: 1024px;
`;

const InfoHeader = styled.h2`
  display: flex;
  align-items: center;
  height: 98px;
  font-size: 26px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;

const InfoRight = styled.span`
  margin-left: 2rem;
  font-size: 1rem;
  color: red;
`;

const LiContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  /* width: 1024px */
  padding: 32px 0;
  border-bottom: 1px solid grey;
`;

const Desc = styled.div`
  width: 10.5rem;
  display: flex;
  font-size: 18px;
  padding-top: 14px;
`;

const InputContainer = styled.div`
  position: relative;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const InputName = styled.input`
  padding-left: 20px;
  background-color: #fafafa;
  height: 50px;
  width: 750px;
`;

const InvalidNameList = styled.a`
  position: absolute;
  top: 18px;
  right: 90px;
  font-size: 13px;
`;

const CountWord = styled.div`
  margin: 5px 23px 0 0;
  font-size: 13px;
`;

const RedSpan = styled.span`
  color: red;
`;

const InputNameContainer = styled(InputContainer.withComponent('div'))`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

// const CategoryContainer = styled.div`
//   display: flex;
//   height: 300px;
// `;

// const CategoryA = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex-grow: 1;
//   height: 300px;
// `;

// const CategoryB = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex-grow: 1;
//   height: 300px;
// `;

// const SelectA = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-grow: 1;
//   background-color: #fafafa;
//   margin: 10px;
//   border-radius: 15px;
// `;

// const SelectAHeader = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 40px;
//   background-color: lightgrey;
// `;

const InputPrice = styled(InputName.withComponent('input'))`
  width: 200px;
`;

const Currency = styled(InvalidNameList.withComponent('span'))`
  top: 20px;
  right: 605px;
`;

// const PriceOptionContainer = styled.div`
//   display: flex;
//   margin-top: 20px;
// `;

// const SelectPriceOption = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 13px;
//   margin-right: 20px;
// `;

// const SelectPriceInput = styled.input`
//   color: grey;
// `;

const InputTextContainer = styled(InputNameContainer.withComponent('div'))`
  position: relative;
  margin-left: 30px;
`;

const InputText = styled.textarea`
  width: 800px;
  height: 150px;
  padding: 15px;
  margin-bottom: 20px;
  resize: none;
  line-height: 1.35;
  text-align: left;
  letter-spacing: -0.5px;
  overflow: auto;
`;

const CountWordText = styled(CountWord.withComponent('div'))`
  position: absolute;
  top: 155px;
  right: -10px;
`;

// const SelectSection = styled.div`
//   margin-top: 15px;
//   display: flex;
// `;

const UploadBtnContainer = styled.div`
  background-color: white;
`;

const UploadBtn = styled.div`
  height: 80px;
  padding-top: 30px;
  margin: 30px;
  background-color: navy;
  color: white;
  border-radius: 15px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;

  :hover {
    opacity: 70%;
  }
`;
