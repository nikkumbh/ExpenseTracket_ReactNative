import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../constant/Color";
import Navigation from "../screens/Navigation";

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      {/* <Navigation /> */}
      {/*<Text style={styles.footer}>Footer</Text>*/}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.header,
    justifyContent: "center",
    height: 60,
  },
  footer: {
    elevation: 10,
    fontSize: 10,
    marginTop: 35,
    fontWeight: "bold",
    color: "white",
  },
});