import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';

// React Material Components
import CssBaseline from "@material-ui/core/CssBaseline";

// Styles
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './theme';

import App from './App';

const rootElement = document.getElementById("root");

ReactDOM.render(<Fragment>
  <ThemeProvider theme={Theme}>
    <Router>
      <CssBaseline />
      <App />
    </Router>
  </ThemeProvider>
</Fragment>, rootElement);
