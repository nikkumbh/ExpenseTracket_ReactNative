import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../constants/Color";
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
    borderWidth: 3,
    flexDirection: "row",
    width: '70%',
    borderRadius: 7,
    height: 100,
    marginVertical: 5,
    alignItems : 'center',
    //borderColor : '#0af58b',
    //backgroundColor : '#0af58b',
    backgroundColor : Color.primary,
  },
  amt: {
    // alignItems: "flex-start",
    width : '100%',
    color: '#0af58b',
    //color: "white",
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 50,
  },
  desc: {
    // alignItems: "flex-end",
    width : '100%',
    color: '#1e4b70',
    fontWeight: '500',
    fontSize: 13,
    
  },
});
