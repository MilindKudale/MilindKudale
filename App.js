/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import MainStackNavigator from './src/Helper/MainStackNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

class App extends React.Component<any> {
  
  componentDidMount() {
    
  }

  render() {
    return (
      <SafeAreaProvider>
        <MainStackNavigator />
      </SafeAreaProvider>
    );
  }
};


export default App;
