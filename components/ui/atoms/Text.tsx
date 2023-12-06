import styled from "@emotion/styled";
import { colors } from "../globalStyle";

interface Props {
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  overflow?: string;
  overflowY?: string;
  width?: string;
  minWidth?: string;
  borderBottom?: string;
  padding?: string;
  lineHeigh?: string;
}

const Text = styled.p<Props>`
  overflow: ${(props) => props.overflow};
  overflow-y: ${(props) => props.overflowY};
  line-height: ${(props) => props.lineHeigh};
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color ?? colors.white};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  border-bottom: ${(props) => props.borderBottom};
  padding: ${(props) => props.padding};
`;

export default Text;
