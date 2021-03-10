import { makeStyles, Theme } from '@material-ui/core';
import React from 'react'
import { StyledComponent } from '../../../configure/theme';
import ErrorIcon from '@material-ui/icons/Error';

const _componentDisplayName = 'UIInfoDialogError';

const useStyles = makeStyles((theme: Theme) =>({
  root: {
    color: theme.palette.error.main,
  },
}), {name: _componentDisplayName});

export interface UIInfoDialogErrorProps extends StyledComponent<typeof useStyles> {}

const UIInfoDialogError = (props: UIInfoDialogErrorProps) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <ErrorIcon />
    </div>
  );
};

UIInfoDialogError.displayName = _componentDisplayName;

export default UIInfoDialogError;
