import React, { Component } from 'react';
import { FlatList , View, StyleSheet, Text, Image, TouchableOpacity, Button,ActivityIndicator } from 'react-native';

export default class Kategori extends Component {

    constructor(){
    	super()
    	this.state={
    		data:[]
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
    			style={{flex:1 ,width:null, height: 250, borderRadius:10, margin: 2}}
    			source={{uri: 'https://weast.ahmeterdgn.net/'+item.ad}}
    			/>
    		</TouchableOpacity>
    	)

    }

    UNSAFE_componentWillMount(){
    	const url = 'https://weast.ahmeterdgn.net/api/index.php?id='+this.props.navigation.state.params.Kategori_adı

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
    		<View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
    			<ActivityIndicator size="large" color="red" animating/>

    		</View>
    		:
    <View style={{backgroundColor:'#111111'}}>
    		<FlatList

    			numColumns={3}
    			data={this.state.data.reverse()}
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
});
