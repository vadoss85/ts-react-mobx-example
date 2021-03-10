import { AppBar, makeStyles, Theme } from '@material-ui/core';
import React, { ReactNode } from 'react'
import { StyledComponent } from '../../../configure/theme';

const _componentDisplayName = 'UILayoutHeader';

const useStyles = makeStyles(() =>({
  root: {},
}), {name: _componentDisplayName});

export interface UILayoutHeaderProps extends StyledComponent<typeof useStyles> {
  children: ReactNode;
}

const UILayoutHeader = (props: UILayoutHeaderProps) => {
  const classes = useStyles(props);
  return (
    <AppBar
      className={classes.root}
      position="static"
    >
      {props.children}
    </AppBar>
  );
};

UILayoutHeader.displayName = _componentDisplayName;

export default UILayoutHeader;
