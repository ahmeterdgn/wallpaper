/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Content  } from "native-base";

export default class Menu extends Component {
  render() {
    return (
      <Content style={{backgroundColor: 'black'}}>
        <Text style={{color:'red'}}>I'm the Menu component</Text>
      </Content>
    );
  }
}
