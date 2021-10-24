import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MealItem(props) {
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={{ ...styles.mealItem }}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground
            source={{ uri: props.image }}
            style={styles.bgImage}
          />
          <Text> {props.title}</Text>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <Text> {props.duration}m </Text>
          <Text> {props.complexity} </Text>
          <Text> {props.affordability} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    backgroundColor: "#ccc",
  },
  mealRow: { flexDirection: "row" },
  mealHeader: {
    height: 200,
  },
  mealDetail: {
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});
