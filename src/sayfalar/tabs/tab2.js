/* @flow */

import React, { Component } from 'react';
import { FlatList , View, StyleSheet,  Image, TouchableOpacity, ActivityIndicator,Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { withNavigation } from 'react-navigation';
import {COLOR_HEADER,API,URL,API_KATEGORI,COLOR_IMAGE} from './../bilgiler/bilgiler';

const ITEM_WIDHT = Dimensions.get('window').width;

class Tab2 extends Component {
  constructor(){
  	super()
  	this.state={
  		data:[],
      isLoading:true,
      refreshing:false,

  	}
  }

  renderItem = ({ item }) =>{
  	return(

  		<TouchableOpacity
      itemWidht={ITEM_WIDHT/2}
    onPress={() =>  this.props.navigation.navigate("Kategori",{Kategori_adı:item.id})}
    activeOpacity={0.9}
    style={{flex:1}}
 >

                <Card style={styles.card}>
                <CardItem cardBody style={styles.cardBody}>
                  <Image source={{uri: URL+item.resim}} style={styles.resim}/>
                    <Text style={styles.yazi}>{item.kategori}</Text>
                </CardItem>
              </Card>
  		</TouchableOpacity>
  	)

  }
  UNSAFE_componentWillMount(){
  	const url =API_KATEGORI

  	fetch(url)
  	.then((response)=> response.json())
  	.then((responseJson)=>{
      this.setState({
      refreshing:true,
  })
  		this.setState({
  			data:responseJson,
        isLoading:false,
        refreshing:false,

  		})
  	})
  	.catch((error)=>{
  		console.log(error)
  	})
  }

  render() {
  	return(
  		this.state.isLoading
  		?
  		<View style={styles.yukleniyor}>
  			<ActivityIndicator size="large" color="red" animating/>

  		</View>
  		:
  <View style={styles.list}>
  		<FlatList
  			numColumns={2}
  			data={this.state.data}
  			renderItem={this.renderItem}
        onEndReachedThreshold={7}
        initialNumToRender={7}
  			keyExtractor={(item,index)=>index}
        refreshing={this.state.refreshing}
        onRefresh={() =>  this.UNSAFE_componentWillMount()}
  		/>
  </View>

  )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor:COLOR_HEADER,
     borderRadius: 18,
     borderColor: null,
     flex: 1,

  },
  cardBody: {
    borderRadius: 18,

  },
  resim:{
    flex: 1,
    height: 130,
    borderRadius: 4,
    backgroundColor:COLOR_IMAGE,

  },
  yazi:{
    color:'#fff',
    fontSize: 20 ,
    position:'absolute',
    right: '30%',
  },
  yukleniyor:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: COLOR_HEADER,

  },
  list:{
    flex: 1,
    backgroundColor:COLOR_HEADER,

  },
});
export default withNavigation(Tab2);
