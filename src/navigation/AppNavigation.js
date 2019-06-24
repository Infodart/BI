import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import Dashboard from '../apps/tickets/screens/Dashboard';
import Edit from '../apps/tickets/screens/Edit';
import Add from '../apps/tickets/screens/Add';



const AppStackNavigator = createStackNavigator(
    {
        add: { screen: Add },
        dashboard: { screen: Dashboard },
        edit: { screen: Edit },



    }, {
        // see next line
        headerMode: 'none',
    })
const App = createAppContainer(AppStackNavigator);

export default App