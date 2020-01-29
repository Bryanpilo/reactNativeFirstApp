import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (prop) => {
  // return <Text style={styles.text}>First React Native application</Text>;
  return (
    <View>
      <Text style={styles.text}>First React Native application</Text>
      <Button 
        title="Go to components demo"
        onPress={()=>prop.navigation.navigate("ComponentScreen")}
      />
      <TouchableOpacity 
        onPress={()=>prop.navigation.navigate("FlatList")}
      >
        <Text>Go to list demo</Text>
      </TouchableOpacity>
      <Button 
        title="Go to image demo"
        onPress={()=>prop.navigation.navigate("ImageScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 10
  }
});

export default HomeScreen;
