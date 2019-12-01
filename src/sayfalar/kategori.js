import React, { Component } from 'react';
import { FlatList , View, StyleSheet, Text, Image, TouchableOpacity, Button,ActivityIndicator,Dimensions } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import {URL,URL_KATAGORI,COLOR_HEADER,COLOR_IMAGE} from './bilgiler/bilgiler';

const ITEM_WIDHT = Dimensions.get('window').width;

export default class Kategori extends Component {

    constructor(){
    	super()
    	this.state={
    		data:[],
        isLoading:true,
        refreshing:false,

    	}
    }

    renderItem = ({ item }) =>{
      // function tiklandi(ad) {    }

    	return(

<TouchableOpacity
        onPress={() =>  this.props.navigation.navigate("Detaylar",{veri:item.ad})}
        activeOpacity={0.9}
>
    			<Image
    			style={styles.resim}
    			source={{uri: URL+item.ad}}
    			/>
    		</TouchableOpacity>
    	)

    }

    UNSAFE_componentWillMount(){
    	const url = URL_KATAGORI+ this.props.navigation.state.params.Kategori_adı

    	fetch(url)
    	.then((response)=> response.json())
    	.then((responseJson)=>{

    		this.setState({
    			data:responseJson,
          isLoading: false,
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
    		<View style={styles.loading}>
    			<ActivityIndicator size="large" color="red" animating/>

    		</View>
    		:

  <View style={styles.container}>
    		<FlatList
    			numColumns={3}
    			data={this.state.data.reverse()}
    			renderItem={this.renderItem}
    			keyExtractor={(item,index)=>index}
          refreshing={this.state.refreshing}
          onRefresh={() =>  this.UNSAFE_componentWillMount()}
    		/>
        <NavigationEvents
             onDidFocus={() => this.UNSAFE_componentWillMount()}
         />
    </View>

    )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:COLOR_HEADER,
    flex: 1,
  },
  loading:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  resim:{
    flex:1 ,
    width:ITEM_WIDHT/3,
    height: 250,
    borderRadius:6,
    margin: 2,
    backgroundColor:COLOR_IMAGE,

  },

});
