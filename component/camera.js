import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';
import Camera from 'react-native-camera';
import { withNavigation } from 'react-navigation'

class CameraRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: null,
    };
  }

  Postimage(){
    return fetch('http://117.17.158.93:3000/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: this.state.path,
        // hashtag: []
      }),
    });
  }

  Posthashtag(){
    return fetch('http://117.17.158.93:3000/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hashtag: ["#test" , "#test2"]
      }),
    }),this.props.navigation.navigate('Home');
  }

  componentWillMount() {
    this.setState({
      inputText: '',
      todos: [],
    })
  }

  addTodo() {
    let todoItem = this.state.inputText
    let todos = this.state.todos
    todos.push(todoItem)
    this.setState({
      inputText: '',
      todos: todos,
    })
  }

  takePicture() {
    this.camera.capture()
      .then((data) => {
        console.log(data);
        this.setState({ path: data.path });
        // this.props.navigation.navigate('Upload', {img:data.path});
      })
      .catch(err => console.error(err));
    this.Postimage.bind(this);
  }

  renderCamera() {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}
        captureTarget={Camera.constants.CaptureTarget.disk}
      >
        <TouchableHighlight
          style={styles.capture}
          onPress={this.takePicture.bind(this)}
          underlayColor="rgba(255, 255, 255, 0.5)"
        >
          <View />
        </TouchableHighlight>
      </Camera>
    );
  }

  renderImage() {
    return (
      <View style={ {flex:1, backgroundColor:'white'} }>
        <Image
          source={{ uri: this.state.path }}
          style={styles.uploadpreview}
        />
        <Text
          style={styles.cancel}
          onPress={() => this.setState({ path: null })}
        >Cancel
        </Text>
        <View style={styles.upload}>
          <Button title="Upload" onPress={this.Posthashtag.bind(this)} style={styles.uploadtext}/>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  uploadpreview:{
    // flex: 1,
    marginTop:50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // height: Dimensions.get('window').height/2,
    height:300,
    width: Dimensions.get('window').width
  },
  capture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: '#FFF',
    marginBottom: 15,
  },
  cancel: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'transparent',
    // color: '',
    fontWeight: '600',
    fontSize: 17,
  },
  img:{
    height: 300,
    width: 300,
    backgroundColor:'red',
    marginTop:30,
  },
  text:{
    color: 'black',
    position: 'absolute',
    right: 200, 
    bottom: 500,
    fontSize: 20,
  },
  addText:{
    fontSize: 20, 
  },
  textinput:{
    color: 'black',
    position: 'absolute',
    right: 200, 
    bottom: 400,
    fontSize: 20,
  },
  upload:{
    height: 50,
    backgroundColor: 'white',
    width:'100%',
    position: 'absolute',
    bottom: 0
  },
  uploadtext:{
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default withNavigation (CameraRoute);