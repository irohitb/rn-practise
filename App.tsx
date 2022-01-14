import React from 'react'
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from '@src/store'
import Navigation from '@src/routes'

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}