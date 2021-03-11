import React from 'react'
import { AppBar, makeStyles } from "@material-ui/core";
import { StyledComponent } from "../../../configure/theme";
import UILayoutHeader from './UIHeader';
import UIGlobalMenu from './UIGlobalMenu';

const _componentDisplayName = 'UILayoutHome';

const useStyles = makeStyles(() =>({
  root: {},
  header: {},
  menu: {},
  body: {},
  footer: {},
}), {name: _componentDisplayName});

export interface UILayoutHomeProps extends StyledComponent<typeof useStyles> {
  header: React.ReactNode;
  menu: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

const UILayoutHome = (props: UILayoutHomeProps) => {
  const classes = useStyles(props);
  const { header, footer, menu, children } = props;
  return (
    <div className={classes.root}>
      <UILayoutHeader
        classes={{
          root: classes.header
        }}
      >
        {header}
      </UILayoutHeader>
      <UIGlobalMenu
        classes={{
          root: classes.menu
        }}
      >
        {menu}
      </UIGlobalMenu>
      <div className={classes.body}>
        {children}
      </div>
      <footer className={classes.footer}>
        {footer}
      </footer>
    </div>
  );
};

UILayoutHome.displayName = _componentDisplayName;

export default UILayoutHome;
