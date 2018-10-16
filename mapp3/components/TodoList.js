import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Switch,
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import Lightbox from 'react-native-lightbox';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 2.5,
    padding: 10,
  },
  switch: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  image: {
    height: 50,
    width: '15%',
  },
  text: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightbox: {
    width: 500, height: 500,

  },
});

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <View style={styles.container}>
    {todos.map(todo => (
      <View key={todo.id}>
        <Swipeout
          right={[{
            text: 'Delete',
            backgroundColor: 'red',
            underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
            onPress: () => { deleteTodo(todo.id); },
          }]}
          backgroundColor="transparent"
        >
          <View style={styles.row}>
            <View style={styles.switch}>
              <Switch
                onValueChange={() => toggleTodo(todo.id)}
                value={todo.completed}
              />
            </View>
            <View style={styles.image}>
              <Lightbox activeProps={{ width: 500, height: 500 }}>
                <Image
                  style={{ width: 50, height: 50, opacity: todo.completed ? 0.3 : 1 }}
                  source={{ uri: todo.image }}
                />
              </Lightbox>
            </View>
            <View style={styles.text}>
              <Text style={{
                fontSize: 24,
                textDecorationLine: todo.completed ? 'line-through' : 'none',
              }}
              >
                {todo.text}
              </Text>
            </View>
          </View>
        </Swipeout>
      </View>
    ))}
  </View>
);
export default TodoList;
