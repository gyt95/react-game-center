import React from 'react';
import ReactDOM from 'react-dom';
import './style/base.css';
import './assets/font/iconfont.css';
import './config/config.js';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
