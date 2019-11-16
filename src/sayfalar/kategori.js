import React, { Component } from 'react';
import { FlatList , View, StyleSheet, Text, Image, TouchableOpacity, Button,ActivityIndicator } from 'react-native';
import { NavigationEvents } from 'react-navigation';

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
        style={{flex:1}}>
    			<Image
    			style={{flex:1 ,width:null, height: 250, borderRadius:6, margin: 2}}
    			source={{uri: 'https://weast.ahmeterdgn.net/'+item.ad}}
    			/>
    		</TouchableOpacity>
    	)

    }

    UNSAFE_componentWillMount(){
    	const url = 'https://weast.ahmeterdgn.net/api/index.php?id='+ this.props.navigation.state.params.Kategori_adı

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

  <View style={{backgroundColor:'#111111',    flex: 1,
 }}>
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
    flex: 1,
  },
  loading:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: 'black',
  }
});
