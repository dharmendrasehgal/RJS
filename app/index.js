import React from 'react';
import ReactDOM from'react-dom';

import App from './components/App';
import FetchData from './components/helpers';

ReactDOM.render(<App />, document.getElementById('container'));
ReactDOM.render(<FetchData subreddit="reactjs" />, document.getElementById('wrapper'));