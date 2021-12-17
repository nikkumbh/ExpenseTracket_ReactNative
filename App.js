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
      <View style={styles.headingContainer}>
      <Text style={styles.heading}>EXPENSE TRACKER</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style= {styles.amountText}>Amount Left: {inc - exp} </Text>
        <Text style= {styles.expenditureText}>Total Expenses: {exp} </Text>
      </View>

      <Input funcAsPropsExp={handleExpense} funcAsPropsInc={handleIncome} />
      <View style={styles.listContainer}>

        <View style={styles.expenseContainer}>
          <Text style={styles.expenseText}>EXPENSE</Text>
          <FlatList
            keyExtractor={(item, index) => index}
            data={storeExpense}
            renderItem={(itemData) => <ExpenseItem data={itemData.item} />}
          />
        </View>

        <View style={styles.incomeContainer}>
          <Text style={styles.incomeText}>INCOME</Text>
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
    paddingTop: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#BBFDFC',
  },
  headingContainer: {
    borderBottomWidth: 3,
    marginBottom : 40,
  },
  heading: {
    // borderBottomWidth: 5,
    fontSize: 30,
  },
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
    marginBottom: 10,
  },
  amountText: {
    fontSize: 20,
    position: 'absolute',
    left: 10,
    right: 270,
    textAlign : 'center',
  },
  expenditureText: {
    fontSize: 20,
    position: 'absolute',
    right: 10,
    left: 250,
    textAlign : 'center',
  },
  listContainer: {
    flex: 3,
    flexDirection: 'row',
    width: "100%",
    justifyContent : 'space-around',
    borderTopWidth: 3,
    marginVertical: 10,
  },
  expenseText: {
    fontSize: 20,
    fontStyle : 'italic'
  },
  incomeText: {
    fontSize: 20,
    fontStyle : 'italic'
  },
  incomeContainer: {
    width: '48%',
    marginTop: 10,
    borderLeftWidth: 2,
    paddingLeft: 5,
    alignItems : 'center',
  
  },
  expenseContainer: {
    marginTop: 10,
    width: '45%',
    alignItems: 'center',

  },
});
