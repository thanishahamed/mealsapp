import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import DeveloperInfo from "../screens/DeveloperInfo";

import { Platform } from "react-native";
import Colors from "../constants/Colors";

const options = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "#fff",
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: { title: "Meal Categories" },
    },
    CategoryMeal: {
      screen: CategoryMealsScreen,
    },
    MealDetail: {
      screen: MealDetailsScreen,
    },
    Developer: DeveloperInfo,
  },
  {
    mode: "modal",
    defaultNavigationOptions: options,
  }
);

export default createAppContainer(MealsNavigator);
