import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore} from 'redux';
import { searchRobots } from './reducers'; 
import { Provider } from 'react-redux';
//only one so it has to be mentioned as default
 //{} means that we can export multiple objects from the file. Hence they need to destructured
import App from './containers/App' 
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(searchRobots);

ReactDOM.render(
				<Provider store={store}>
					<App />
				</Provider>, document.getElementById('root'));
registerServiceWorker();

//all javascript components must be wrapped in curly braces for the react to recognize it.