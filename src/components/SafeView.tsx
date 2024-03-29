import styled from 'styled-components/native';
import {
  color,
  space,
  layout,
  flexbox,
  compose,
  ColorProps,
  FlexboxProps,
  background,
  SpaceProps,
  LayoutProps,
  BackgroundProps,
} from 'styled-system';

const SafeView = styled.SafeAreaView<
  ColorProps & SpaceProps & LayoutProps & FlexboxProps & BackgroundProps
>(compose(color, space, layout, flexbox, background));

export default SafeView;
