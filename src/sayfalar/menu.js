/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,

  Image
} from 'react-native';
import { Icon, Button,Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default class Menu extends Component {
  render() {
    return (

        <LinearGradient
        style={{flex:1, }}
        start={{x: 2, y: 2}} end={{x:2, y: 0.2}}
          colors={['#dd1818', '#111111']}
      >
        <SafeAreaView style={{flex:1 , top:60 }}>
        <View style={{alignItems:200,alignItems:'center',justifyContent:'center', }}>
        <Image source={{uri: 'https://avatars2.githubusercontent.com/u/48730205?s=460&v=4'}} style={{height:200,width:200,borderRadius:100, bottom:50}} />

        </View>
        <ScrollView>

        <Button transparent
        style={{justifyContent:'flex-start' }}
        onPress={() => this.props.navigation.toggleDrawer()}
        >
          <Icon name='paper-plane' style={styles.Iconlar}/>
          <Text  style={styles.textler}>İLETİŞİM</Text>

        </Button>
        <Button transparent
        style={{justifyContent:'flex-start' }}
        onPress={() => this.props.navigation.toggleDrawer()}
        >
          <Icon name='star-half' style={styles.Iconlar}/>
          <Text  style={styles.textler}>PUAN VER</Text>

        </Button>
        <Button transparent
        style={{justifyContent:'flex-start' }}
        onPress={() => this.props.navigation.toggleDrawer()}
        >
          <Icon name='heart' style={styles.Iconlar}/>
          <Text  style={styles.textler}>FAVORİLER</Text>

        </Button>
        <Button transparent
        style={{justifyContent:'flex-start' }}
        onPress={() => this.props.navigation.toggleDrawer()}
        >
          <Icon name='information-circle-outline' style={styles.Iconlar}/>
          <Text  style={styles.textler}>HAKKINDA</Text>

        </Button>
        <Button transparent
        style={{justifyContent:'flex-start' }}
        onPress={() => this.props.navigation.toggleDrawer()}
        >
          <Icon name='share' style={styles.Iconlar}/>
          <Text  style={styles.textler}>UYGULAMAYI PAYLAŞ</Text>

        </Button>
        <Button transparent
        style={{justifyContent:'flex-start' }}
        onPress={() => this.props.navigation.toggleDrawer()}
        >
          <Icon name='bug' style={styles.Iconlar}/>
          <Text  style={styles.textler}>QMER AQ</Text>

        </Button>
        </ScrollView>
        </SafeAreaView>
        </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  Iconlar: {
    color:'#fff',
    fontSize: 30
  },
  textler:{
    flex:1,
    fontSize: 15,
    color:'white'

  }
});
