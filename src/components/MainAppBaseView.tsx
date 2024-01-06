import React, {ReactNode} from 'react';
import SafeView from './SafeView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Platform} from 'react-native';
import updateStatusBar from '@hooks/updateStatusBar';
import BaseView from './BaseView';

const MainAppBaseView = ({children}: {children: ReactNode}) => {
  const inserts = useSafeAreaInsets();
  const topSpace = 12;
  let top = Platform.select({android: inserts.top + topSpace, ios: 12});

  updateStatusBar('dark-content', 'transparent', true);

  return (
    <SafeView flex={1} backgroundColor={'grey'}>
      <BaseView paddingTop={`${top!}px`} />
      {children}
    </SafeView>
  );
};

export default MainAppBaseView;
