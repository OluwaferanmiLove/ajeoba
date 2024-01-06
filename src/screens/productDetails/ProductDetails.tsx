import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import MainAppBaseView from '@components/MainAppBaseView';
import CustomText from '@components/CustomText';
import Row from '@components/Row';
import BaseView from '@components/BaseView';
import theme from '@theme/theme';
import Button from '@components/Button';
import { SvgXml } from 'react-native-svg';
import arrowLeft from '@assets/icons/arrow-left.svg';
import styled from 'styled-components/native';
import updateStatusBar from '@hooks/updateStatusBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { hp, wp } from '@utils/responsive-dimension';
import Container from '@components/Container';
import { RouteProp, useRoute } from '@react-navigation/native';
import star from "@assets/icons/star.svg";
import minus from "@assets/icons/minus.svg";
import add from "@assets/icons/add.svg";
import { Ionicons } from '@expo/vector-icons';

function ProductDetails() {
  const inserts = useSafeAreaInsets();
  let bottom = inserts.bottom;

  updateStatusBar('dark-content', 'transparent', true);

  const { params } = useRoute<RouteProp<{ params: { image: any; productName: any } }>>();

  return (
    <MainAppBaseView>
      <Row
        backgroundColor={"secondary25"}
        paddingX={"20px"}
        paddingY={"16px"}
        style={{ columnGap: 8 }}>
        <TouchableOpacity>
          <SvgXml xml={arrowLeft} />
        </TouchableOpacity>
        <BaseView flex={1} alignItems={'center'}>
          <CustomText.BodyMedium fontFamily={"bold"}>
            Details
          </CustomText.BodyMedium>
        </BaseView>
      </Row>
      <Container>
        <ProductCard>
          <BaseView width={'100%'} height={'200px'}>
            <ProductImage source={params?.image} />
          </BaseView>
          <Row marginTop={'16px'} px={'16px'}>
            <CustomText.Heading5>{params?.productName}</CustomText.Heading5>
            <BaseView px={'12px'} py={'2px'} borderRadius={'4px'} backgroundColor={'secondary400'}>
              <CustomText.XtraSmall color={'white'} fontFamily={'bold'}>Wholesale</CustomText.XtraSmall>
            </BaseView>
          </Row>
          <Row marginTop={'8px'} px={'16px'}>
            <CustomText.BodyMedium>Seller: Ajike Njoku</CustomText.BodyMedium>
            <Row justifyContent={"flex-start"}>
              <SvgXml xml={star} />
              <CustomText.BodySmall color={"#8b8b8b"}> (92)</CustomText.BodySmall>
            </Row>
          </Row>
          <BaseView width={'100%'} mx={'16px'} my={'16px'} borderTopWidth={'1px'} borderTopColor={'grey'} />
          <BaseView px={'16px'}>
            <CustomText.BodySmall color={"#686868"}>Lorem ipsum dolor sit amet consectetur. Sit imperdiet tempus ut scelerisque in enim laoreet ut mi</CustomText.BodySmall>
          </BaseView>
          <BaseView
            backgroundColor={"secondary25"}
            mt={'16px'}
            paddingX={"12px"}
            paddingY={"16px"}>
            <CustomText.BodyLarge fontFamily={"bold"}>
              ₦ 10,000 <CustomText.XtraSmall>(per kg)</CustomText.XtraSmall>
            </CustomText.BodyLarge>
          </BaseView>
        </ProductCard>
        <Row marginTop={'24px'} px={'16px'} style={{ columnGap: 8 }}>
          <BaseView flex={1} borderTopWidth={'1px'} borderTopColor={'#EAEAEA'} />
          <CustomText.BodyMedium color={'gray'}>WAREHOUSE INFORMATION</CustomText.BodyMedium>
          <BaseView flex={1} borderTopWidth={'1px'} borderTopColor={'#EAEAEA'} />
        </Row>
        <WarehouseCard>
          <BaseView>
            <CustomText.BodySmall color={'darkerGreen'} fontFamily={'medium'}>Warehouse distribution</CustomText.BodySmall>
            <Row marginTop={'8px'}>
              <CustomText.BodySmall color={'#898B87'}>Gennee Warehousing</CustomText.BodySmall>
              <CustomText.BodySmall fontFamily={'medium'}>20.00 Ton</CustomText.BodySmall>
            </Row>
          </BaseView>
          <BaseView marginTop={'24px'}>
            <CustomText.BodySmall color={'darkerGreen'} fontFamily={'medium'}>Warehouse certificate</CustomText.BodySmall>
            <Row marginTop={'8px'}>
              <CustomText.BodySmall color={'#898B87'}>FFM+ - aggregation.png</CustomText.BodySmall>
              <CustomText.BodySmall fontFamily={'medium'} color={'darkerGreen'}>Download</CustomText.BodySmall>
            </Row>
          </BaseView>
        </WarehouseCard>
      </Container>
      <BaseView
        px={'20px'}
        pt={'12px'}
        width={'100%'}
        position={'absolute'}
        backgroundColor={'white'}
        pb={`${bottom}px`}
        bottom={'0px'}>
        <Row style={{ columnGap: 20 }}>
          <Row
            backgroundColor={"secondary25"}
            px={'16px'}
            py={'14px'}
            border={`1px solid ${theme.colors.primary400}`}
            borderRadius={'8px'}
            style={{ columnGap: 8 }}>
            <TouchableOpacity>
              <SvgXml xml={minus} />
            </TouchableOpacity>
            <CustomText.BodySmall fontFamily={'medium'} color={'darkerGreen'}>1</CustomText.BodySmall>
            <TouchableOpacity>
              <SvgXml xml={add} />
            </TouchableOpacity>
          </Row>
          <Button flex={1} title={"Proceed to purchase"} />
        </Row>
      </BaseView>
    </MainAppBaseView>
  );
}

const ProductCard = styled.View`
  background-color: white;
  margin-top: 24px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.grey02};
  overflow: hidden;
`;

const WarehouseCard = styled.View`
  background-color: white;
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.grey02};
  overflow: hidden;
`;

const ProductImage = styled.Image`
  height: 100%;
  width: 100%;
`;

export default ProductDetails;
