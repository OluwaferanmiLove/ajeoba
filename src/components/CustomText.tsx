import React, {ReactNode} from 'react';
import {TextProps, TextStyle} from 'react-native';
import {
  ColorProps,
  FlexProps,
  LayoutProps,
  SpaceProps,
  TextStyleProps,
  TypographyProps,
} from 'styled-system';
import BaseText from './BaseText';
import {wp} from '@utils/responsive-dimension';

interface CustomTextProps
  extends TextProps,
    TextStyleProps,
    TypographyProps,
    SpaceProps,
    ColorProps,
    LayoutProps,
    FlexProps {
  children: ReactNode;
  fontFamily?: 'bold' | 'regular' | 'light' | 'medium' | 'heavy';
}

/**
 * Geneic text component, you con proceed to change the font famil to get the variant.
 * more like empty text components
 */
const Text: React.FC<CustomTextProps> = ({children, ...rest}) => {
  return (
    <BaseText fontFamily={'regular'} {...rest}>
      {children}
    </BaseText>
  );
};

/**
 * Heading1 text component, you con proceed to change the font famil to get the variant.
 * Font size 24px
 * line heaight 32px Desktop Headings/Heading/H1/Bold
 */
const Heading1: React.FC<CustomTextProps> = ({children, ...rest}) => {
  return (
    <BaseText
      fontFamily={'medium'}
      fontSize={'48px'}
      lineHeight={'56px'}
      color={'black'}
      {...rest}>
      {children}
    </BaseText>
  );
};

/**
 * Heading3 text component, you con proceed to change the font famil to get the variant.
 * Font size 24px
 * line heaight 32px Desktop Headings/Heading/H1/Bold
 */
const Heading3: React.FC<CustomTextProps> = ({children, ...rest}) => {
  return (
    <BaseText
      fontFamily={'medium'}
      fontSize={`${wp(32)}px`}
      lineHeight={`${wp(40)}px`}
      color={'black'}
      {...rest}>
      {children}
    </BaseText>
  );
};

/**
 * Heading3 text component, you con proceed to change the font famil to get the variant.
 * Font size 24px
 * line heaight 32px
 */
const Heading4: React.FC<CustomTextProps> = ({children, ...rest}) => {
  return (
    <BaseText
      fontFamily={'medium'}
      fontSize={`${wp(28)}px`}
      lineHeight={'40px'}
      color={'black'}
      {...rest}>
      {children}
    </BaseText>
  );
};

/**
 * Heading3 text component, you con proceed to change the font famil to get the variant.
 * Font size 24px
 * line heaight 32px
 */
const Heading5: React.FC<CustomTextProps> = ({children, ...rest}) => {
  return (
    <BaseText
      fontFamily={'medium'}
      fontSize={'24px'}
      lineHeight={'32px'}
      color={'black'}
      {...rest}>
      {children}
    </BaseText>
  );
};

/**
 * Heading3 text component, you con proceed to change the font famil to get the variant.
 * Font size 24px
 * line heaight 32px
 */
const Heading6: React.FC<CustomTextProps> = ({children, ...rest}) => {
  return (
    <BaseText
      fontFamily={'medium'}
      fontSize={`${wp(20)}px`}
      lineHeight={`${wp(32)}px`}
      color={'black'}
      {...rest}>
      {children}
    </BaseText>
  );
};

/**
 * Body text component, you con proceed to change the font famil to get the variant.
 * Font size 14px
 * line heaight 22px
 */
const BodySmall: React.FC<CustomTextProps> = ({children, ...rest}) => {
  return (
    <BaseText
      fontFamily={'regular'}
      fontSize={`${wp(14)}px`}
      lineHeight={`${wp(24)}px`}
      color={'black'}
      {...rest}>
      {children}
    </BaseText>
  );
};

/**
 * Body text component, you con proceed to change the font famil to get the variant.
 * Font size 14px
 * line heaight 22px
 */
const BodyMedium: React.FC<CustomTextProps> = ({children, ...rest}) => {
  return (
    <BaseText
      fontFamily={'regular'}
      fontSize={`${wp(16)}px`}
      lineHeight={`${wp(28)}px`}
      style={{letterSpacing: wp(1.28)}}
      color={'black'}
      {...rest}>
      {children}
    </BaseText>
  );
};

/**
 * BodyMedium text component, you con proceed to change the font famil to get the variant.
 * Font size 16px
 * line heaight 24px
 */
const BodyLarge: React.FC<CustomTextProps> = ({children, ...rest}) => {
  return (
    <BaseText
      fontFamily={'regular'}
      fontSize={`${wp(18)}px`}
      lineHeight={`${wp(23)}px`}
      color={'black'}
      {...rest}>
      {children}
    </BaseText>
  );
};

/**
 * Feature text component, you con proceed to change the font famil to get the variant.
 * Font size 12px
 * line heaight 16px
 */
const XtraSmall: React.FC<CustomTextProps> = ({children, ...rest}) => {
  return (
    <BaseText
      fontFamily={'regular'}
      fontSize={`${wp(12)}px`}
      lineHeight={`${wp(16)}px`}
      color={'black'}
      {...rest}>
      {children}
    </BaseText>
  );
};

const CustomText = {
  Text,
  BodyLarge,
  BodyMedium,
  BodySmall,
  XtraSmall,
  Heading1,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
};

export default CustomText;
