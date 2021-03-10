import AssetsLogos from '@Assets/logos';
import { FormControlLabel, makeStyles, Switch, Toolbar, Typography } from '@material-ui/core';
import UIThemeSwitcher from '@UI/layout/UIThemeSwitcher';
import UILink from '@UI/UILink';
import React from 'react'
import { StyledComponent } from '../../configure/theme';
import AppThemeSwitcher from './ThemeSwitcher';

const _componentDisplayName = 'AppHeader';

const useStyles = makeStyles(() =>({
  root: {
    justifyContent: 'space-between',
  },
}), {name: _componentDisplayName});

export interface AppHeaderProps extends StyledComponent<typeof useStyles> {}

const AppHeader = (props: AppHeaderProps) => {
  const classes = useStyles(props);
  return (
    <Toolbar
      className={classes.root}
    >
      <UILink
          to="/"
        >
        <img src={AssetsLogos.ts} />
        <img src={AssetsLogos.mobx} />
        <img src={AssetsLogos.react} />
      </UILink>
      <AppThemeSwitcher />
    </Toolbar>
  );
};

AppHeader.displayName = _componentDisplayName;

export default AppHeader;
