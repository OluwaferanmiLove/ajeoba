import "react-native-gesture-handler";
import MainAppBaseView from "@components/MainAppBaseView";
import BaseView from "@components/BaseView";
import Row from "@components/Row";
import Input from "@components/Input";
import { SvgXml } from "react-native-svg";
import star from "@assets/icons/star.svg";
import filter from "@assets/icons/filter.svg";
import CustomText from "@components/CustomText";
import Button from "@components/Button";
import theme from "@theme/theme";
import styled from "styled-components/native";
import { hp, wp } from "@utils/responsive-dimension";
import { TouchableOpacity } from "react-native";

function ProductCard({
  onPress,
  productName,
  image,
}: {
  onPress: () => {};
  productName: string;
  image: any;
}) {
  return (
    <BaseView marginY={"24px"}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        <Image source={image} />
        <BaseView marginTop={"8px"}>
          <CustomText.BodyMedium marginTop={"8px"} fontFamily={"regular"}>
            {productName}
          </CustomText.BodyMedium>
        </BaseView>
        <Row marginTop={"12px"} justifyContent={"flex-start"}>
          <SvgXml xml={star} />
          <CustomText.BodySmall color={"#8b8b8b"}> (92)</CustomText.BodySmall>
        </Row>
        <BaseView marginTop={"12px"}>
          <CustomText.BodyMedium fontFamily={"bold"}>
            ₦ 10,000 <CustomText.BodyMedium>(per kg)</CustomText.BodyMedium>
          </CustomText.BodyMedium>
        </BaseView>
      </TouchableOpacity>
    </BaseView>
  );
}

const Image = styled.Image`
  height: ${hp(100)}px;
  width: ${wp(164)}px;
  border-radius: 8px;
`;

export default ProductCard;
