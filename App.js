import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ExpenseItem from "./Components/ExpenseItem.js";
import IncomeItem from "./Components/IncomeItem";
import Input from "./Components/Input.js";

export default function App() {
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
      <Text>-----------EXPENSE TRACKER------------</Text>

      <View>
        <Text>Amount Left :{inc - exp} </Text>
        <Text>Total Expendature:{exp} </Text>
      </View>

      <Input funcAsPropsExp={handleExpense} funcAsPropsInc={handleIncome} />
      <View style={styles.listContainer}>

        <View style={styles.expenseContainer}>
          <Text>.......EXPENSE....</Text>
          <FlatList
            keyExtractor={(item, index) => index}
            data={storeExpense}
            renderItem={(itemData) => <ExpenseItem data={itemData.item} />}
          />
        </View>

        <View style={styles.incomeContainer}>
          <Text>.......INCOME....</Text>
          <FlatList
            keyExtractor={(item, index) => index}
            data={storeIncome}
            renderItem={(itemData) => <IncomeItem data={itemData.item} />}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#BBFDFC',
  },
  listContainer: {
    flex: 3,
    flexDirection: 'row',
    borderWidth: 3,
    width: "100%",
    justifyContent : 'space-around',
  },
  incomeContainer: {
    width: '45%',
    marginTop: 10,
    borderLeftWidth: 1,
    paddingLeft: 5,
  
  },
  expenseContainer: {
    marginTop: 10,
    width: '45%',
   

  },
});
