import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

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
          color = 'white'
          onPress={() => props.funcAsPropsExp(amount, enteredDescription)}
        />
        </View>

        <View style={styles.income}>
        <Button
          color = 'white'
          title="Income"
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
    width: "70%",
    paddingTop: 30,
  },
  amount: {
    marginTop: 15,
    borderWidth: 2,
    borderRadius: 10,
    height: 40,
    width: "45%",
    textAlign: "center",
    fontSize: 17,
  },
  amountContainer: {
    alignItems: "center",
  },
  descriptionContainer:{
    marginVertical: 10,
  },
  description: {
    marginVertical: 10,
    marginBottom: 10,
    borderBottomWidth: 2,
    marginVertical: 10,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  expense: {
      backgroundColor: 'red',
      borderRadius: 9,
  },
  income: {
    backgroundColor: 'green',
    borderRadius: 9,
  },
});