import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform
} from 'react-native';

export default class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Review Jobs",
      headerRight:
      (<TouchableOpacity onPress={() => { navigation.navigate('setting') }}>
        <Text>Go Right</Text>
      </TouchableOpacity>),
      style:{
        marginTop: Platform.OS === 'android'? 24:0
      }
    };
  };
  render() {
    return (
      <View >
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}