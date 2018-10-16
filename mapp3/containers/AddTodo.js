import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { Button, Image } from 'react-native';
import { ImagePicker } from 'expo';

class AddTodo extends Component {

    state = {
        text:'',
        image: null
    }

    addTodo = (text, image) => {

        this.props.dispatch({type: 'ADD_TODO', text, image});
        this.setState({text: ''});
        this.setState({image: null});
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
        
      };

    render() {
        let { image } = this.state;
        return (
            <View style={{flexDirection:'row', marginHorizontal: 20}}>
                <TextInput
                    onChangeText={(text)=>this.setState({ text })}
                    value ={this.state.text}
                    placeholder="Take the cat out"
                    style={{borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5}}
                 />
                    <Button
                    title="add image"
                    onPress={this._pickImage}
                    />
                    {image &&
                    <Image source={{ uri: image }} style={{ width: 50, height: 70 }} />}
                    
                    <TouchableOpacity onPress={()=> this.addTodo(this.state.text, this.state.image)}>
                    <View style={{height: 50, backgroundColor: '#eaeaea', alignItems: 'center', justifyContent: 'center'}}>
                        <Ionicons name="md-add" size={30} />
                    </View>
                </TouchableOpacity>
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
    }
});