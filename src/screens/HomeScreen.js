import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return <Text style={styles.text}>First React Native application</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
