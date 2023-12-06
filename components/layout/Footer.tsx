import Image from "next/image";
import styled from "@emotion/styled";
import { FlexBox } from "../ui/atoms";

const CopyrightInfo = styled.div`
  display: flex;
  padding-left: 5%;
  background: black;
  color: #fff;
  width: 100%;
  font-size: 16px;
  line-height: 1.2;
  position: fixed;
  bottom: 0;
  img {
    margin-right: 20px;
  }
  @media (max-width: 759px) {
    margin: 0;
    padding: 15px 55px;
  }
`;

const Footer = () => {
  return (
    <CopyrightInfo>
      <FlexBox padding="15px 0">
        <Image src="/warp_logo2.png" alt="war_logo" width={91} height={112} />
        <div>
          상호: 주식회사 워프 대표이사 : 김기연 개인정보책임자 : 박재완
          사업자등록번호 : 346-87-02735 <br />
          통신판매업신고번호 : 제 2023-서울강남-02377
          <br />
          본사 : 서울 강남구 구로구 오류동
          <br /> <br />
          Made byImweb Corp.
        </div>
      </FlexBox>
    </CopyrightInfo>
  );
};

export default Footer;
