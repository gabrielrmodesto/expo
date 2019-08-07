import React, { Component } from 'react';
import api from '../services/api';

import { View, TouchableOpacity } from 'react-native';

export default class Feed extends Component {
	static navigationOptions = ({navigation}) => ({
		headerRight: (
			<TouchableOpacity onPress={() => navigation.navigate('New')}>
			</TouchableOpacity>
		),
	});
	state = {
		feed: [],
	};
	async componentDidMount(){
		//this.registerToSocket();

		//exibir os dados para ver se esta certo
		//console.log(response.data);

		const response = await api.get('posts');
		this.setState({
			feed: response.data
		});

	}
	render() {
		return <View />;
	}
}
