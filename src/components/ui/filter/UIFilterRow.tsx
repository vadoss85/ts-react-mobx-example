import { makeStyles, Theme, Typography } from '@material-ui/core';
import { StyledComponent } from 'configure/theme';
import React, { ReactNode } from 'react'

const _componentDisplayName = 'UIFilterRow';

const useStyles = makeStyles((theme: Theme) =>({
  root: {
    marginBottom: theme.spacing()* 2
  },
  label: {},
  controls: {
    marginTop: theme.spacing(),
    display: 'flex',
    justifyContent: 'space-between'
  }
}), {name: _componentDisplayName});

export interface UIFilterRowProps extends StyledComponent<typeof useStyles> {
  label: string;
  children: ReactNode;
}

const UIFilterRow = (props: UIFilterRowProps) => {
  const classes = useStyles(props);
  const { label, children } = props;
  return (
    <div className={classes.root}>
      <Typography className={classes.label}>{label}</Typography>
      <div className={classes.controls}>
        {children}
      </div>
    </div>
  );
};

UIFilterRow.displayName = _componentDisplayName;

export default UIFilterRow;
