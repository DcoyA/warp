import React from "react";
import { FlexBox, Text } from "./atoms";
import styled from "@emotion/styled";

interface Props {
  title: string;
  height?: string;
  fontSize: number;
}

const UnderlineTextBar = ({ title, fontSize, height }: Props) => {
  return (
    <Text fontSize={fontSize} width="100%" style={{ height: height }}>
      {title}
    </Text>
  );
};

export default UnderlineTextBar;
