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
	import {COLOR_HEADER,API,URL,API_KATEGORI} from './../bilgiler/bilgiler';

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
			activeOpacity={0.9}

    onPress={() =>  this.props.navigation.navigate("Detaylar",{veri:item.ad})}
    style={{flex:1}}>
			<Image
			style={styles.resim}
			source={{uri: URL+item.ad}}
			/>
		</TouchableOpacity>
	)

}

UNSAFE_componentWillMount(){
	const url = API

	fetch(url)
	.then((response)=> response.json())
	.then((responseJson)=>{

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
<View style={styles.list}>
		<FlatList

			numColumns={3}
			data={this.state.data}
			renderItem={this.renderItem}
      refreshing={this.state.refreshing}
      onRefresh={() =>  this.UNSAFE_componentWillMount()}
			onEndReached={this.endReached}
			onEndReachedThreshold={.7}

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
	margin: 1
},
loading:{
	flex:1,
	justifyContent:'center',
	backgroundColor: 'black',
	alignItems:'center'
},
list:{
	backgroundColor:COLOR_HEADER,
}
});
export default withNavigation(Tab1);
