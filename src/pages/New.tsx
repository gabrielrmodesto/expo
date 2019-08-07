import React, { Component } from 'react';

import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';

export default class New extends Component {
	static navigationOptions = {
		headerTitle: 'Nova Publicacao'
	};
	state = {
		author: '',
		place: '',
		description: '',
		hashtags: '',
	};
  	render() {
		return(
			<View style={styles.container} >
				<TouchableOpacity style={styles.selectButton} onPress={() => {}}>
					<Text style={styles.selectButton}>Selecionar Imagens</Text>
				</TouchableOpacity>
				<TextInput 
					style={styles.input}
					autoCorrect={false}
					autoCapitalize="none"
					placeholder="Nome do autor"
					placeholderTextColor="#999"
					value={this.state.author}
					onChangeText={author => this.setState({ author })}
				/>
			</View>
		);
  	}
}
const styles = StyleSheet.create({

});
