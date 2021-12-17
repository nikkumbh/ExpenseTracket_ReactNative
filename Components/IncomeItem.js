import React from "react";
import { StyleSheet, Text, View } from "react-native";

const IncomeItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.amt}>{props.data.amt} </Text>
        <Text style={styles.desc}>{props.data.desc}</Text>
    </View>
  );
};

export default IncomeItem;

const styles = StyleSheet.create({
  listItem: {
    // borderWidth: 3,
    // borderColor: 'black',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amt: {
    alignItems: "flex-start",
  },
  desc: {
    alignItems: "flex-end",
    
  },
});
