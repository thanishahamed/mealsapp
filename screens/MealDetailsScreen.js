import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { MEALS } from "../data/dummy-data";
const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const mealDetail = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text> {mealDetail.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

MealDetailsScreen.navigationOptions = (navData) => {
  const mealId = navData.navigation.getParam("mealId");
  const mealDetails = MEALS.find((meal) => meal.id === mealId);

  return {
    title: mealDetails.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite Icon"
          iconName="ios-star"
          onPress={() => console.log("Added to favorites")}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailsScreen;
