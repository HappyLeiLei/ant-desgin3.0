import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.less';
import Home from './routers/home/Home';
import NewsFlashPage from './routers/NewsFlashPage/NewsFlashPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
// ReactDOM.render(<NewsFlashPage />, document.getElementById('root'));
registerServiceWorker();
