import { makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { StyledComponent } from 'configure/theme';
import React from 'react';
import AppMenuItem from './AppMenuItem';
const _componentDisplayName = 'AppMenu';

const useStyles = makeStyles((theme: Theme) =>({
  root: {
    minHeight: theme.spacing() * 6,
  },
}), {name: _componentDisplayName});

export interface AppMenuProps extends StyledComponent<typeof useStyles> {}

const AppMenu = (props: AppMenuProps) => {
  const classes = useStyles(props);
  return (
    <Toolbar
      className={classes.root}
    >
      <AppMenuItem to="/">Users</AppMenuItem>
      <AppMenuItem to="/charts">Charts</AppMenuItem>
    </Toolbar>
  );
};

AppMenu.displayName = _componentDisplayName;

export default AppMenu;
