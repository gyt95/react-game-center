import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import './style/base.scss';
import './assets/font/iconfont.css';
import './utils/rem.js';
import App from './App';

import authStore from './stores/authStore';
import userStore from './stores/userStore';
import commonStore from './stores/commonStore';
import billboardStore from './stores/billboardStore';
import postStore from './stores/postStore';

import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.css';

const stores = {
    authStore,
    userStore,
    commonStore,
    billboardStore,
    postStore
}

useStrict(true); //开启严格模式（好处：mobx中必须用@action声明方法，否则报错）

ReactDOM.render((   //Provider利用react上下文机制传递mobx的存储集合store到子组件里
    <Provider {...stores}>
        <App />
    </Provider>
), document.getElementById('root'));

registerServiceWorker();


/**
 * if your stores will change over time, like an observable value of another store,
   MobX will warn you. To suppress that warning explicitly, 
   you can use suppressChangedStoreWarning={true} as a prop at your own risk.
 */