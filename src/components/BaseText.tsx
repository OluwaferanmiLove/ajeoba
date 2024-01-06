import styled from 'styled-components/native';
import {
  color,
  flexbox,
  layout,
  maxWidth,
  space,
  textStyle,
  typography,
  width,
} from 'styled-system';

const BaseText = styled.Text`
  ${color}
  ${space}
  ${textStyle}
  ${typography}
  ${layout}
  ${flexbox}
  ${width}
  ${maxWidth}
`;

export default BaseText;
