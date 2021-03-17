import UIThemeSwitcher from '@UI/layout/UIThemeSwitcher';
import React from 'react';
import { useThemeStore } from '@Store/providers';
import { observer } from 'mobx-react-lite';
const _componentDisplayName = 'AppThemeSwitcher';

export interface AppThemeSwitcherProps {}

const AppThemeSwitcher = observer((props: AppThemeSwitcherProps) => {
  const theme = useThemeStore();
  return (
    <UIThemeSwitcher
      theme={theme.current}
      onThemeSwitch={theme.switchTheme}
    />
  );
});

AppThemeSwitcher.displayName = _componentDisplayName;

export default AppThemeSwitcher;
