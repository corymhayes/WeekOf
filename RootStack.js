import { createStackNavigator } from "react-navigation";
import HomeScreen from './HomeScreen';
import AddEvent from './AddEvent';
import DayOfWeek from './DayOfWeek';

const RootStack = createStackNavigator ({
  Home: {
    screen: HomeScreen,
  },
  Event: {
    screen: AddEvent
  },
  DOW: {
    screen: DayOfWeek
  }
})

export default RootStack;