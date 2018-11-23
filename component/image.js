import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native'
import {  } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'

export default class Lattice extends React.Component{
  render(){
    return (
      <Card
        title='사용자 이름'
        // image={require(this.props.path)}>
        image={require('../src/img/testImg.png')}>
        <Text style={{marginBottom: 10}}>
          {this.props.tag}    {this.props.hashtag}
        </Text>        
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 200, 
    borderWidth: 0.5,
    // backgroundColor: 'gray'
  },
})