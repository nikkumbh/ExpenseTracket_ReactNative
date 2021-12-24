import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../constant/Color";

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    backgroundColor: Color.header,
    height: 60,
  },
});