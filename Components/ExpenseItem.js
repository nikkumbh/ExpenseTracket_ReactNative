import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../constant/Color";
// import TextColor from "../constants/TextColor";

const ExpenseItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.amt}>{props.data.amt}</Text>
      <Text style={{ ...styles.desc }}>{props.data.desc}</Text>
      {props.data.category === "expense" ? (
        <Text style={styles.exp}>Expense</Text>
      ) : (
        <Text style={styles.inc}>Income</Text>
      )}
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    minWidth: "80%",
    borderRadius: 10,
    marginVertical: 5,
    alignItems: "center",
    backgroundColor: Color.primary,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
    flexWrap: "wrap",
  },
  amt: {
    color: "white",
    borderRadius: 10,
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
    backgroundColor: Color.grey,
    padding: 10,
    borderRadius: 10,
    fontWeight: "600",
    elevation: 5,
    minWidth: "20%",
  },
  desc: {
    elevation: 5,
    borderRadius: 10,
    color: "white",
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
    backgroundColor: Color.grey,
    padding: 10,
    borderRadius: 10,
    fontWeight: "600",
    minWidth: "50%",
  },
  exp: {
    elevation: 5,
    color: "red",
    fontWeight: "500",
    borderRadius: 10,
    fontSize: 15,
    textAlign: "center",
    backgroundColor: Color.grey,
    padding: 10,
    borderRadius: 10,
    fontWeight: "600",
    minWidth: "21%",

  },
  inc: {
    elevation: 5,
    color: "green",
    fontWeight: "500",
    fontSize: 15,
    borderRadius: 3,
    textAlign: "center",
    backgroundColor: Color.grey,
    padding: 10,
    borderRadius: 10,
    fontWeight: "600",
    minWidth: "21%",
  },
});