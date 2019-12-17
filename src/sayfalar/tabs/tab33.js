/* @flow */

import React, { Component } from 'react';
import {
  FlatList, View, StyleSheet, Text, Image, TouchableOpacity, Button, ActivityIndicator,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import {COLOR_HEADER,API,URL,COLOR_IMAGE} from './../bilgiler/bilgiler';


class Tab3 extends Component {
  constructor() {
  	super();
  	this.state = {
  		data: [],
      isLoading: true,
      refreshing: false
  	};
  }
  shuffle = (array) =>  {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
  }
  renderItem = ({ item }) =>

  	 (
    <TouchableOpacity
      activeOpacity={0.9}

      onPress={() => this.props.navigation.navigate('Detaylar', { veri: item.ad })}
      style={{ flex: 1 }}
  		>
      <Image
        style={styles.resim}
        source={{ uri: URL+`${item.ad}` }}
      />
    </TouchableOpacity>
  	)


  UNSAFE_componentWillMount() {
  	const url =API

  	fetch(url)
  	.then((response) => response.json())
  	.then((responseJson) => {
    let shuffle = this.shuffle(responseJson);
    this.setState({
    refreshing:true,
})
  		this.setState({
  			  data:shuffle,
          isLoading: false,
          refreshing:false,
  		});
  	})
  	.catch((error) => {
  		console.log(error);
  	});
  }

  render() {
  	return (

  		this.state.isLoading
  		? (
    <View style={styles.loading}
    >
      <ActivityIndicator size="large" color="red" animating />

    </View>
        )
  		: (
    <View style={styles.list}>
      <FlatList

        numColumns={3}
        data={this.state.data}
        renderItem={this.renderItem}
        refreshing={this.state.refreshing}
        onRefresh={() =>  this.UNSAFE_componentWillMount()}
        keyExtractor={(item, index) => index}
        onEndReached={this.endReached}
        onEndReachedThreshold={.7}

      />

    </View>
        )

    );
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
export default withNavigation(Tab3);
