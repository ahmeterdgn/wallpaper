/* @flow */

import React, { Component } from 'react';
import { FlatList , View, StyleSheet, Text, Image, TouchableOpacity, Button,ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation';


class Tab1 extends Component {
  constructor(){
  	super()
  	this.state={
  		data:[],
      isLoading:true
  	}
  }

  renderItem = ({ item }) =>{
    // function tiklandi(ad) {    }

  	return(
// this.props.navigation.navigate('Sayfalar',{ veri: item.ad })
  		<TouchableOpacity
      onPress={() =>  this.props.navigation.navigate("Detaylar",{veri:item.ad})}
      style={{flex:1}}>
  			<Image
  			style={{flex:1 ,width:null, height: 250, borderRadius:10, margin: 2.2}}
  			source={{uri: 'https://weast.ahmeterdgn.net/'+item.ad}}
  			/>
  		</TouchableOpacity>
  	)

  }

  UNSAFE_componentWillMount(){
  	const url = 'http://weast.ahmeterdgn.net/api'

  	fetch(url)
  	.then((response)=> response.json())
  	.then((responseJson)=>{
  		this.setState({
        data:responseJson.reverse(),
        isLoading:false,

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
  		<View style={{flex:1, justifyContent:'center',backgroundColor: 'black', alignItems:'center' }}>
  			<ActivityIndicator size="large" color="red" animating/>

  		</View>
  		:
  <View style={{backgroundColor:'#212121'}}>
  		<FlatList

  			numColumns={3}
  			data={this.state.data}
  			renderItem={this.renderItem}
  			keyExtractor={(item,index)=>index}
  		/>

  </View>

  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    margin: 20
  },
});
export default withNavigation(Tab1);
