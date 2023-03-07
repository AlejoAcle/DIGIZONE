/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from'react-redux';
import {name as appName} from './app.json';
import store from './store';

const ReduxProvider = () =>{
    return(
        <Provider store={store}>
            <App></App>
        </Provider>
    )
}


AppRegistry.registerComponent(appName, () => ReduxProvider);
