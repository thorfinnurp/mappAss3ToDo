import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Switch
} from "react-native";
import Swipeout from 'react-native-swipeout';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
    <View style={{ padding: 20 }}>
        {todos.map(todo =>
            <View key={todo.id}>
            <Swipeout right={[{
                text: 'Delete',
                backgroundColor: 'red',
                underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                onPress: () => { deleteTodo(todo.id) }
            }]}
            backgroundColor= 'transparent'>
            
            <Switch
            onValueChange = {() => toggleTodo(todo.id)}
            value = {todo.completed}/>
            <Text style={{
                fontSize: 24,
                textDecorationLine: todo.completed ? 'line-through' : 'none'
            }}>{todo.text}
            </Text>
    
            <Image
          style={{width: todo.completed ? 0 : 50, height: todo.completed ? 0 : 50}}
          source={{uri: todo.image}}
          
          
        />
            </Swipeout>
            </View>
        )}
    </View>
)
export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});