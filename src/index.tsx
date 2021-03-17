import { CssBaseline, ThemeProvider } from '@material-ui/core';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { getTheme } from './configure/theme';

import App from './App';
import { configureStore } from './configure/store';
import { observer } from 'mobx-react';
import { AppTheme } from './store/AppTheme';
import { useGlobalStore } from '@Store/providers';

var mountNode = document.getElementById('app-root');

configureStore();

const store = useGlobalStore();

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
