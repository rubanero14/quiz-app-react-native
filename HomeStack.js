import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Main from './components/Main';
import Quiz from './components/Quiz';
import Score from './components/Score';

const screens = {
    Main: {
        screen: Main
    },
    Quiz: {
        screen: Quiz
    },
    Score: {
        screen: Score
    },
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);