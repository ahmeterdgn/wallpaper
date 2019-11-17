import React, {Component} from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Dimensions,Image} from 'react-native';
import {  createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import {  createAppContainer } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import 'react-native-gesture-handler';

//SAYFALAR
import Sayfalar from './src/sayfalar/sayfalar';
import Detaylar from './src/sayfalar/detay';
import Kategori from './src/sayfalar/kategori';
import SideBar from './src/sayfalar/menu';
import Hakkında from './src/sayfalar/hakkinda';



 class App extends Component{

  render() {
    const AppNavigator = createAppContainer(AppDrawerNavigator);

    return (
      <AppNavigator/>
    );
  }
}



const AppDrawerNavigator = createDrawerNavigator({
  Sayfalar,
  Kategori,
  Detaylar,
  Hakkında
},
{
  contentComponent:props=><SideBar {...props}/>,
  contentOptions:{
    activeTintColor:'#e82a2a'
  }
});

export default App;
