/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Linking,
  Image,
  Share
} from 'react-native';
import { Icon, Button,Text,Toast,Root } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR_MENU, COLOR_MENUIKI, IMAGE_MENU} from './bilgiler/bilgiler';

export default class Menu extends Component {
  paylas = () => {
    Share.share({
        message: 'Wallpaper Uygulaması http://ahmeterdgn.net/',
        title: 'asasdsad',
        url: 'http://weast.ahmeterdgn.net/',
    })
  }

 fav = () => {
   Toast.show({
       text: "           YAPIM AŞAMASINDA!!",
       position: "bottom",
       style: {
           bottom:40,
           borderRadius:80,
           left: '100%'

         }})
 }

  render() {
    return (
      <Root>
        <LinearGradient
        style={{flex:1, }}
        start={{x: 2, y: 2}} end={{x:2, y: 0.2}}
        colors={[COLOR_MENU, COLOR_MENUIKI]}
      >
        <SafeAreaView style={styles.sarf}>
        <View style={styles.container}>
        <Image source={{uri: IMAGE_MENU}} style={styles.resim} />

        </View>
        <ScrollView>

        <Button transparent
        style={{justifyContent:'flex-start' }}
        onPress={() =>this.props.navigation.navigate('Sayfalar')}
        >
          <Icon name='home' style={styles.Iconlar}/>
          <Text  style={styles.textler}>ANA SAYFA</Text>

        </Button>

        <Button transparent
        style={{justifyContent:'flex-start' }}
        onPress={() => this.props.navigation.toggleDrawer()}
        >
          <Icon name='paper-plane' style={styles.Iconlar}/>
          <Text  style={styles.textler}>İLETİŞİM</Text>

        </Button>
        <Button transparent
        style={{justifyContent:'flex-start' }}
        onPress={() => Linking.openURL("http://ahmeterdgn.net/")}
        >
          <Icon name='star-half' style={styles.Iconlar}/>
          <Text  style={styles.textler}>PUAN VER</Text>

        </Button>
        <Button transparent
        style={{justifyContent:'flex-start' }}
        onPress={this.fav}
        >
          <Icon name='heart' style={styles.Iconlar}/>
          <Text  style={styles.textler}>FAVORİLER</Text>

        </Button>
        <Button transparent
        style={{justifyContent:'flex-start' }}
        onPress={() =>this.props.navigation.navigate("Hakkında")}
        >
          <Icon name='information-circle-outline' style={styles.Iconlar}/>
          <Text  style={styles.textler}>HAKKINDA</Text>

        </Button>
        <Button transparent
        style={{justifyContent:'flex-start' }}
        onPress={this.paylas}
        >
          <Icon name='share' style={styles.Iconlar}/>
          <Text  style={styles.textler}>UYGULAMAYI PAYLAŞ</Text>

        </Button>
        </ScrollView>
        </SafeAreaView>
        </LinearGradient>
        </Root>

    );
  }
}
const styles = StyleSheet.create({
  Iconlar: {
    color:'#fff',
    fontSize: 30
  },
  textler: {
    flex:1,
    fontSize: 15,
    color:'white'
  },
  sarf: {
    flex:1,
     top:60
   },
   container: {
     alignItems:200,
     alignItems:'center',
     justifyContent:'center',
   },
   resim: {
     height:200,
     width:200,
     borderRadius:100,
     bottom:50
   },
});
