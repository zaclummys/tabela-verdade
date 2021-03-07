import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './components/app/app';

import 'normalize.css';
import './index.css';

import './register-service-worker';
import './register-google-analytics';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

if (module.hot) {
    module.hot.accept();
}
