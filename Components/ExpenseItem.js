import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../constants/Color";
import TextColor from "../constants/TextColor";

const ExpenseItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.amt}>{props.data.amt}</Text>
      
        <Text style={{...styles.desc}}>
          {/*console.log(props)*/}
          {props.data.desc}
        </Text>
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  listItem: {
    //borderWidth: 3,
    minWidth: '80%',
    borderRadius: 7,
    height: 100,
    marginVertical: 5,
    alignItems : 'center',
    backgroundColor : Color.primary,
  },
  amt: {
    //color: "#ff1717",
    color: "white",
    fontWeight: "700",
    fontSize: 25,
    marginBottom: 50,
    textAlign: 'center',
    marginTop: 10,
  },
  desc: {
    textAlign: 'center',
    //color: "#ff1717",
    color: "white",
    fontWeight: "500",
    fontSize: 18,
    marginTop: -45,
    padding: 5,
  },
});
