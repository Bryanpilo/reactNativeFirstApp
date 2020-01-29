import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import FlatList from './src/screens/FlatList';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentScreen: ComponentScreen,
    FlatList: FlatList,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'My first app'
    }
  }
);

export default createAppContainer(navigator);
