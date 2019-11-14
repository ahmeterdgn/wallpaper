/* @flow */

import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { FlatList,
	  View,
		StyleSheet,
		Text,
		Image,
		TouchableOpacity,
		Button,
		ActivityIndicator
	} from 'react-native';

class Tab1 extends Component {
constructor(){
	super()
	this.state={
		data:[],
    isLoading:true,
    refreshing:false
	}
}

renderItem = ({ item }) =>{
	return(
		<TouchableOpacity
    onPress={() =>  this.props.navigation.navigate("Detaylar",{veri:item.ad})}
    style={{flex:1}}>
			<Image
			style={styles.resim}
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
        refreshing:true,
    });
		this.setState({
      data:responseJson.reverse(),
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
		<View style={styles.loading}>
			<ActivityIndicator size="large" color="red" animating/>

		</View>
		:
<View style={{backgroundColor:'#212121'}}>
		<FlatList

			numColumns={3}
			data={this.state.data}
			renderItem={this.renderItem}
      refreshing={this.state.refreshing}
      onRefresh={() =>  this.UNSAFE_componentWillMount()}

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
resim:{
	flex:1 ,
	width:null,
	height: 250,
	borderRadius:6,
	margin: 2
},
loading:{
	flex:1,
	justifyContent:'center',
	backgroundColor: 'black',
	alignItems:'center'
},

});
export default withNavigation(Tab1);
