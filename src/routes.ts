import { createAppContainer, createStackNavigator } from 'react-navigation';
import Feed from './pages/Feed';
import New from './pages/New';

export default createAppContainer(
	createStackNavigator({
		Feed,
		New,
	},{//aplica-se para todas as telas
		defaultNavigationOptions: {
			headerTintColor: "#000",
			headerTitle: "Instagram",
			headerBackTitle: null,
		},
		mode: 'modal'
	})
);