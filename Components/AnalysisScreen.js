import { PieChart } from "react-native-chart-kit";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const data = [
  {
    name: "Income",
    population: 21500,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Expense",
    population: 2800,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};AnalysisScreen = () => {
  return (
    <View>
      <PieChart
        data={data}
        width={screenWidth}
        height={250}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[5, 20]}
        absolute
      />
    </View>
  );
};

export default AnalysisScreen;

const styles = StyleSheet.create({});
