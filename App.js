import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import ExpenseItem from "./Components/ExpenseItem.js";
import Input from "./Components/Input.js";
import Header from "./Components/Header.js";
import Color from "./constant/Color.js";
import Footer from "./Components/Footer.js";
import { AntDesign } from '@expo/vector-icons';
// import TextColor from "./constants/TextColor.js";

export default function App() {
  const [exp, setExp] = useState();
  const [inc, setInc] = useState();
  // const [storeExpense, setStoreExpense] = useState([]);
  // const [storeIncome, setStoreIncome] = useState([]);
  const [storeItems, setStoreItems] = useState([]);

  const handleExpense = (amount, enteredDescription) => {
    console.log("Expense clicked!");
    setStoreItems((currentState) => [
      ...currentState,
      { desc: enteredDescription, amt: amount, category: "expense" },
    ]);
  };
  const handleIncome = (amount, enteredDescription) => {
    console.log("Income clicked!");
    setStoreItems((currentState) => [
      ...currentState,
      { desc: enteredDescription, amt: amount, category: "income" },
    ]);
  };

  useEffect(() => {
    let currExp = 0,
      currInc = 0;
    storeItems.forEach((obj) => {
      if (obj.category === "expense")
        currExp = Number(currExp) + Number(obj.amt);
    });
    setExp(currExp);
    storeItems.forEach((obj) => {
      if (obj.category === "income")
        currInc = Number(currInc) + Number(obj.amt);
    });
    setInc(currInc);
  });

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.textContainer}>
        <View style={styles.incomeContainer}>
          <Text style={styles.amountText}>Amount Left:</Text>
          <Text
            style={{
              //fontWeight: "bold",
              color: Color.black,
              backgroundColor: Color.white,
              minWidth: "30%",
              fontSize: 20,
              textAlign: "center",
              borderRadius: 10,
              marginLeft: -20,
              padding: 5,
            }}
          >
            {inc - exp}
          </Text>
        </View>
        <View style={styles.expenseContainer}>
          <Text style={styles.expenditureText}>Expenses:</Text>
          <Text
            style={{
              //fontWeight: "900",
              color: Color.black,
              backgroundColor: Color.white,
              minWidth: "30%",
              textAlign: "center",
              fontSize: 20,
              borderRadius: 10,
              padding: 5,
            }}
          >
            {exp}
          </Text>
        </View>
      </View>

      <Input funcAsPropsExp={handleExpense} funcAsPropsInc={handleIncome} />

      <View style={styles.listContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
              width: "100%",
              marginTop: 30,
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                width: "25%",
                textAlign: "center",
                color: Color.header,
                //fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Amount
            </Text>
            <Text
              style={{
                minWidth: "40%",
                textAlign: "center",
                color: Color.header,
                // fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Description
            </Text>
            <View style={{ minWidth: "30%", textAlign: "center" }}>
              <Text style={{ color: "red", minWidth: "30%" }}>
                Expense / <Text style={{ color: "green" }}>Income </Text>
              </Text>
            </View>
          <FlatList
            keyExtractor={(item, index) => index}
            data={storeItems}
            renderItem={(itemData) => <ExpenseItem data={itemData.item} />}
          />
          </View>
        {/* hello */}

        {/* <View style = {styles.plusButton}> */}
      
      </View>
      <View style={styles.buttonContainer}>
      <AntDesign 
      name="pluscircleo" 
      size={35} color="white"
      // onPress={}
      
      />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.background,
  },
  textContainer: {
    width: "100%",
    justifyContent: "space-between",
  },
  incomeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  expenseContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  amountText: {
    fontSize: 20,
    textAlign: "center",
    color: Color.yellow,
    fontWeight: "bold",
  },
  expenditureText: {
    fontSize: 20,
    textAlign: "center",
    color: Color.header,
    fontWeight: "bold",
  },

  listContainer: {
    flex: 3,
    flexDirection: "row",
    width: "98%",
    justifyContent: "space-around",
    marginVertical: 10,
    borderWidth:5,
  },
  // buttonContainer:{
  //   marginLeft: 300,
  //   padding: 10,
  // }
});