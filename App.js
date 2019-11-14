import React, { Component } from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';


//SAYAFALAR
import Sayfalar from './src/sayfalar/sayfalar';
import Detaylar from './src/sayfalar/detay';
import Kategori from './src/sayfalar/kategori';

class App extends Component {
  render() {
    const AppNavigator = createAppContainer(UygulamaEkrani);
    return (<AppNavigator/>);
  }
}

const UygulamaEkrani= createDrawerNavigator({
  Sayfalar:Sayfalar,
  Detaylar:Detaylar,
  Kategori:Kategori

});

export default App;
