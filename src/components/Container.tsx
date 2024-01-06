import React, {ReactNode} from 'react';
import BaseView from './BaseView';
import {
  ColorProps,
  FlexboxProps,
  SpaceProps,
  LayoutProps,
  BorderProps,
  PositionProps,
  BackgroundProps,
} from 'styled-system';
import {Platform, ViewProps, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export interface ContainerProps
  extends ViewProps,
    ColorProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
    BackgroundProps {
  children: ReactNode;
  insertTop?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  insertTop,
  ...rest
}) => {
  const inserts = useSafeAreaInsets();
  let top = Platform.select({android: `${inserts.top}px`, ios: '0px'});
  return (
    <BaseView
      flex={1}
      paddingX={'20px'}
      // backgroundColor={'white'}
      marginTop={insertTop ? top : 0}
      {...rest}>
      {children}
    </BaseView>
  );
};

export default Container;
