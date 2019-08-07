import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component{
	render(){
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome:{
	fontSize: 20,
	textAlign: 'center',
	margin: 10
  },
});
