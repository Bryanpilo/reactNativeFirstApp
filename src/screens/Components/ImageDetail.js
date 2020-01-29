import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const imageDetail = (prop) => {
    return (
        <View>

            <Text style={styles.textStyle}>{prop.title}</Text>
            <Image source={prop.ImageSource} />
            <Text>Score - {prop.score}</Text>
        </View>
    );

};

const styles = StyleSheet.create({

});

export default imageDetail;