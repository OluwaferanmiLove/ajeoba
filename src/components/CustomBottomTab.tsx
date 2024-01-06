import React, {useState} from 'react';
import {Platform} from 'react-native';
import CustomText from './CustomText';
import {SvgXml} from 'react-native-svg';
import home from '@assets/icons/home-icon.svg';
import orders from '@assets/icons/orders.svg';
import wallet from '@assets/icons/wallet.svg';
import profile from '@assets/icons/profile.svg';
import Row from './Row';
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import theme from '@theme/theme';
import BaseView from './BaseView';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { wp } from '@utils/responsive-dimension';

function CustomBottomTab({state, descriptors, navigation}: BottomTabBarProps) {
  const [isActionModalVisible, setisActionModalVisible] = useState(false);

  const inserts = useSafeAreaInsets();

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions?.tabBarStyle?.display === 'none') {
    return null;
  }

  const handleModalClose = () => {
    setisActionModalVisible(false);
  };

  const handleModalOpen = () => {
    setisActionModalVisible(true);
  };

  return (
    <>
      <Row
        backgroundColor={'secondary25'}
        paddingX={'35px'}
        // paddingTop={'6px'}
        // style={{columnGap: wp(48)}}
        paddingBottom={Platform.select({android: 12, ios: 0 + inserts.bottom})}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const getIcon = (type: string) => {
            switch (type) {
              case 'Home':
                if (isFocused) {
                  return <SvgXml xml={home} fill={theme.colors.primary400} />
                } else {
                  return <SvgXml xml={home} fill={theme.colors.gray} />;
                }
              case 'Orders':
                if (isFocused) {
                  return <SvgXml xml={orders} stroke={theme.colors.primary400} />
                } else {
                  return <SvgXml xml={orders} stroke={theme.colors.gray} />;
                }
              case 'Wallet':
                if (isFocused) {
                  return <SvgXml xml={wallet} stroke={theme.colors.primary400} />
                } else {
                  return <SvgXml xml={wallet} stroke={theme.colors.gray} />;
                }
              case 'Profile':
                if (isFocused) {
                  return <SvgXml xml={profile} stroke={theme.colors.primary400} />
                } else {
                  return <SvgXml xml={profile} stroke={theme.colors.gray} />;
                }

              default:
                break;
            }
          };

          return (
              <TabContainer
                activeOpacity={0.95}
                onPress={() => onPress()}
                key={label}>
                <>
                  <ActiveIndicator isFocused={isFocused} />
                  {getIcon(label)}
                  <CustomText.BodySmall
                    marginTop={'4px'}
                    color={isFocused ? 'primary400' : 'gray'}
                    fontFamily={'regular'}>
                    {label as string}
                  </CustomText.BodySmall>
                </>
              </TabContainer>
          );
        })}
      </Row>
    </>
  );
}

const TabContainer = styled.TouchableOpacity`
  /* flex: 1; */
  align-items: center;
  justify-content: center;
`;

const ActiveIndicator = styled.View<{isFocused: boolean}>`
  height: 3px;
  width: 100%;
  align-items: center;
  opacity: ${props => props.isFocused ? 1 : 0};
  justify-content: center;
  background-color: ${theme.colors.primary400};
  border-bottom-left-radius: 200px;
  border-bottom-right-radius: 200px;
  margin-bottom: 12px;
`;

const ActionContainer = styled.TouchableOpacity`
  /* flex: 1; */
  /* padding: 14px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary400};
  border-radius: 200px;
  margin-bottom: 8px; */
  /* box-shadow: 0px 5px 10px 0px rgba(129, 109, 232, 0.5); */
`;

const ActionInner = styled.View`
  padding: 14px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary400};
  border-radius: 200px;
  margin-bottom: 8px;
`;

export default CustomBottomTab;

// // ...

// <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
//   {...}
// </Tab.Navigator>
