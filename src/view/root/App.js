import {createStackNavigator,createAppContainer} from "react-navigation"
import BottomTabNav from '../Home'
import Contact from '../Contact'
import Setting from '../Setting'
import Welcome from '../login/welcome'

const navigator = createStackNavigator({
    Welcome:{screen:Welcome},
    Home:{screen:BottomTabNav},
    Contact:{screen:Contact},
    Setting:{screen:Setting}
})


const App = createAppContainer(navigator)
export default App;
