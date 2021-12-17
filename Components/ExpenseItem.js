import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ExpenseItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.amt}>{props.data.amt}</Text>
      <Text style={styles.desc}>
        {/*console.log(props)*/}
        {props.data.desc}
      </Text>
    </View>
  );
};

export default ExpenseItem;

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
