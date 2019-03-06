import {Platform, StyleSheet, Text, View,TouchableOpacity,ScrollView} from 'react-native';
import {createStackNavigator,createAppContainer} from "react-navigation";

import BottomTabNav from './src/view/Home'
import Contact from './src/view/Contact'
import Setting from './src/view/Setting'



const navigator = createStackNavigator({
    Home:{screen:BottomTabNav},
    Contact:{screen:Contact},
    Setting:{screen:Setting}
})




const App = createAppContainer(navigator)
export default App;
