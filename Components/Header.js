import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../constant/Color";
const Header = () => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>EXPENSE TRACKER</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headingContainer: {
    // borderBottomWidth: 3,
    marginBottom: 30,
    width: "100%",
    alignItems: "center",
    padding: 10,
    backgroundColor: Color.header,
    height: 90,
    elevation: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, heigh: 100 },
    // shadowRadius: 15,
  },
  heading: {
    // borderBottomWidth: 5,
    fontSize: 30,
    marginTop: 35,
    fontWeight: "bold",
    color: "white",
  },
});