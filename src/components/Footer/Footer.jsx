import React from 'react';
import styled from 'styled-components';
function Footer() {
  return (
    <FooterWrapper>
      <FooterInnerWrapper>
        <LanguageSelection>
          <LangKo>한국어</LangKo>
          <LangEn>English</LangEn>
          <LangJa>日本語</LangJa>
        </LanguageSelection>
        <CompanyInfoSection>
          <CompanyName>(주)과팡코퍼레이션</CompanyName>
          <CompanyInfo>
            대표 : 소진수 | 고객센터 : 1234 - 9876 | 사업자 등록번호 2021-08-16
            | 통신판매업신고번호 |27-08-2021-대웅통신
          </CompanyInfo>
          <CompanyInfo>
            주소 : 서울특별시 강남구 삼성동 테헤란로 427 선호빌딩 10F | 이메일 :
            jisun@gwapang.com | 개인정보보호책임자 : 손호민
          </CompanyInfo>
          <ExtraContact>
            고객센터 | 신고센터 | 셀러신청 | 기업셀러신청 | 개인정보처리방침 |
            이용약관
          </ExtraContact>
          <ExtraContact>
            <Icon
              src="https://s3.marpple.co/files/u_1396787/2021/5/original/e989804e6619528533872eedee0f6862c22b71d24.svg"
              alt="insta"
            />
            <Icon
              src="https://s3.marpple.co/files/u_1396787/2021/5/original/783ddbd0bf8a6f3f99a2d58259f04515d0c1d86f6.svg"
              alt="youtube"
            />
            <Icon
              src="https://s3.marpple.co/files/u_1396787/2021/5/original/d71d2d9a18862b4dfc701dc39a84a52748454e6e5.svg"
              alt="twitter"
            />
            <Icon
              src="https://s3.marpple.co/files/u_1396787/2021/5/original/416f17b0001fc2bc4b6aa8c2a4378d03138fb1d72.svg"
              alt="blog"
            />
          </ExtraContact>
        </CompanyInfoSection>
        <Copyright>© 2021 GWAPANG CORP.</Copyright>
      </FooterInnerWrapper>
    </FooterWrapper>
  );
}
export default Footer;
const FooterWrapper = styled.footer`
  bottom: 0px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 2rem 5.71429rem 2rem 5.71429rem;
  height: 250px;
  background-color: #f3f3f3;
  width: 100%;
  font-size: 13px;
`;
const FooterInnerWrapper = styled.div`
  display: inline-block;
  width: 100%;
  justify-content: flex-start;
`;
const LanguageSelection = styled.ul`
  display: flex;
  margin-bottom: 20px;
`;
const LangKo = styled.li`
  float: left;
  font-weight: 600;
  margin-right: 15px;
`;
const LangJa = styled.li`
  float: left;
  color: #828282;
  font-weight: 400;
  margin-right: 15px;
`;
const LangEn = styled.li`
  float: left;
  color: #828282;
  font-weight: 400;
  margin-right: 15px;
`;
const CompanyInfoSection = styled.div`
  margin-top: 30px;
`;
const CompanyName = styled.p`
  font-weight: 600;
  margin: 15px 0 15px 0;
`;
const CompanyInfo = styled.p`
  color: #828282;
  font-weight: 400;
  margin: 5px 0 0 0;
`;
const ExtraContact = styled.p`
  color: #828282;
  font-weight: 400;
  margin: 20px 0 0 0;
`;
const Icon = styled.img`
  margin: 0 20px 0 0;
`;
const Copyright = styled.p`
  display: block;
  color: #828282;
  font-weight: 400;
  text-align: right;
`;
