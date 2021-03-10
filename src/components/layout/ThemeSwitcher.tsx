import UIThemeSwitcher from '@UI/layout/UIThemeSwitcher';
import React from 'react';
import store from '@Store/index';
import { observer } from 'mobx-react';
const _componentDisplayName = 'AppThemeSwitcher';

export interface AppThemeSwitcherProps {}

const AppThemeSwitcher = (props: AppThemeSwitcherProps) => {
  return (
    <UIThemeSwitcher
      theme={store.theme.current}
      onThemeSwitch={store.theme.switchTheme}
    />
  );
};

AppThemeSwitcher.displayName = _componentDisplayName;

export default observer(AppThemeSwitcher);
