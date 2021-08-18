import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

function ImagePreviewer(props) {
  const handleImageAdd = e => {
    const imageArray = Array.from(e.target.files).map(file =>
      URL.createObjectURL(file)
    );
    const fileArray = Array.from(e.target.files);

    props.setImageForUpload(prev => prev.concat(fileArray));
    props.setSelectedImage(prev => prev.concat(imageArray));

    Array.from(e.target.files).map(file => URL.revokeObjectURL(file));
  };

  useEffect(() => {
    if (props.selectedImage.length > 7) {
      props.setSelectedImage(props.selectedImage.slice(0, 7));
      props.setImageForUpload(props.imageForUpload.slice(0, 7));
      alert('그만! 멈춰! 7개면 충분해!!');
    }
  }, [props.selectedImage]);

  const removeImage = index => {
    props.setImageForUpload(prev => {
      let arry = [...prev];
      arry.splice(index, 1);
      return arry;
    });
    props.setSelectedImage(prev => {
      let arr = [...prev];
      arr.splice(index, 1);
      return arr;
    });
  };

  return (
    <LiContainer>
      <Desc>
        상품이미지<RedSpan>*</RedSpan>&nbsp;(
        {props.imageForUpload.length}/7)
      </Desc>
      <InputContainer>
        <Upload>
          <ImageUploadInput
            name="file"
            type="file"
            accept="image/*"
            capture="camera"
            multiple
            onChange={handleImageAdd}
          />
          {props.selectedImage.map((param, index) => {
            return (
              <PreviewContainer key={index}>
                <PreviewImage src={param} alt="*" key={param} />
                <CloseButton
                  onClick={() => {
                    removeImage(param);
                  }}
                  key={index}
                >
                  delete
                </CloseButton>
              </PreviewContainer>
            );
          })}
          <UploadCover>🕵🏻‍♂️</UploadCover>
        </Upload>
        <ImageUploadDesc>
          * 상품 이미지는 640x640에 최적화 되어 있습니다. <br />
          - 이미지는 상품등록 시 정사각형으로 짤려서 등록됩니다. <br />
          - 이미지를 클릭 할 경우 원본이미지를 확인할 수 있습니다. <br />
          - 이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다. <br />- 큰
          이미지일경우 이미지가 깨지는 경우가 발생할 수 있습니다. <br />
          - 최대 지원 사이즈인 640 X 640 으로 리사이즈 해서 올려주세요.(개당
          이미지 최대 10M) <br />
        </ImageUploadDesc>
      </InputContainer>
    </LiContainer>
  );
}

export default ImagePreviewer;

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

const Upload = styled.li`
  position: relative;
  display: flex;
  flex-flow: row wrap;
`;

const PreviewContainer = styled.ul`
  position: relative;
  margin-left: 10px;
`;

const UploadCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 195.996px;
  height: 195.996px;
  left: 10px;
  padding-top: 30px;
  background: linear-gradient(grey, white);
  font-size: 130px;
  z-index: -1;
`;

const PreviewImage = styled.img`
  position: relative;
  width: 195.996px;
  height: 195.996px;
  object-fit: cover;
`;

const ImageUploadInput = styled.input`
  background-color: #fafafa;
  margin-bottom: 10px;
  margin-left: 10px;
  width: 196px;
  height: 196px;
  opacity: 0;
  cursor: pointer;
`;

const ImageUploadDesc = styled.div`
  margin-top: 1.5rem;
  color: rgb(74, 164, 255);
  line-height: 1.5;
  font-size: 14px;
`;

const RedSpan = styled.span`
  color: red;
`;

const CloseButton = styled.button`
  position: absolute;
  width: 60px;
  height: 25px;
  top: 12px;
  right: 10px;
  background-color: darkgrey;
  border-radius: 50px;
  opacity: 80%;
  z-index: 3;

  :hover {
    opacity: 80%;
    background-color: #fafafa;
  }
`;
