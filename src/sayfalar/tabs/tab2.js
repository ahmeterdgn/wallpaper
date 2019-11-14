/* @flow */

import React, { Component } from 'react';
import { FlatList , View, StyleSheet,  Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { withNavigation } from 'react-navigation';


class Tab2 extends Component {
  constructor(){
  	super()
  	this.state={
  		data:[]
  	}
  }

  renderItem = ({ item }) =>{
  	return(

  		<TouchableOpacity
    onPress={() =>  this.props.navigation.navigate("Kategori",{Kategori_adı:item.id})}
        style={{flex:1}} >

                <Card style={styles.card}>
                <CardItem cardBody style={styles.cardBody}>
                  <Image source={{uri: 'https://weast.ahmeterdgn.net/'+item.resim}} style={styles.resim}/>
                    <Text style={styles.yazi}>{item.kategori}</Text>
                </CardItem>
              </Card>
  		</TouchableOpacity>
  	)

  }
  UNSAFE_componentWillMount(){
  	const url = 'http://weast.ahmeterdgn.net/api/kategori/'

  	fetch(url)
  	.then((response)=> response.json())
  	.then((responseJson)=>{
  		this.setState({
  			data:responseJson
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
  		/>

  </View>

  )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor:'#111111',
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
    borderRadius: 18,
  },
  yazi:{
    color:'#fff',
    fontStyle: 'italic',
    fontSize: 25 ,
    position:'absolute',
    right: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yukleniyor:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  list:{
    backgroundColor:'#111111'
  },
});
export default withNavigation(Tab2);
