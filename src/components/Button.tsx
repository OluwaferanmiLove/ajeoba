import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomText from './CustomText';
import styled from 'styled-components/native';
import {
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  compose,
  ColorProps,
  FlexboxProps,
  background,
  SpaceProps,
  LayoutProps,
  BorderProps,
  PositionProps,
  BackgroundProps,
} from 'styled-system';

interface ButtonProps
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
    BackgroundProps {
  title: string;
  eventName?: string;
  eventData?: any;
  textColor?: string;
  disabled?: boolean;
  rightElement?: ReactNode;
  leftElement?: ReactNode;
  onPress?: () => void;
}

/**
 * Base button
 * This components extends basetext components to display the text
 * you can use baseTextProps to control how th text look.
 */

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  textColor = 'white',
  leftElement,
  rightElement,
  disabled,
  eventName,
  eventData,
  ...rest
}) => {
  const styles = StyleSheet.create({
    btnMain: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: disabled ? 0.7 : 1,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const handleOnPress = async () => {
    onPress?.();
  };

  return (
    <ButtonBase
      activeOpacity={0.5}
      // onPress={onPress}
      onPress={handleOnPress}
      paddingY={'12px'}
      paddingX={'16px'}
      opacity={disabled ? 0.4 : 1}
      backgroundColor={'primary400'}
      borderRadius={'8px'}
      disabled={disabled}
      {...rest}>
      <View style={styles.titleContainer}>
        {leftElement}
        <CustomText.BodyMedium
          marginLeft={leftElement ? '8px' : '0'}
          color={textColor}
          fontFamily={'medium'}
          textAlign={'center'}>
          {title}
        </CustomText.BodyMedium>
        {rightElement}
      </View>
    </ButtonBase>
  );
};

const ButtonBase = styled.TouchableOpacity<
  ColorProps &
    SpaceProps &
    LayoutProps &
    FlexboxProps &
    BorderProps &
    PositionProps &
    BackgroundProps
>(compose(color, space, layout, flexbox, border, position, background));

export default Button;
