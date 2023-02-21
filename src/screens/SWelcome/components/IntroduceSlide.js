import React from "react";
import { View, Dimensions, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const IntroduceSlider = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        height={400}
        horizontal={true}
        loop={true}
        autoplay
      >
        <View style={styles.slide}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../../../assests/images/slide-welcome1.png")}
          />
        </View>
        <View style={styles.slide}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../../../assests/images/slide-welcome2.png")}
          />
        </View>
      </Swiper>
    </View>
  );
};
export default IntroduceSlider;
const styles = StyleSheet.create({
  container: {
    height: 400,
  },
  slide: {
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
  image: {
    width,
    flex: 1,
    height: 400,
  },
});


