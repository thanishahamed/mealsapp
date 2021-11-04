import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FavouritesScreen";
import DeveloperInfo from "../screens/DeveloperInfo";
import { Ionicons } from "@expo/vector-icons";
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import FavouritesScreen from "../screens/FavouritesScreen";

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

const FaveNavigator = createStackNavigator(
  {
    Favourites: FavouritesScreen,
    MealDetail: MealDetailsScreen,
  },
  {
    mode: "modal",
    defaultNavigationOptions: options,
  }
);

const tabBarConfigs = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tab) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tab.tintColor} />
        );
      },
    },
  },
  Favorites: {
    screen: FaveNavigator,
    navigationOptions: {
      tabBarLabel: "Favourites",
      tabBarIcon: (tab) => {
        return <Ionicons name="ios-star" size={25} color={tab.tintColor} />;
      },
    },
  },
};

// const MealsFavNavigator =
//   Platform.OS === "android"
//     ? createMaterialBottomTabNavigator(tabBarConfigs, {
//         activeTintColor: "#a20",
//         shifting: true,
//       })
//     : createBottomTabNavigator(tabBarConfigs, {
//         tabBarOptions: {
//           activeTintColor: "#a20",
//         },
//       });

const MealsFavNavigator = createBottomTabNavigator(tabBarConfigs, {
  tabBarOptions: {
    activeTintColor: "#a20",
  },
});

export default createAppContainer(MealsFavNavigator);
