import React from "react";
import { FlatList, StyleSheet, View } from "react-navigation";
import MealItem from "./MealItem";

export default function MealList(props) {
  const RenderMealItem = (itemData) => {
    return (
      <MealItem
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
        title={itemData.item.title}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
      />
    );
  };

  return (
    <FlatList
      data={props.listData}
      keyExtractor={(item, index) => item.id}
      renderItem={RenderMealItem}
    />
  );
}

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
