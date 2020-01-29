import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ImageDetail from './Components/ImageDetail'

const imageScreen = (props) => {

    return (
        <View>
            <Text>Image Screen</Text>
            <ImageDetail
                title="Forest"
                ImageName= 'forest'
                ImageSource={require('../../assets/forest.jpg')}
                score={2}
            />
             <ImageDetail
                title="Ocean"
                ImageName= 'beach'
                ImageSource={require('../../assets/beach.jpg')}
                score={5}
            />
             <ImageDetail
                title="Mountain"
                ImageName= 'mountain'
                ImageSource={require('../../assets/mountain.jpg')}
                score={3}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default imageScreen;