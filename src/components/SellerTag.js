import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';
import { SVG } from './svg';

const SellerTag = ({ sellerList, tagFilter, isTagChecked }) => {
  // useEffect(() => {
  //   inputTag.current.setAttribute('checked', true);
  // }, []);

  const [tagInit, setTagInit] = useState('All');

  useEffect(() => {
    isTagChecked(true);
  }, []);
  return (
    <SellerTagWrap sellerList={sellerList}>
      {sellerList !== undefined && (
        <SellerTagTitle>여기가 바로 과일 맛집!!!</SellerTagTitle>
      )}
      <SellerTagBox>
        {TAG_LIST.map((item, index) => (
          <div key={index}>
            <TagInput
              type="radio"
              id={item.tagId}
              value={item.value}
              name="radio"
              onClick={e => {
                tagFilter(e.target.value);
                setTagInit(null);
                isTagChecked(e.target.checked);
                // tagSend(e);
                // handleTagInit();
              }}
              // ref={item.ref}
              checked={tagInit === item.value ? true : null}
            />
            <TagLabel for={item.tagId}>
              {item.svgName}
              {item.tagName}
            </TagLabel>
          </div>
        ))}
      </SellerTagBox>
    </SellerTagWrap>
  );
};

export default SellerTag;

const TAG_LIST = [
  {
    tagId: 'radio1',
    tagName: '전체',
    value: 'All',
    svgName: SVG.FRUIT,
  },
  {
    tagId: 'radio2',
    tagName: '냉장',
    value: 'COLD',
    svgName: SVG.REFRIGERATOR,
  },
  {
    tagId: 'radio3',
    tagName: '냉동',
    value: 'FROZEN',
    svgName: SVG.FROZEN,
  },
  {
    tagId: 'radio4',
    tagName: '건조',
    value: 'DRY',
    svgName: SVG.DRY,
  },
  {
    tagId: 'radio5',
    tagName: '국내산',
    value: 'DOMESTIC',
    svgName: SVG.MAP,
  },
  {
    tagId: 'radio6',
    tagName: '수입산',
    value: 'IMPORTED',
    svgName: SVG.IMPORT,
  },
];
const SellerTagWrap = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${props => (props.sellerList !== undefined ? '80px' : '15px')};
  margin-bottom: 25px;
`;

const SellerTagTitle = styled.div`
  width: 1190px;
  font-size: x-large;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 20px;
  justify-content: center;
`;

const SellerTagBox = styled.div`
  width: 1190px;
  display: flex;
`;
const TagLabel = styled.label`
  svg {
    margin-right: 5px;
  }
  :hover {
    cursor: pointer;
  }
`;
const TagInput = styled.input`
  display: none;
  margin: 10px;

  & + ${TagLabel} {
    height: 38px;
    display: flex;
    align-items: center;
    border: none;
    background-color: #f8f8f8;
    border-radius: 19px;
    padding-left: 30px;
    padding-right: 30px;
    margin-left: 10px;
    font-size: large;
  }
  &:checked + ${TagLabel} {
    background-image: none;
    /* background-color: #0e2ee2; */
    background: linear-gradient(-45deg, #0ebeff, #0e2ee2);
    background-size: 100% 100%;
    animation: gradient 2s ease infinite;
    border: none;
    color: #fff;
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
