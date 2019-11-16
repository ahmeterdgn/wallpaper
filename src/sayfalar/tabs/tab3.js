/* @flow */

import React, { Component } from 'react';
import {
  FlatList, View, StyleSheet, Text, Image, TouchableOpacity, Button, ActivityIndicator,
} from 'react-native';
import { withNavigation } from 'react-navigation';


class Tab3 extends Component {
  constructor() {
  	super();
  	this.state = {
  		data: [],
      isLoading: true,
<<<<<<< HEAD
      refreshing: false
=======
      refreshing: false,
>>>>>>> ff032a1c4820c2f86620e85bcccfe7e470889a44
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
  // function tiklandi(ad) {    }

  	 (
    // this.props.navigation.navigate('Sayfalar',{ veri: item.ad })
    <TouchableOpacity
      activeOpacity={0.9}

      onPress={() => this.props.navigation.navigate('Detaylar', { veri: item.ad })}
      style={{ flex: 1 }}
  		>
      <Image
        style={{
          flex: 1, width: null, height: 250, borderRadius: 5, margin: 1,
        }}
        source={{ uri: `https://weast.ahmeterdgn.net/${item.ad}` }}
      />
    </TouchableOpacity>
  	)


  UNSAFE_componentWillMount() {
  	const url = 'http://weast.ahmeterdgn.net/api';

  	fetch(url)
  	.then((response) => response.json())
  	.then((responseJson) => {
    let shuffle = this.shuffle(responseJson);
<<<<<<< HEAD

  		this.setState({
  			  data:shuffle,
=======
    this.setState({
        refreshing:true,
    });
  		this.setState({
  			   data:shuffle,
>>>>>>> ff032a1c4820c2f86620e85bcccfe7e470889a44
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
    <View style={{
      flex: 1, justifyContent: 'center', backgroundColor: 'black', alignItems: 'center',
    }}
    >
      <ActivityIndicator size="large" color="red" animating />

    </View>
        )
  		: (
    <View style={{ backgroundColor: '#212121' }}>
      <FlatList

        numColumns={3}
        data={this.state.data}
        renderItem={this.renderItem}
        refreshing={this.state.refreshing}
        onRefresh={() =>  this.UNSAFE_componentWillMount()}
        keyExtractor={(item, index) => index}
<<<<<<< HEAD
        onEndReached={this.endReached}
        onEndReachedThreshold={.2}
=======
>>>>>>> ff032a1c4820c2f86620e85bcccfe7e470889a44

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
  text: {
    margin: 20,
  },
});
export default withNavigation(Tab3);
