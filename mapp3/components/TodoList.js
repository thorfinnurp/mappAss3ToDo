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
                    <View style={styles.image}>
                    <Image
                        style={{ width: todo.completed ? 0 : 50, height: todo.completed ? 0 : 50}}
                        source={{uri: todo.image}} 
                    />
                    </View>
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
        borderBottomColor: 'black',
        borderBottomWidth: 2.5,
        padding: 10,
    },
    switch: {
        width:'15%',
    },
    image: {
        width:'15%',
    },
    text: {
        width:'70%',
    },
});