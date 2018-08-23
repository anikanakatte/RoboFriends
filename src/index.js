import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//only one so it has to be mentioned as default
 //{} means that we can export multiple objects from the file. Hence they need to destructured
 import App from './App'
 import './App.css';


import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//all javascript components must be wrapped in curly braces for the react to recognize it.