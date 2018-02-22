import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'react-bootstrap';

// Styles
import 'sanitize.css/sanitize.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.style.css';
import Site from './components/site';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Router>
    <Site />
</Router>
, document.getElementById('root'));
registerServiceWorker();
