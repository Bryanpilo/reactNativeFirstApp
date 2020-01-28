import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import FlatList from './src/screens/FlatList';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentScreen: FlatList
  },
  {
    initialRouteName: 'ComponentScreen',
    defaultNavigationOptions: {
      title: 'My first app'
    }
  }
);

export default createAppContainer(navigator);
