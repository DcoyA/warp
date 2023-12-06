import styled from "@emotion/styled";

interface Props {
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderBottom?: string;
  borderTop?: string;
  dir?: string;
  background?: string;
  overflow?: string;
}

const FlexBox = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.marginRight};
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  border-right: ${(props) => props.borderRight};
  border-left: ${(props) => props.borderLeft};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
  flex-direction: ${(props) => props.dir};
  background: ${(props) => props.background};
  overflow: ${(props) => props.overflow};
`;

export default FlexBox;
