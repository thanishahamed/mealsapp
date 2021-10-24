import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CategoryGridTile(props) {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp onPress={props.onSelect}>
      <View style={{ ...styles.gridStyle, backgroundColor: props.color }}>
        <Text> {props.name} </Text>
      </View>
    </TouchableCmp>
  );
}

const styles = StyleSheet.create({
  gridStyle: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    margin: 20,
    borderRadius: 10,
    height: 150,
    width: 100,
  },
});
