# 과팡 (마플샵, 번개장터를 모티브로 한 과일 판매 사이트)
<div align="center"> 
  
  ![Gwapang_logo](https://user-images.githubusercontent.com/79290170/131094347-a9404adc-28dd-418c-96ed-910539ea2556.png)
  
  <br>
</div>

## GWAPANG Project Teammate

- F.E<br>
  [소진수(PM)](https://github.com/joshhhso)<br>
  [황대웅](https://github.com/croissant93)<br>
  [이지선](https://github.com/jellypeach/)<br>
  <br>
- B.E<br>
  [백선호](https://github.com/preferbaik)<br>
  [손호민](https://github.com/shm39)<br> 
  <br>

## What is GWAPANG Project?

- 크리에이터 굿즈를 판매하는 [마플샵](https://www.marple.com/)을 모티브로한 과일판매 사이트 제작
- 촉박한 프로젝트 기간이었지만 실제 사용가능한 사이트를 새롭게 제작고자 기획을 동시에 진행했습니다.
- "과일 판매"를 주제로 굿즈를 과일로로 대체하여 판매하는 웹 사이트를 제작했습니다.
- wecode Bootcamp에서 배운 React, Javascript, HTML/CSS, Scss, Django, Python을 바탕으로 구현할 수 있는 기능들과<br>
  그 외에 툴인 Github, Git, Trello등 을 추가로 사용하여 프로젝트 진행을 관리했습니다.
- 개발은 초기 세팅부터 직접 구현했으며, 프론트와 백을 연결해 AWS(EC2, S3, RDS)를 활용하여 배포까지 진행했습니다.

### 개발 인원 및 기간

- 개발기간 : 2021/8/13 ~ 2021/8/27
- 개발 인원 : 프론트엔드 3명, 백엔드 2명
- [B.E github 링크](https://github.com/wecode-bootcamp-korea/23-2nd-GWAPANG-backend)

### 프로젝트 선정이유

- 평범한 E-commerce의 형태를 벗어난 신선한 마플샵의 웹 사이트를 클론하고 싶었습니다.
- 판매자와 구매자를 모두 경험할 수 있는 유저의 경험을 직접 제작해보고 싶었습니다.
- 새로운 기능을 제작하고 배포하기 위한 조건이 충족된 사이트라고 판단했습니다.

## 적용 기술 및 구현 기능

### 적용 기술

> -Front-End : javascript ES6, React.js(함수형) framwork, styled-componenet, AWS(EC2)<br>
> -Back-End : Python, Django web framework, MySQL, Bcrypt, pyjwt, AWS(S3, RDS)<br>
> -Common : POSTMAN, RESTful API, KAKAO API

### 구현 기능

#### 소진수

- 업로드 페이지
  - 업로드 페이지 html, css 제작
  - S3 이미지 업로드 기능 구현 ( formdata를 이용한 이미지 업로드 )
  - 업로드 이미지 삭제 기능 구현 ( splice와 깊은 복사를 활용한 삭제 기능 )
  - 업로드 이미지 비리보기 기능 구현 ( blob 이미지를 활용한 미리보기 구현 )
  - 글자 제한 기능 구현 ( useEffect를 활용한 글자 제한 구현 )

- 업로드 수정 페이지
  - 업로드 페이지 컴포넌트를 재활용하여 수정 페이지 제작

- 상품 상세 페이지
  - 구매 섹션 제작 ( 스티키 활용 ) 
  - simple css animation 활용
  - 상품 개수 제한 ( customHook 활용 )
  - 리뷰 / 상품 정보 데이터 송수신 ( Axios.get/post 활용 )
  - 리뷰 모달창 제작

- 댓글 페이지
  - 이미지 업로드 컴포넌트 재활용

#### 황대웅

- 셀러 리스트 페이지
- 셀러 검색 페이지
- 프론트엔드 배포

#### 이지선

- 로그인 / 로그아웃
- NAV / Footer
- 메인페이지

#### 영상 결과물 ( 클릭 )

[![영상 결과물](https://user-images.githubusercontent.com/79290170/131098377-6ed61921-ee6a-431c-97c8-bdd5fb5c796e.png)](https://youtu.be/-L_NpY3ExXc)

## Reference

- 이 프로젝트는 [마플샵](https://https://marpple.shop/kr/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
