import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API } from '../../config';
import { useHistory } from 'react-router-dom';

const stars = ['★', '★', '★', '★', '★'];

function ProductReview(props) {
  const { id } = props;
  const [imageUpload, setImageUpload] = useState([]);
  const [imagePreview, setImagePreview] = useState('');
  const [rate, setRate] = useState(5);
  const [comment, setComment] = useState();
  const history = useHistory();

  const handleImageAdd = e => {
    const imageArray = Array.from(e.target.files).map(file =>
      URL.createObjectURL(file)
    );
    const fileArray = Array.from(e.target.files);

    setImageUpload(prev => prev.concat(fileArray));
    setImagePreview(prev => prev.concat(imageArray));

    Array.from(e.target.files).map(file => URL.revokeObjectURL(file));
  };

  const handleUploadImage = e => {
    const formData = new FormData();
    for (let i = 0; i < imageUpload.length; i++) {
      formData.append('image', imageUpload[i]);
    }
    formData.append('content', comment);
    formData.append('grade', rate);
    const header = {
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
        'Content-Type': 'multipart/form-data',
      },
    };
    axios.post(`${API.REVIEW}/${id}`, formData, header);
    window.location.reload();
    props.setModal(0);
  };

  console.log(rate);
  return (
    <BodyContainer>
      <ReviewContainer>
        <ReviewContainerTop>
          <ReviewInfo>리뷰 상세</ReviewInfo>
          <Exit
            type="button"
            value="EXIT"
            onClick={() => {
              props.setModal(0);
            }}
          />
        </ReviewContainerTop>
        <ReviewContainerBot>
          <ReviewLeft>
            Click here to upload Image
            <PreviewImage alt="" src={imagePreview} />
            <UploadImage
              type="file"
              accept="image/*"
              onChange={handleImageAdd}
            />
          </ReviewLeft>
          <ReviewRight>
            <Rate>
              <StarContainer>
                {stars.map((star, index) => (
                  <ColorStar
                    onClick={e => {
                      alert(`5점으로 평가되었습니다`);
                    }}
                    key={index}
                  >
                    {star}
                  </ColorStar>
                ))}
              </StarContainer>
            </Rate>
            <Comment
              placeholder="내용을 입력하세요"
              onChange={e => {
                setComment(e.target.value);
              }}
            ></Comment>
            <Upload type="button" value="UPLOAD" onClick={handleUploadImage} />
          </ReviewRight>
        </ReviewContainerBot>
      </ReviewContainer>
    </BodyContainer>
  );
}

export default ProductReview;

const StarContainer = styled.div`
  position: absolute;
  display: flex;
`;

const ColorStar = styled.div`
  z-index: 10;
  color: green;
  cursor: pointer;
`;

const EmptyStar = styled.div`
  z-index: 9;
  color: white;
`;

const Comment = styled.textarea`
  margin: 20px;
  width: 655px;
  height: 70%;
  border: none;
  resize: none;
  background-color: #d7e0d8;

  :focus {
    outline: 0;
  }
`;

const UploadImage = styled.input`
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const PreviewImage = styled(UploadImage.withComponent('img'))`
  opacity: 1;
`;

// const Title = styled.input`
//   display: flex;
//   align-items: center;
//   margin-top: 15px;
//   padding-left: 20px;
//   width: 100%;
//   height: 50px;
//   font-size: 30px;
//   border-bottom: 3px solid lightgrey;
//   color: #222422;
//   background-color: #d7e0d8;
//   border: none;

//   :focus {
//     color: #222422;
//     background-color: #d7e0d8;
//     border: none;
//     outline: none;
//   }
// `;

const Rate = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding-left: 20px;
  margin-top: 20px;
  height: 30px;
  width: 100%;
  font-size: 30px;
  border-bottom: 3px solid lightgrey;
  color: #222422;
  border: none;
  color: green;
`;

const ReviewLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d7e0d8;
  position: relative;
  width: 560px;
  height: 560px;
  margin-right: 20px;
`;

const ReviewRight = styled.div`
  position: relative;
  width: 693px;
  background-color: #d7e0d8;
  border-radius: 15px;
`;

const Exit = styled.input`
  padding: 6px;
  background-color: #ade06a;
  border-radius: 3px;
  border: none;
  margin-right: 3px;
  cursor: pointer;
  margin-right: 20px;
`;

const Upload = styled(Exit.withComponent('input'))`
  position: absolute;
  margin-right: 8px;
  bottom: 15px;
  right: 12px;
  height: 30px;
`;

const ReviewInfo = styled.div`
  color: #ade06a;
  font-weight: 700;
  font-size: 20px;
`;

const ReviewContainer = styled.div`
  background-color: #f3fcf4;
  border: 1px solid lightgrey;
  border-radius: 15px;
  padding: 30px;
`;

const ReviewContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 20px;
`;

const ReviewContainerBot = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
`;

const BodyContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.46);
  z-index: 999;
`;
