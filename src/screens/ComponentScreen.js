import React from 'react';
import { Text, StyleSheet } from 'react-native';

const componentScreen = (prop) => {
    return <Text style={styles.textStyle}>Component screen</Text>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default componentScreen;