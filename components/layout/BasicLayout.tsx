import React from "react";
import FullHeightPage from "./FullHeightPage";
import SideBar from "./SideBar";
import styled from "@emotion/styled";
import Header_m from "../mobile/Header_m";
import bg from "../../public/bg.png";
import { FlexBox } from "../ui/atoms";
import Footer from "./Footer";

interface Props {
  children?: React.ReactNode;
  mobilePage?: boolean;
  hasFooter?: boolean;
}

const mq759 = `@media (max-width: 759px)`;

const Layout = styled.div<Props>`
  display: flex;
  height: 100%;
  ${mq759} {
    display: block;
    height: auto;
    background-size: cover;
    background-image: ${({ mobilePage }) =>
      mobilePage ? `none` : `url(${bg.src})`};
    background-color: ${({ mobilePage }) => (mobilePage ? `#000` : "none")};
    background-repeat: no-repeat;
    max-width: 759px;
  }
`;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden; // 가로 스크롤 이슈로 추가
`;

const BasicLayout: React.FC<Props> = ({ children, mobilePage, hasFooter }) => {
  return (
    <FullHeightPage>
      <Layout mobilePage={mobilePage}>
        <SideBar />
        <Header_m />
        <MainWrapper>
          {children}
          {hasFooter && <Footer />}
        </MainWrapper>
      </Layout>
    </FullHeightPage>
  );
};

export default BasicLayout;
