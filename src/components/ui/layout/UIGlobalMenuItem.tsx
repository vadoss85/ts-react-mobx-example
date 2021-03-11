import { fade, makeStyles, Theme } from '@material-ui/core';
import UILink from '@UI/UILink';
import clsx from 'clsx';
import { StyledComponent } from 'configure/theme';
import React, { ReactNode } from 'react';

const _componentDisplayName = 'UIGlobalMenuItem';

const useStyles = makeStyles((theme: Theme) =>({
  root: {
    display: 'flex',
    height: theme.spacing() * 6,
    padding: `0px ${theme.spacing()*2}px`,
    textDecoration: 'none',
    borderBottomWidth: theme.spacing()/2,
    borderBottomColor: 'transparent',
    borderBottomStyle: 'solid',
    color: theme.palette.common.white,
    textTransform: 'uppercase',
    alignItems: 'center',
    fontWeight: theme.typography.fontWeightBold,
  },
  active: {
    cursor: 'default',
    pointerEvents: 'none',
    borderBottomColor: theme.palette.common.white,
    backgroundColor: fade(theme.palette.common.white, .2),
  }
}), {name: _componentDisplayName});

export interface UIGlobalMenuItemProps extends StyledComponent<typeof useStyles> {
  to: string;
  isActive: boolean;
  children: ReactNode;
}

const UIGlobalMenuItem = (props: UIGlobalMenuItemProps) => {
  const classes = useStyles(props);
  const { to, isActive, children} = props;
  return (
    <UILink
      to={to}
      className={clsx(
        classes.root,
        {
          [classes.active]: isActive,
        }
      )}
    >
      {children}
    </UILink>
  );
};

UIGlobalMenuItem.displayName = _componentDisplayName;

export default UIGlobalMenuItem;
