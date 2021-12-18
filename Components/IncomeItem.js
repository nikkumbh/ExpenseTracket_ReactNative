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
    //borderWidth: 3,
    minWidth: '80%',
    borderRadius: 7,
    height: 100,
    marginVertical: 5,
    alignItems : 'center',
    backgroundColor : Color.primary,
  },
  amt: {
    //color: '#0af58b',
    color: 'white',
    fontWeight: '700',
    fontSize: 25,
    marginBottom: 50,
    textAlign: 'center',
    marginTop: 10,
    // borderWidth: 3,
  },
  desc: {
    // borderWidth: 3,
    textAlign: 'center',
    //color: '#0af58b',
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
    marginTop: -45,
    padding: 5,
  },
});
