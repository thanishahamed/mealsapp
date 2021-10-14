import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const mealDetails = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text> CategoryMealsScreen Screen </Text>
      <Text> Meal Category: {mealDetails.name}</Text>
      <Button
        title="Go to meal details"
        onPress={() => props.navigation.navigate("MealDetail")}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navData) => {
  const catId = navData.navigation.getParam("categoryId");
  const mealDetails = CATEGORIES.find((cat) => cat.id === catId);

  return {
    title: mealDetails.name,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
