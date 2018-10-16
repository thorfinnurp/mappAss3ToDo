import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './components/TodoApp';
import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}
