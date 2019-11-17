/* @flow */

import React, { Component } from 'react';
import { FlatList , View, StyleSheet,  Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { withNavigation } from 'react-navigation';
import {COLOR_HEADER,API,URL,API_KATEGORI} from './../bilgiler/bilgiler';


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
    onPress={() =>  this.props.navigation.navigate("Kategori",{Kategori_adı:item.id})}
    activeOpacity={0.9}

        style={{flex:1}} >

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

  },
  cardBody: {
    borderRadius: 18
  },
  resim:{
    flex: 1,
    height: 100,
    width: null,
    borderRadius: 4,
  },
  yazi:{
    color:'#fff',
    fontSize: 25 ,
    position:'absolute',
    right: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yukleniyor:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: 'black',

  },
  list:{
    flex: 1,
    backgroundColor:COLOR_HEADER,

  },
});
export default withNavigation(Tab2);
