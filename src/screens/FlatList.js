import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const flatList = (prop) => {

    const list = [
        {
            name: "Bryan 1",
            age: 20,
            key: "1"
        },
        {
            name: "Bryan 2",
            age: 22,
            key: "2"
        },
        {
            name: "Bryan 3",
            age: 24,
            key: "3"
        },
        {
            name: "Bryan 4",
            age: 25,
            key: "4"
        }
    ]

    return (
        <FlatList
            // horizontal={true}
            // showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={list}
            keyExtractor={(name) => name.key}
            renderItem={({item})=>{
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default flatList;