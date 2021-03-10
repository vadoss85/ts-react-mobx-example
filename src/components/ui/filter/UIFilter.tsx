import { StyledComponent } from 'configure/theme';
import React, { ReactNode, useCallback, useState } from 'react'
import { IconButton, makeStyles, Menu, Theme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const _componentDisplayName = 'UIFilter';

const useStyles = makeStyles((theme: Theme) =>({
  root: {},
  menuRoot: {
    padding: theme.spacing()*2,
    minWidth: theme.spacing()*35,
    maxWidth: theme.spacing()*35,
  },
}), {name: _componentDisplayName});

export interface UIFilterProps extends StyledComponent<typeof useStyles> {
  children: ReactNode;
}

const UIFilter = (props: UIFilterProps) => {
  const classes = useStyles(props);
  const { children } = props;
  const [anchor, setOpenState] = useState<HTMLButtonElement>(null)
  const onButtonClick = useCallback(
    (ev: React.MouseEvent<HTMLButtonElement>) => {
      console.log(ev.currentTarget)
      setOpenState(ev.currentTarget)
    },
    [anchor],
  )
  const onClose = useCallback(
    () => {
      setOpenState(null);
    },
    [],
  )

  return (
    <div className={classes.root}>
      <IconButton
        onClick={onButtonClick}
        color="secondary"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        open={Boolean(anchor)}
        onClose={onClose}
        anchorEl={anchor}
        getContentAnchorEl={null}
        autoFocus={false}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: classes.menuRoot,
        }}
      >
        <div>
          {children}
        </div>
      </Menu>
    </div>
  );
};

UIFilter.displayName = _componentDisplayName;

export default UIFilter;
