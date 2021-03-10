import { CssBaseline, ThemeProvider } from '@material-ui/core';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { getTheme } from './configure/theme';

import App from './App';
import { configureStore } from './configure/store';
import { observer } from 'mobx-react';
import store from './store';
import { AppTheme } from './store/AppTheme';

var mountNode = document.getElementById('app-root');

configureStore();

interface AppComponentProps {
  currentTheme: AppTheme
}

const AppComponent = observer((props: AppComponentProps) => {
  const { currentTheme } = props;

  return (
    <ThemeProvider theme={getTheme(currentTheme.current)}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
})

ReactDOM.render(<AppComponent currentTheme={store.theme} />, mountNode);
