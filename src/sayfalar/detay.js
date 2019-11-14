/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Share,
} from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Left,Right, Body,Fab  } from "native-base";
import WallPaperManager from '@ajaybhatia/react-native-wallpaper-manager';




export default class DETAY extends Component {
constructor(props){
  super(props);
  this.state = {
    active: false
  };
this._shareimg = this._shareimg.bind(this);
this._showResult = this._showResult.bind(this);
this.state = {result: ''};

}
_showResult(result){
  this.setState({result})
}
_shareimg(){
  Share.share({
    message:'Wallpaper Uygulaması http://ahmeterdgn.net/',
    title: 'asasdsad',
    url:'http://weast.ahmeterdgn.net/resim//2237526662.jpg',
  }).then(this._showResult);
}

  render() {
    return (
      <Container style={styles.container}>
      <Header style={{backgroundColor: 'black' }}>
         <Left>
           <Button transparent
           onPress={() =>  this.props.navigation.navigate("Sayfalar")}
           >
             <Icon name="arrow-back" />
           </Button>
         </Left>
         <Body>
           <Title style={{color:'red'}}>Görüntüle</Title>
         </Body>
         <Right>

                  <Button transparent>
                    <Icon name='heart' />
                  </Button>
                  <Button transparent>
                    <Icon name='share'
                      onPress={this._shareimg}
                      />
                  </Button>
                </Right>
        </Header>

         <View style={{ flex: 1 }}>
         <Image
         style={{flex:1,}}
         source={{uri: 'https://weast.ahmeterdgn.net/'+this.props.navigation.state.params.veri}}
         />
           <Fab
             active={this.state.active}
             direction="up"
             containerStyle={{ }}
             style={{ backgroundColor: '#3B5998' }}
             position="bottomRight"
             onPress={() => this.setState({ active: !this.state.active })}>
             <Icon name="ios-checkmark" />
             <Button style={{ backgroundColor: '#3B5998' }}>
               <Icon name="ios-download" />
             </Button>
             <Button disabled style={{ backgroundColor: '#3B5998' }}>
               <Icon name="md-tablet-portrait"
                 onPress={() => WallPaperManager.setWallpaper({uri: 'https://weast.ahmeterdgn.net/'+this.props.navigation.state.params.veri}, res => alert(res.msg)) }

                  />
             </Button>
           </Fab>
         </View>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
