import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img
        src="https://s3.marpple.co/files/u_1396787/2021/5/original/406d203825fd5bc4bda171cddda029b823b579ae9.svg"
        alt=""
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img
        src="https://s3.marpple.co/files/u_1396787/2021/5/original/c26fedc55eb060c81598fc071be277d8031265cf8.svg"
        alt=""
      />
    </div>
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplayspeed: 4000,
      slidesToShow: 3,
      slidesToScroll: 1,
      rows: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <Slider {...settings}>
        <Message>사과야 도현해 작가 ㅣ 안도현</Message>
        <SubMessage>
          사랑해 대신 <p>사과야는 어때요?(아삭)</p>
        </SubMessage>
        <SlideImg
          src="https://ca.slack-edge.com/TH0U6FBTN-UK70X37HN-a004c5506b50-512"
          alt=""
        />
        <Message>소카페 청년창업가 ㅣ 소진수</Message>
        <SubMessage>
          과일차 <p>한 잔 할래요..?</p>
        </SubMessage>
        <SlideImg
          src="https://ca.slack-edge.com/TH0U6FBTN-U022SRPBG8J-f1b73ebf0676-512"
          alt=""
        />
        <Message>Picklewe 청년창업가 ㅣ 홍연우</Message>
        <SubMessage>
          과일 피클 담그기 <p>10분이면 끝</p>
        </SubMessage>
        <SlideImg
          src="https://ca.slack-edge.com/TH0U6FBTN-U01DTDH988K-e7dc8e066c80-512"
          alt=""
        />
        <Message>AppleStore 공동창업가ㅣ 김성훈</Message>
        <SubMessage>
          사과농장은 <p>가로수 길에도 있어요</p>
        </SubMessage>
        <SlideImg
          src="https://ca.slack-edge.com/TH0U6FBTN-U01D0NZ6RTN-bc4ccc0f953c-512"
          alt=""
        />
        <Message>위스마트팜 CTO ㅣ 김순태</Message>
        <SubMessage>
          Hello<p>World!</p>
        </SubMessage>
        <SlideImg
          src="https://ca.slack-edge.com/TH0U6FBTN-U01BY6QKNJX-34166c478120-512"
          alt=""
        />
      </Slider>
    );
  }
}

const Message = styled.span`
  position: absolute;
  margin: 280px 0 5px 25px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 2px black;
`;

const SubMessage = styled.span`
  position: absolute;
  margin: 330px 0 5px 25px;
  color: white;
  font-size: 2em;
  font-weight: 700;
  text-shadow: 2px 2px 2px black;
`;
const SlideImg = styled.img`
  width: 395px;
  height: 436px;
  padding: 0 10px 0 10px;
  object-fit: cover;
`;
