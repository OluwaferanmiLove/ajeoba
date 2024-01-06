import "react-native-gesture-handler";
import MainAppBaseView from "@components/MainAppBaseView";
import BaseView from "@components/BaseView";
import Row from "@components/Row";
import Input from "@components/Input";
import { SvgXml } from "react-native-svg";
import search from "@assets/icons/search.svg";
import filter from "@assets/icons/filter.svg";
import CustomText from "@components/CustomText";
import Button from "@components/Button";
import theme from "@theme/theme";
import { ScrollView } from "react-native";
import ProductCard from "./ProductCard";
import styled from "styled-components/native";
import { mockProducts } from "@constant/mockData";
import { useNavigation } from "@react-navigation/native";

function Section({
  sectionTitle,
  products,
}: {
  sectionTitle: string;
  products: (typeof mockProducts)[0]["products"];
}) {
  const navigation = useNavigation();
  return (
    <BaseView marginTop={"16px"}>
      <Row
        backgroundColor={"secondary25"}
        paddingX={"20px"}
        paddingY={"16px"}
        style={{ columnGap: 8 }}
      >
        <BaseView flex={1}>
          <CustomText.BodyMedium fontFamily={"bold"}>
            {sectionTitle}
          </CustomText.BodyMedium>
        </BaseView>
        <Button
          title={"View All"}
          padding={"8px"}
          backgroundColor={"white"}
          textColor={"primary400"}
          border={`1px solid ${theme.colors.primary400}`}
        />
        {/* <BaseView
          paddingX={'14px'}
          paddingY={'14px'}
          borderRadius={'8px'}
          backgroundColor={'primary400'}>
          <SvgXml xml={filter} />
        </BaseView> */}
      </Row>
      <BaseView flex={1} backgroundColor={"white"}>
        <ProductContainer horizontal showsHorizontalScrollIndicator={false}>
          <Row justifyContent={"flex-start"} style={{ columnGap: 20 }}>
            {products.map((item) => (
              <ProductCard
                onPress={() => navigation.navigate('ProductDetails', item)}
                key={item?.productId}
                image={item?.image}
                productName={item?.productName}
              />
            ))}
          </Row>
        </ProductContainer>
      </BaseView>
    </BaseView>
  );
}

const ProductContainer = styled.ScrollView`
  flex: 1;
  padding: 0 20px;
`;

export default Section;
