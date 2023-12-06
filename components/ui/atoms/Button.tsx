import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { colors } from "../globalStyle";

interface Props {
  children: ReactNode;
  margin?: string;
  padding?: string;
  width?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  border?: string;
  borderRadius?: string;
  color?: string;
  colorHover?: string;
  fontSize?: string;
  onClickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
}

const ButtonWrap = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding ?? "10px"};
  width: ${(props) => props.width};
  border: ${(props) => props.border};
  background-color: ${(props) => props.backgroundColor ?? colors.blue01};
  border-radius: ${(props) => props.borderRadius ?? "20px"};
  color: ${(props) => props.color ?? colors.white};
  font-size: ${(props) => props.fontSize};
  &:hover {
    background-color: ${(props) => props.backgroundColorHover};
    color: ${(props) => props.colorHover};
  }
  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const Button: React.FC<Props> = ({
  children,
  onClickEvent,
  isDisabled = false,
  ...styleProps
}) => {
  return (
    <ButtonWrap {...styleProps} onClick={onClickEvent} disabled={isDisabled}>
      {children}
    </ButtonWrap>
  );
};

export default Button;
