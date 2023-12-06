import styled from "@emotion/styled";
import React from "react";
import { colors } from "./globalStyle";
import { Button, FlexBox, Text } from "./atoms";

interface InputProps {
  width?: string;
  height?: string;
  paddingTop?: string;
  margin?: string;
}
interface Props {
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

interface InputBoxProps {
  type: string;
  label: string;
  width?: string;
  value?: string;
  placeholder?: string;
  margin?: string;
  padding?: string;
  paddingTop?: string;
  height?: string;
  isButton?: boolean;
  buttonText?: string;
  buttonWidth?: string;
  textMinWidth?: string;
  buttonColor?: string;
  buttonPadding?: string;
  propsRef?: React.RefObject<HTMLInputElement>;
  onClickEvent?: () => void;
}

const Input = styled.input<InputProps>`
  border-radius: 20px;
  background: ${colors.gray02};
  width: ${(props) => props.width ?? "100%"};
  height: ${(props) => props.height ?? "57px"};
  padding-top: ${(props) => props.paddingTop}px;
  color: white;
  padding: 8px 12px;
  margin: ${(props) => props.margin ?? "0px"};
  :focus {
    outline: none;
  }
`;
const Label = styled.label<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding ?? "10px"};
  width: ${(props) => props.width};
  border: ${(props) => props.border};
  background-color: ${(props) => props.backgroundColor ?? colors.blue01};
  border-radius: ${(props) => props.borderRadius ?? "20px"};
  cursor: pointer;
`;

const InputBox = ({
  type,
  label,
  width,
  value,
  placeholder,
  padding,
  margin,
  paddingTop,
  height,
  // button 형으로 커스텀 (button style관련 props)
  isButton,
  buttonColor,
  buttonText,
  buttonWidth,
  buttonPadding,
  textMinWidth,
  propsRef,
  onClickEvent,
}: InputBoxProps) => {
  return (
    <FlexBox alignItems="center" padding={padding} paddingTop={paddingTop}>
      <Text width="200px" minWidth={textMinWidth}>
        {label}
      </Text>

      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        width={width}
        height={height}
        margin={margin}
        ref={propsRef as React.RefObject<HTMLInputElement>}
      />

      {isButton ? (
        <>
          <Label
            htmlFor="input-file"
            width={buttonWidth}
            backgroundColor={buttonColor}
            padding={buttonPadding}
            onClickEvent={onClickEvent}
          >
            {buttonText}
          </Label>
          <input
            type="file"
            id="input-file"
            accept="image/*"
            style={{ display: "none" }}
          />
        </>
      ) : undefined}
    </FlexBox>
  );
};

export default InputBox;
