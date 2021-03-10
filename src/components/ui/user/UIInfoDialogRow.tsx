import { makeStyles, ListItem, Typography, Divider } from '@material-ui/core';
import React, { ReactNode } from 'react'
import { StyledComponent } from '../../../configure/theme';


const _componentDisplayName = 'UIInfoDialogRow';

const useStyles = makeStyles(() =>({
  root: {
    display: 'flex',
    paddingTop: 6,
    paddingBottom: 6
  },
  listItemLabel: {
    width: 100,
    minWidth: 100,
    fontWeight: 900,
  },
  listItemText: {
    flex: '1 1 auto',
  }
}), {name: _componentDisplayName});

export interface UIInfoDialogRowProps extends StyledComponent<typeof useStyles> {
  label: string;
  text: string;
  disableDivider?: boolean;
  endAdornment?: ReactNode;
}

const UIInfoDialogRow = (props: UIInfoDialogRowProps) => {
  const classes = useStyles(props);
  const { label, text, disableDivider, endAdornment } = props;

  return (
    <>
    <ListItem
      disableGutters={true}
      className={classes.root}
    >
      <Typography className={classes.listItemLabel}>{label}:</Typography>
      <Typography
        className={classes.listItemText}
        noWrap={true}
        title={text}
      >
        {text}
      </Typography>
      {typeof endAdornment !== 'undefined' && endAdornment}
    </ListItem>
    {typeof disableDivider === 'undefined' && !disableDivider && (
      <Divider />
    )}
    </>
  );
};

UIInfoDialogRow.displayName = _componentDisplayName;

export default UIInfoDialogRow;
