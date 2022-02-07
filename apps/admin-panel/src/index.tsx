/**
 * Importing the NPM Packages.
 */
import * as ReactDOM from 'react-dom';

import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

/**
 * Importing user defined packages.
 */
import App from './components/app';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
