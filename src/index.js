import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId="d5bb6eb7-ff5f-4fd2-b5b6-de1a04260bcd" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
);
