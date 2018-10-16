import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { ImagePicker, Permissions } from 'expo';

class AddTodo extends Component {
    state = {
      text: '',
      image: null,
    }

    addTodo = (text, image) => {
      if (text === '') {
        alert('You must enter some text');
      } else {
        this.props.dispatch({ type: 'ADD_TODO', text, image });
        this.setState({ text: '' });
        this.setState({ image: null });
      }
    }

    _pickImage = async () => {
      const {
        status: cameraPerm,
      } = await Permissions.askAsync(Permissions.CAMERA);

      const {
        status: cameraRollPerm,
      } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],

        
      });

      if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      }
    };



    render() {
      const { image } = this.state;
      return (
        <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
          <TextInput
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            placeholder="Take the cat out"
            style={{ style: styles.textInput}}
          />
          {image
                && <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />}
          <TouchableHighlight onPress={() => this._pickImage()}>
            <Image
              style={{ style: styles.image}}
              source={{ uri: 'https://image.freepik.com/free-icon/camera-to-take-photos_318-60174.jpg' }}
            />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.addTodo(this.state.text, this.state.image)}>
            <Image
              style={{ style: styles.image}}
              source={{ uri: 'https://user-prompt.com/wp-content/uploads/sichern_unter_rounded.png' }}
            />
          </TouchableHighlight>
        </View>
      );
    }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width: 50, 
        height: 50
    },
    textInput: {
        borderWidth: 1, 
        borderColor: '#f2f2e1', 
        backgroundColor: '#eaeaea',
        height: 50, 
        flex: 1, 
        padding: 5

    }
});
