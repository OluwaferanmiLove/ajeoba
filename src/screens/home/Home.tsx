import 'react-native-gesture-handler';
import MainAppBaseView from '@components/MainAppBaseView';
import Header from './components/Header';
import BaseView from '@components/BaseView';
import Row from '@components/Row';
import Input from '@components/Input';
import { SvgXml } from 'react-native-svg';
import search from '@assets/icons/search.svg'
import filter from '@assets/icons/filter.svg'
import updateStatusBar from '@hooks/updateStatusBar';
import { Animated, Dimensions, FlatList, Platform, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Section from './components/Section';
import { mockProducts } from '@constant/mockData';
import theme from '@theme/theme';
import { carouselData } from '@constant/staticData';
import { hp, wp } from '@utils/responsive-dimension';
import { StyleSheet } from 'react-native';
import { useRef, useState } from 'react';
import styled from 'styled-components/native';

// const {width} = Dimensions.get('screen');
const width = wp(279);

const Dots = ({ scrollX }: { scrollX: Animated.Value }) => {
  const stepPosition = Animated.divide(scrollX, width);

  let activeColor = theme.colors.primary400;
  let inActiveColor = theme.colors.grey02;
  return (
    <View style={style.stepsContainer}>
      {carouselData.map((item, index) => {
        const backgroundColor = stepPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [inActiveColor, activeColor, inActiveColor],
          extrapolate: 'clamp',
        });

        const width = stepPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [wp(7), wp(20), wp(7)],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={`step-${index}`}
            style={[style.steps, { backgroundColor, width }]}
          />
        );
      })}
    </View>
  );
};

function Home() {
  const [scrollX] = useState(new Animated.Value(0));
  const [carouselIndex, setCarouselIndex] = useState(0);

  updateStatusBar('dark-content', 'transparent', true);

  const inserts = useSafeAreaInsets();
  const topSpace = 12;
  let top = Platform.select({ android: inserts.top + topSpace, ios: topSpace });

  const carouselRef = useRef<FlatList>(null);

  const renderCard = ({
    item,
    index,
  }: {
    item: (typeof carouselData)[0];
    index: number;
  }) => {
    return (
      <BaseView
        // flex={0.9}
        borderRadius={'8px'}
        overflow={'hidden'}
        backgroundColor={index === 0 ? 'red' : 'blue'}
        width={`${width}px`}
        marginRight={'16px'}
        height={'123px'}>
        <CarouselImage resizeMode={'cover'} source={item?.image} />
      </BaseView>
    );
  };

  return (
    <BaseView backgroundColor={'grey'}>
      <ScrollView>
        <BaseView backgroundColor={'white'} paddingBottom={'20px'}>
          <Header paddingTop={`${topSpace}px`} title={'Good Morning'} subTitle={'Welcome back'} />
          <BaseView marginTop={'28px'}>
            <Row paddingX={'20px'} style={{ columnGap: 8 }}>
              <BaseView flex={1}>
                <Input
                  leftElement={<SvgXml xml={search} />}
                  placeholder={'Search for products and inputs'} />
              </BaseView>
              <BaseView padding={'14px'} borderRadius={'8px'} backgroundColor={'primary400'}>
                <SvgXml xml={filter} />
              </BaseView>
            </Row>
          </BaseView>
          <BaseView marginTop={'24px'}>
            <FlatList
              ref={carouselRef}
              horizontal
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              // snapToAlignment={'center'}
              contentContainerStyle={{paddingHorizontal: 20}}
              scrollEventThrottle={20}
              data={carouselData}
              renderItem={renderCard}
              keyExtractor={(item, index) => index.toString()}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: { contentOffset: { x: scrollX } },
                  },
                ],
                { useNativeDriver: false },
              )}
            />
          </BaseView>
          <BaseView alignItems={'center'}>
            <Dots scrollX={scrollX} />
          </BaseView>
        </BaseView>
        {mockProducts.map((item) => (
          <Section key={item?.sectionName} sectionTitle={item?.sectionName} products={item?.products} />
        ))}
      </ScrollView>
    </BaseView>
  );
}

const CarouselImage = styled.Image`
  height: 100%;
  width: 100%;
`;

const style = StyleSheet.create({
  stepsContainer: {
    // display: 'none',
    // position: 'absolute',
    // paddingHorizontal: wp(16),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 8,
    // marginTop: hp(30),
  },
  steps: {
    height: hp(7),
    borderRadius: 5,
    marginHorizontal: wp(1),
    marginVertical: wp(7),
  },
});

export default Home;
