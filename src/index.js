import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'

const WithMUI = () => <MuiThemeProvider><App /></MuiThemeProvider>  

ReactDOM.render(<WithMUI/>, document.getElementById('root'));
registerServiceWorker();
injectTapEventPlugin();