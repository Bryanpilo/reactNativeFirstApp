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
      <Button 
        title="Go to list demo"
        onPress={()=>prop.navigation.navigate("FlatList")}
      />
      <Button 
        title="Go to image demo"
        onPress={()=>prop.navigation.navigate("ImageScreen")}
      />
      <Button 
        title="Go to counter demo"
        onPress={()=>prop.navigation.navigate("CounterScreen")}
      />
      <Button 
        title="Go to color demo"
        onPress={()=>prop.navigation.navigate("ColorScreen")}
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
