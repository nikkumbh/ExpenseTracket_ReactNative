import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TextColor from "../constants/TextColor";

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
    flexDirection: "row",
    borderRadius: 7,
    height: 50,
    marginVertical: 5,
    alignItems : 'center',
    borderColor : '#ff1717',
    backgroundColor : '#ff1717',
  },
  amt: {
    // alignItems: "flex-start",
    width : '50%',
    color: '#1e4b70',
    fontWeight: '700',
    fontSize: 30,
  },
  desc: {
    // alignItems: "flex-start",
    width : '50%',
    color: '#1e4b70',
    fontWeight: '500',
    fontSize: 23,
  },
});
