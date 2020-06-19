import React from 'react';
import PhotoInZoom from './components/photo-in-zoom';
import PhotosList from './components/photos-list'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';


const App: () => React$Node = () => {
  const Stack = createStackNavigator();
  return (
      <Provider store={createStore(reducers, applyMiddleware(thunkMiddleware))}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Photos'>
            <Stack.Screen name='Photos' component={PhotosList} 
            options={firstScreen}/>
            <Stack.Screen name='Zoom' component={PhotoInZoom}
            options={secondScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  )
};

export default (App);

const firstScreen = {
  title: 'Images from Kyiv',
  headerStyle: {
    backgroundColor: '#602c50',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
}

const secondScreen = {
  title: 'Beauty',
  headerStyle: {
    backgroundColor: '#602c50',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'left'
  },
}