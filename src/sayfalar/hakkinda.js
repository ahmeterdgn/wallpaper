/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Toast,
    Text,
    Card,
    CardItem
}
from "native-base";
import {COLOR_TITLE, COLOR_HEADER, IMAGE_MENU,ABOUT,VERSION} from './bilgiler/bilgiler';

export default class HAKKINDA extends Component {
  render() {
    return (
      <Container style={styles.container}>
      <Header style={styles.header}>
         <Left>
           <Button transparent
           onPress={() =>  this.props.navigation.navigate("Sayfalar")}
           >
             <Icon name="arrow-back" />
           </Button>
         </Left>
         <Body>
           <Title style={styles.title}>HAKKINDA</Title>
         </Body>
         <Right/>

        </Header>

        <View style={styles.view_con}>
        <Image source={{uri:IMAGE_MENU}} style={styles.resim}/>
        <Text style={styles.verison_text}>{VERSION}</Text>
<Text style={styles.about}>{ABOUT}</Text>
</View>

        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_HEADER
  },
  title:{
    color:COLOR_TITLE,
  },
  resim:{
    height: 200,
    width: 200,
    bottom:20
   },
   verison_text:{
     color:'white',

    },
    view_con:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    about:{
      color: 'white',
      textShadowRadius: 2,
      textShadowColor: COLOR_TITLE,
      textAlign: 'center',
      bottom:0
     },
     header:{
      backgroundColor:COLOR_HEADER
    }
});
