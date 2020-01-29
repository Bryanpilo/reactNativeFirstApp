import React, { useState } from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const counterScreen = (prop) => {

    const [stateCounter, setStateCounter] = useState({
        counter: 0
    });

    return (
        <View>
            <Button
                title="Increase"
                onPress={() => setStateCounter({
                    counter: stateCounter.counter + 1
                })}
            />
            <Button
                title="Decrease"
                onPress={() => setStateCounter({
                    counter: stateCounter.counter - 1
                })}
            />
            <Text style={styles.textStyle}>Current count: {stateCounter.counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default counterScreen;