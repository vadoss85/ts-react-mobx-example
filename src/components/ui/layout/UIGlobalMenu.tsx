import { makeStyles, AppBar } from '@material-ui/core';
import { StyledComponent } from 'configure/theme';
import React, { ReactNode } from 'react';
const _componentDisplayName = 'UIGlobalMenu';

const useStyles = makeStyles(() =>({
  root: {},
}), {name: _componentDisplayName});

export interface UIGlobalMenuProps extends StyledComponent<typeof useStyles> {
  children: ReactNode;
}

const UIGlobalMenu = (props: UIGlobalMenuProps) => {
  const classes = useStyles(props);
  return (
    <AppBar
      className={classes.root}
      position="static"
      color="secondary"
    >
      {props.children}
    </AppBar>
  );
};

UIGlobalMenu.displayName = _componentDisplayName;

export default UIGlobalMenu;
