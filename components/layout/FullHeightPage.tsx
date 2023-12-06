import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Page = styled.div`
  /* height: 100%; */
  display: flex;
  flex-direction: column;
`;

const FullHeightPage = ({ children }: Props) => {
  return (
    <>
      <Page>{children}</Page>
      {/* <Global
        styles={css`
          html,
          body {
            height: 100%;
            & > div {
              height: 100%;
            }
          }
        `}
      ></Global> */}
    </>
  );
};

export default FullHeightPage;
