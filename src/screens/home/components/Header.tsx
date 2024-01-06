import React from 'react';
import BaseView from '@components/BaseView';
import CustomText from '@components/CustomText';
import {SvgXml} from 'react-native-svg';
import Row from '@components/Row';
import emojiHand from '@assets/icons/emoji-wave-hand.svg'
import notif from '@assets/icons/notif.svg'
import styled from 'styled-components/native';
import { wp } from '@utils/responsive-dimension';
import theme from '@theme/theme';
import SafeView from '@components/SafeView';

const Header = ({
  title,
  subTitle,
  paddingTop,
}: {
  title: string;
  subTitle: string;
  paddingTop: string;
}) => {
  return (
    <SafeView>
      <Row paddingTop={paddingTop} paddingX={'20px'}>
        <Image source={require('@assets/images/user.png')} />
        <BaseView flex={1} marginLeft={'8px'} alignSelf={'stretch'}>
          <Row justifyContent={'flex-start'}>
            <CustomText.BodyMedium marginRight={'8px'} fontFamily={'bold'}>
              {title}
            </CustomText.BodyMedium>
            <SvgXml xml={emojiHand} />
          </Row>
          <CustomText.BodySmall marginTop={'4px'}>
            {subTitle}
          </CustomText.BodySmall>
        </BaseView>
        <NotificationBell>
          <SvgXml xml={notif} />
        </NotificationBell>
      </Row>
    </SafeView>
  );
};

const Image = styled.Image`
  height: ${wp(48)}px;
  width: ${wp(48)}px;
  border-radius: 100px;
`;

const NotificationBell = styled.View`
  padding: 4px;
  border-radius: 100px;
  background-color: ${theme.colors.grey};
`;



export default Header;
