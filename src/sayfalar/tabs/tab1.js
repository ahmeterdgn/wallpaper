/* @flow */
//npm uninstall react-native-lazyload sil
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
<<<<<<< HEAD
	return(
		<TouchableOpacity
			activeOpacity={0.9}

    onPress={() =>  this.props.navigation.navigate("Detaylar",{veri:item.ad})}
    style={{flex:1}}>
			<Image
			style={styles.resim}
=======
  // function tiklandi(ad) {    }

	return(
// this.props.navigation.navigate('Sayfalar',{ veri: item.ad })
		<TouchableOpacity
    onPress={() =>  this.props.navigation.navigate("Detaylar",{veri:item.ad})}
    style={{flex:1}}>
			<Image
			style={{flex:1 ,width:null, height: 250, borderRadius:10, margin: 2.2}}
>>>>>>> ff032a1c4820c2f86620e85bcccfe7e470889a44
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
<<<<<<< HEAD

=======
    this.setState({
        refreshing:true,
    });
>>>>>>> ff032a1c4820c2f86620e85bcccfe7e470889a44
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
<<<<<<< HEAD
		<View style={styles.loading}>
=======
		<View style={{flex:1, justifyContent:'center',backgroundColor: 'black', alignItems:'center' }}>
>>>>>>> ff032a1c4820c2f86620e85bcccfe7e470889a44
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
<<<<<<< HEAD
			onEndReached={this.endReached}
			onEndReachedThreshold={.7}
=======
>>>>>>> ff032a1c4820c2f86620e85bcccfe7e470889a44

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
<<<<<<< HEAD
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

=======
>>>>>>> ff032a1c4820c2f86620e85bcccfe7e470889a44
});
export default withNavigation(Tab1);
