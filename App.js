import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ExpenseItem from "./Components/ExpenseItem.js";
import IncomeItem from "./Components/IncomeItem";
import Input from "./Components/Input.js";
import Header from "./Components/Header.js";
import Color from "./constants/Color.js";
import TextColor from "./constants/TextColor.js";
import PieCharts from "./Components/PieCharts.js";

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
    // setAmount("");
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
    // <View>
    //   <PieCharts />
    // </View>
    
    <View style={styles.container}>
      <Header />
      <View style={styles.textContainer}>
        <Text style= {styles.amountText}>Amount Left:<Text style={{fontWeight: '500'}}>  {inc - exp}</Text></Text>
        <Text style= {styles.expenditureText}>Expenses:<Text style={{fontWeight: '500' }}> {exp} </Text></Text>
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
    // marginTop: 10,
    // paddingTop: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: '#EEEEEE',
    backgroundColor: Color.primary,
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
    //color: TextColor.first,
    //color: '#0af58b',
    color: "white",
    fontWeight: '800',
  },
  expenditureText: {
    fontSize: 20,
    position: 'absolute',
    right: 10,
    left: 250,
    textAlign : 'center',
    //color: TextColor.first,
    //color: '#ff1717',
    color: 'white',
    fontWeight: '800',
  },
  listContainer: {
    flex: 3,
    flexDirection: 'row',
    width: "100%",
    justifyContent : 'space-around',
    //borderWidth: 1,
    marginVertical: 10,
    //backgroundColor: 'white',
    borderRadius: 8,
    //paddingBottom: 10,
  },
  expenseText: {
    marginTop: 10,
    fontSize: 20,
    fontStyle : 'italic',
    color: TextColor.first,
    fontWeight : 'bold',
    marginBottom : 10,
    // borderWidth: 3,s
  },
  incomeText: {
    marginTop: 10,
    fontSize: 20,
    fontStyle : 'italic',
    color: TextColor.first,
    fontWeight : 'bold',
    marginBottom : 10,
  },
  incomeContainer: {
    width: '50%',
    margin: 2,
    paddingLeft: 5,
    alignItems : 'center',
    borderRightColor : 'white',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    borderWidth: 1,
    backgroundColor: Color.ternary,
  
  },
  expenseContainer: {
    width: '51%',
    margin: 2,
    paddingLeft: 5,
    alignItems : 'center',
    borderLeftColor : 'white',
    shadowColor: 'black',
    shadowOpacity: 0.4,
     borderWidth: 1,
    backgroundColor: Color.ternary,

  },
});
