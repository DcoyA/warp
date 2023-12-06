import React from "react";
import { FlexBox } from "../ui/atoms";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
  url: string;
}

interface BackgroundImageWrapperProps {
  url: string;
}

const BackgroundImageWrapper = styled.div<BackgroundImageWrapperProps>`
  background-image: url(${(props) => props.url});
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative; // footer
  height: ${(props) => props.url && "100%"};
`;

const PageLayout = ({ children, url }: Props) => {
  return (
    <BackgroundImageWrapper url={url}>
      <FlexBox
        background="rgba(0,0,0,0.8)"
        height="100%"
        padding="5% 5%"
        dir="column"
        width="100%"
        style={{
          boxSizing: "border-box",
        }}
      >
        {children}
      </FlexBox>
    </BackgroundImageWrapper>
  );
};

export default PageLayout;
