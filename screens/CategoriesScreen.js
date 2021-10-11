import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = (gridItem) => {
    return <View style = {styles.gridStyle}><Text> { gridItem.item.name } </Text></View>
}

const CategoriesScreen = props => {
    return(
        <View style = {[styles.screen]}> 
            <FlatList data = { CATEGORIES } renderItem = { renderGridItem } numColumns = {2} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100%',
    },
    gridStyle: {
        margin: 26,
        height: 150
    }
});

export default CategoriesScreen;