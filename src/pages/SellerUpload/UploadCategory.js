import React from 'react';
import { SVG } from '../../components/svg';
import styled from 'styled-components';

function UploadCategory(props) {
  const handleRadio = e => {
    if (e.target.name === 'origin') {
      props.setOrigin(e.target.value);
    } else if (e.target.name === 'storage') {
      props.setStorage(e.target.value);
    }
  };

  return (
    <LiContainer>
      <Desc>
        카테고리<RedSpan>*</RedSpan>&nbsp;
      </Desc>
      <InputContainer>
        <CategoryContainer>
          <CategoryA>
            <SelectAHeader>원산지</SelectAHeader>
            <SelectSection>
              <SellerTags>
                <SelectA
                  id="imported"
                  type="radio"
                  name="origin"
                  value={1}
                  onChange={handleRadio}
                  checked={props.origin === 1 ? true : null}
                />
                <label for="imported">{SVG.IMPORT}수입산</label>
              </SellerTags>
              <SellerTags>
                <SelectA
                  id="domestic"
                  type="radio"
                  name="origin"
                  value={2}
                  onChange={handleRadio}
                  checked={props.origin === 2 ? true : null}
                />
                <label for="domestic">{SVG.MAP}국내산</label>
              </SellerTags>
            </SelectSection>
          </CategoryA>
          <Category>
            <SelectAHeader>보관상태</SelectAHeader>
            <SelectSection>
              <SellerTags>
                <SelectA
                  id="cold"
                  type="radio"
                  name="storage"
                  value={1}
                  onChange={handleRadio}
                  checked={props.storage === 1 ? true : null}
                />
                <label for="cold">{SVG.REFRIGERATOR}냉장</label>
              </SellerTags>
              <SellerTags>
                <SelectA
                  id="frozen"
                  type="radio"
                  name="storage"
                  value={2}
                  onChange={handleRadio}
                  checked={props.storage === 2 ? true : null}
                />
                <label for="frozen">{SVG.FROZEN}냉동</label>
              </SellerTags>
              <SellerTags>
                <SelectA
                  id="dry"
                  type="radio"
                  name="storage"
                  value={3}
                  onChange={handleRadio}
                  checked={props.storage === 3 ? true : null}
                />
                <label for="건조">{SVG.DRY}건조</label>
              </SellerTags>
            </SelectSection>
          </Category>
        </CategoryContainer>
      </InputContainer>
    </LiContainer>
  );
}

export default UploadCategory;

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

const RedSpan = styled.span`
  color: red;
`;

const CategoryContainer = styled.div`
  display: flex;
`;

const Category = styled.div`
  flex-grow: 1;
`;

const CategoryA = styled.div`
  width: 330px;
`;

const SelectAHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const SelectSection = styled.div`
  display: flex;
  background: linear-gradient(lightgrey, white);
  margin-left: 5px;
  margin-right: 10px;
`;

const SellerTags = styled.div`
  position: relative;
  flex-grow: 1;
  margin: 20px 10px 10px 10px;
  /* height: 30px; */

  svg {
    margin-right: 5px;
    margin-bottom: 5px;
  }
`;

const SelectA = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 3;
  cursor: pointer;

  + label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 5px 10px 5px 0;
    border-radius: 15px;
    background-color: #fafafa;
  }

  :hover + label {
    background-color: navy;
    color: #fafafa;
  }

  :checked + label {
    background-color: navy;
    color: #fafafa;
    font-weight: 500;
    border-radius: 15px;
  }
`;
