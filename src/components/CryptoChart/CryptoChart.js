import { View, Text, Dimensions } from "react-native";
import React from "react";
import {
  LineChart,
} from "react-native-chart-kit";
import styles from "./styles";

const CryptoChart = ({ chartData }) => {
  return (
    <View style={styles.cryptoChart} >
      <Text style={styles.cryptoChartTitle}>Last 30 days Prices</Text>
      <LineChart
        data={{
          datasets: [
            {
              data: chartData
            }
          ]
        }}
        width={Dimensions.get("window").width}
        height={220}
        yAxisLabel="$"
        yAxisSuffix=""
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#4D6CFE",
          backgroundGradientFrom: "#3c5bed",
          backgroundGradientTo: "#2a49db",
          fillShadowGradientFromOpacity: 0.3,
          fillShadowGradientToOpacity: 0,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 0,
          },
          propsForDots: {
            r: "2",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          marginBottom: 0,
        }}
      />
    </View>
  );
};

export default CryptoChart;
