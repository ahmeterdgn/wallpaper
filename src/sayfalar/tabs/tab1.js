/* @flow */
import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {
		FlatList,
	  View,
		StyleSheet,
		Text,
		Image,
		TouchableOpacity,
		Button,
		ActivityIndicator
	} from 'react-native';
	import {COLOR_HEADER,API,URL,API_KATEGORI,COLOR_IMAGE} from './../bilgiler/bilgiler';

//npm i -S react-native-optimized-flatlist sil
class Tab1 extends Component {
constructor(){
	super()
	this.state={
		data:[],
    isLoading:true,
    refreshing:true,
    pages:0,
    error:null
	}
}

renderItem = ({ item }) =>{
	return(
		<TouchableOpacity
			activeOpacity={0.9}
 		key={item.key}
		onEndReachedThreshold={7}
		initialNumToRender={7}
    onPress={() =>  this.props.navigation.navigate("Detaylar",{veri:item.ad})}
    style={{flex:1}}>
			<Image
			style={styles.resim}
			source={{uri: URL+item.ad}}
			/>
		</TouchableOpacity>
	)

}

handleRefresh = () => {
	this.setState({ refreshing: true });

};

UNSAFE_componentWillMount(){
	const { pages } = this.state;
	const url = 'http://weast.ahmeterdgn.net/api/index.php?pages='+pages
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: pages === 0 ? res : [...this.state.data, ...res],
            error: res.error || null,
            isLoading: false,
            refreshing: false
          });
        })
        .catch(error => {
          this.setState({ error, isLoading: false });
        });
    };

endReached = () => {
		    this.setState({
		      pages: this.state.pages + 1
		    }, () => {
		      this.UNSAFE_componentWillMount();
		    });
		  };


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
      onRefresh={() =>  this.handleRefresh}
			onEndReached={this.endReached}
			onEndReachedThreshold={0.2}
			keyExtractor={(item,index)=>index}
			// ListFooterComponent={()=> this.pagesarttır()}
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
	width:null,
	height: 250,
	borderRadius:8,
	margin: 2,
	backgroundColor:COLOR_IMAGE,
},
loading:{
	flex:1,
	justifyContent:'center',
	backgroundColor:COLOR_HEADER,
	alignItems:'center'
},
list:{
	backgroundColor:COLOR_HEADER,
}
});
export default withNavigation(Tab1);
