import React from "react";
import { FlexBox } from "../atoms";
import styled from "@emotion/styled";

interface Props {
  title: string;
  contents?: string;
  btnText: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const ModalWindow = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = ({ isOpen, setIsOpen, children }: Props) => {
  return (
    <>
      {isOpen && (
        <>
          <ModalWindow>
            <FlexBox
              padding="40px 40px"
              justifyContent="center"
              alignItems="center"
              dir="column"
              background="white"
              style={{
                borderRadius: "12px",
                boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.15)",
              }}
            >
              {children}
            </FlexBox>
          </ModalWindow>
        </>
      )}
    </>
  );
};

export default Modal;
