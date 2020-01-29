import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const randomColorScreen = (props) => {

    const [stateColors, setStateColors] = useState([]);

    const randomColors = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return `rgb(${red},${green},${blue})`;
    };

    return (
        <View>
            <Button
                title="Add color"
                onPress={() =>
                    setStateColors([
                        ...stateColors,
                        randomColors()
                    ])
                }

            />

            <FlatList
                keyExtractor={item => item}
                data={stateColors}
                renderItem={({ item }) => {
                    return <View style={{
                        height: 100,
                        width: 100,
                        backgroundColor: item
                    }} />
                }}
            />
        </View>
    );
}

export default randomColorScreen;