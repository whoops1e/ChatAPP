import { StyleSheet } from "react-native";
import { color, appStyle } from "../../utility";
import { smallDeviceHeight } from "../../utility/constants";

const getDimensions = () => {
  if (appStyle.deviceHeight > smallDeviceHeight) {
    return {
      height: 155,
      width: 195,
      borderRadius: 50,
      logoFontSize: 60,
    };
  } else {
    return {
      height: 120,
      width: 170,
      borderRadius: 40,
      logoFontSize: 40,
    };
  }
};

export default StyleSheet.create({
  logo: {
    height: getDimensions().height,
    width: getDimensions().width,
    borderRadius: getDimensions().borderRadius,
    backgroundColor: color.DARK_GRAY,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: getDimensions().logoFontSize,
    fontWeight: "bold",
    color: color.WHITE,
  },
});
