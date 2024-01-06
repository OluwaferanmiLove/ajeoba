import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { customFonts } from './src/constant/staticData';
import * as SplashScreen from 'expo-splash-screen';
import theme from '@theme/theme';
import { ThemeProvider } from 'styled-components/native';
import BaseApp from '@navigation/AppNavigation';

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <BaseApp />
      {/* <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View> */}
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
