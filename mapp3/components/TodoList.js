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
    <View style={styles.container}>
        {todos.map(todo =>
            <View key={todo.id}>
                <Swipeout right={[{
                    text: 'Delete',
                    backgroundColor: 'red',
                    underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                    onPress: () => { deleteTodo(todo.id) }
                }]}
                backgroundColor= 'transparent'
                >
                <View style={styles.row}>
                    <View style={styles.switch}>
                    <Switch
                    onValueChange = {() => toggleTodo(todo.id)}
                    value = {todo.completed}/>
                    </View>
                    <Image
                        style={{width: 50, height: 50}}
                        source={{uri: todo.image}}
                    />
                    <View style={styles.text}>
                    <Text style={{
                        fontSize: 24,
                        textDecorationLine: todo.completed ? 'line-through' : 'none'
                    }}>{todo.text}
                    </Text>
                    </View>
                </View> 
                </Swipeout>
            </View>
        )}
    </View>
)
export default TodoList;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    switch: {
    },
    text: {
    }
});