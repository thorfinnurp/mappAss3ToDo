import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import AddTodo from '../containers/AddTodo';
import ViewTodo from '../containers/ViewTodo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});

class TodoApp extends Component {
  render() {
    
    return (
      <View style={styles.container}>
        <AddTodo />       
        <ScrollView>
          <ViewTodo />
        </ScrollView>

      </View>
    );
  }
}
export default TodoApp;
