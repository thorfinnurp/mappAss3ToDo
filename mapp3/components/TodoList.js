import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Switch
} from "react-native";


const TodoList = ({ todos, toggleTodo }) => (
    <View style={{ padding: 20 }}>
        {todos.map(todo =>
            <View key={todo.id}>
            <Switch
            onValueChange = {() => toggleTodo(todo.id)}
            value = {todo.completed}/>
            <Text style={{
                fontSize: 24,
                textDecorationLine: todo.completed ? 'line-through' : 'none'
            }}>{todo.text}
            </Text>
    
            <Image
          style={{width: 50, height: 50}}
          source={{uri: todo.image}}
        />
            
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