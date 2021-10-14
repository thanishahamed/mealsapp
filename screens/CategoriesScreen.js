import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const renderGridItem = (gridItem) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate({
            routeName: "CategoryMeal",
            params: {
              categoryId: gridItem.item.id,
            },
          })
        }
      >
        <View style={styles.gridStyle}>
          <Text> {gridItem.item.name} </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />

      <Button
        onPress={() => props.navigation.navigate({ routeName: "Developer" })}
        title="Developer Contact"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
  },
  gridStyle: {
    margin: 26,
    height: 150,
  },
});

export default CategoriesScreen;
