import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TextColor from "../constants/TextColor";

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
    flexDirection: "row",
    borderRadius: 7,
    height: 50,
    marginVertical: 5,
    alignItems : 'center',
    borderColor : '#0af58b',
    backgroundColor : '#0af58b',
  },
  amt: {
    // alignItems: "flex-start",
    width : '50%',
    color: '#1e4b70',
    fontWeight: '700',
    fontSize: 30,
  },
  desc: {
    // alignItems: "flex-end",
    width : '50%',
    color: '#1e4b70',
    fontWeight: '500',
    fontSize: 23,
    
  },
});
