import React, {ReactNode, useState} from 'react';
import {Platform, TextInput, TextInputProps} from 'react-native';
import styled from 'styled-components/native';
import {
  ColorProps,
  FlexboxProps,
  SpaceProps,
  BorderProps,
  PositionProps,
  BackgroundProps,
  color,
  space,
  flexbox,
  border,
  position,
  background,
  compose,
} from 'styled-system';
import BaseView from './BaseView';
import {ContainerProps} from './Container';
import CustomText from './CustomText';
import Row from './Row';
import theme from '@theme/theme';

export interface InputProps
  extends TextInputProps,
    ColorProps,
    SpaceProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
    BackgroundProps {
  marginTop?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  secureTextEntry?: boolean;
  label?: string;
  paddingY?: string;
  inputContainerStyles?: Partial<ContainerProps>;
  inputWrapperProps?: Partial<ContainerProps>;
  textInputProps?: TextInputProps &
    ColorProps &
    SpaceProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    BackgroundProps;
}

const Input: React.FC<InputProps> = ({
  label,
  leftElement,
  rightElement,
  paddingY = Platform.select({ios: '16px', android: '10px'}),
  inputContainerStyles,
  inputWrapperProps,
  marginTop,
  ...props
}) => {
  const [isFocused, setISFocused] = useState(false);

  const onFocus = () => {
    setISFocused(true);
  };

  const onBlur = () => {
    setISFocused(false);
  };
  return (
    <InputContainer marginTop={marginTop} {...inputContainerStyles}>
        <BaseView
          backgroundColor={'grey'}
          style={{borderRadius: 8}}
          paddingX={'16px'}
          paddingY={paddingY}
          {...inputWrapperProps}>
          <Row>
            {leftElement}
            <InputField
              flex={1}
              paddingX={'0px'}
              placeholderTextColor={theme.colors.gray}
              paddingLeft={leftElement ? '8px' : '0px'}
              onFocus={onFocus}
              onBlur={onBlur}
              color={'black'}
              style={{paddingVertical: 0}}
              {...props}
            />
            {rightElement}
          </Row>
        </BaseView>
    </InputContainer>
  );
};

const InputContainer = styled.View<SpaceProps & FlexboxProps>(
  compose(space, flexbox),
);

const InputField = styled(TextInput)<
  ColorProps &
    SpaceProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    BackgroundProps
>(compose(color, space, flexbox, border, position, background));

export default Input;
