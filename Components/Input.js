import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import Color from "../constant/Color";

const Input = (props) => {
  const [amount, setAmount] = useState();
  const [enteredDescription, setEnteredDescription] = useState("");

  const handleDescription = (inputedText) => {
    setEnteredDescription(inputedText);
  };

  const handleAmount = (inputedAmount) => {
    setAmount(inputedAmount);
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.input}>
        <View style={styles.amountContainer}>
          <TextInput
            placeholder="Enter Amount"
            value={amount}
            onChangeText={handleAmount}
            keyboardType="numeric"
            style={styles.amount}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <TextInput
            placeholder="Enter Description"
            value={enteredDescription}
            onChangeText={handleDescription}
            style={styles.description}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.expense}>
          <Button
            title="Expense"
            style={styles.expenseBtn}
            color={Color.lightPurple}
            backgroundColor={Color.lightPurple}
            onPress={() => props.funcAsPropsExp(amount, enteredDescription)}
          />
        </View>

        <View style={styles.income}>
          <Button
            title="Income"
            style={styles.incomeBtn}
            
            color={Color.lightYellow}
            backgroundColor={Color.lightYellow}
            onPress={() => props.funcAsPropsInc(amount, enteredDescription)}
          />
        </View>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    width: "80%",
    marginTop: 40,
    paddingBottom: 20,
  },
  amount: {
    borderRadius: 10,
    backgroundColor: Color.white,
    height: 40,
    width: "100%",
    textAlign: "center",
    fontSize: 17,
  },
  amountContainer: {
    alignItems: "center",
  },
  descriptionContainer: {
    marginVertical: 10,
  },
  description: {
    borderRadius: 10,
    backgroundColor: Color.white,
    height: 40,
    width: "100%",
    textAlign: "center",
    fontSize: 17,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 5,
    //borderWidth: 3,
  },
  income: {
    borderWidth: 5,
    borderColor: Color.yellow,
    borderRadius: 10,
   //backgroundColor:Color.lightYellow,
    
  },
  expense: {
    borderWidth: 5,
    borderColor: Color.header,
    borderRadius: 10,
  },
  incomeBtn: {
    // backgroundColor:Color.lightYellow,
    borderWidth: 10,
    borderRadius: 5,
    color: 'black',
    // color: Color.lightYellow,
  },
  expenseBtn: {
    backgroundColor:Color.lightPurple,
  },
});