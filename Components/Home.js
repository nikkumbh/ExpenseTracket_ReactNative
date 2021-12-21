import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
  ViewPagerAndroidComponent,
  // KeyboardAwareScrollView
} from "react-native";

import ExpenseItem from "./ExpenseItem";
import Header from "./Header";
import IncomeItem from "./Home";
import Input from "./Input";

export default function Home() {
  const [exp, setExp] = useState();
  const [inc, setInc] = useState();
  const [storeExpense, setStoreExpense] = useState([]);
  const [storeIncome, setStoreIncome] = useState([]);

  const handleExpense = (amount, enteredDescription) => {
    console.log("Expense clicked!");
    setStoreExpense((currentState) => [
      ...currentState,
      { desc: enteredDescription, amt: amount },
    ]);
  };
  const handleIncome = (amount, enteredDescription) => {
    console.log("Income clicked!");
    setStoreIncome((currentState) => [
      ...currentState,
      { desc: enteredDescription, amt: amount },
    ]);
  };

  useEffect(() => {
    let currExp = 0,
      currInc = 0;
    storeExpense.forEach((obj) => {
      currExp = Number(currExp) + Number(obj.amt);
    });
    setExp(currExp);
    storeIncome.forEach((obj) => {
      currInc = Number(currInc) + Number(obj.amt);
    });
    setInc(currInc);
  });

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.textContainer}>
        <Text style={styles.amountText}>Amount Left :{inc - exp} </Text>
        <Text style={styles.expendatureText}>Total Expendature:{exp} </Text>
      </View>

      <Input funcAsPropsExp={handleExpense} funcAsPropsInc={handleIncome} />

      <View style={styles.listContainer}>
        <View style={styles.expenseContainer}>
          <Text>.......EXPENSE....</Text>
          <FlatList
            keyExtractor={(item, index) => index}
            data={storeExpense}
            renderItem={(itemData) => <ExpenseItem data={itemData.item} />}
            style={styles.expense}
          />
        </View>

        <View style={styles.incomeContainer}>
          <Text>.......Income....</Text>
          <FlatList
            keyExtractor={(item, index) => index}
            data={storeIncome}
            renderItem={(itemData) => <IncomeItem data={itemData.item} />}
            style={styles.income}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});