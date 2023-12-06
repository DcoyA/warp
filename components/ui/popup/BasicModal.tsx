import React, { useEffect, useState } from "react";
import { Button, FlexBox, Text } from "../atoms";
import styled from "@emotion/styled";
import { colors } from "../globalStyle";
import { useRouter } from "next/router";

interface Props {
  title: string;
  contents: string;
  btnText: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 9999;
  width: 905px;
  height: 454px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
`;

const BasicModal = ({ title, contents, btnText, isOpen, setIsOpen }: Props) => {
  const router = useRouter();

  const closeModal = () => {
    setIsOpen(false);
    if (title == "파트너 요청 완료") {
      router.push("/");
    }
  };

  return (
    <>
      {isOpen && (
        <>
          {/* <BackDrop onClick={closeModal}></BackDrop> */}
          <Wrapper>
            <FlexBox
              padding="117px 50px"
              justifyContent="center"
              alignItems="center"
              dir="column"
            >
              <Text fontSize={50}>{title}</Text>
              <Text fontSize={30}>{contents}</Text>
              <Button
                onClickEvent={closeModal}
                backgroundColor={colors.blue01}
                color="white"
                width="148px"
                padding="10px"
                borderRadius="20px"
                margin="50px 0 0 0"
              >
                {btnText}
              </Button>
            </FlexBox>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default BasicModal;
