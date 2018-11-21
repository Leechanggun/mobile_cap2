import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Header } from 'react-native-elements';

import ImageList from '../component/imageList';



export default class HomeScreen extends React.Component {
  render() {
    return (    
      <View style={ styles.container}>  
        <Header
          centerComponent={{ text: 'TrashGram', style: { color: 'black' } }}
          backgroundColor="#FFFFFF"            
        />
        <ImageList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:
    {
        flex: 1,
        width: '100%',         
    },
});