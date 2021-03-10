import { makeStyles } from '@material-ui/core';
import React from 'react'
import UIInfoDialogRow, { UIInfoDialogRowProps } from './UIInfoDialogRow';

const _componentDisplayName = 'UIInfoDialogFullSizeRow';

const useStyles = makeStyles(() =>({
  listItemLabel: {
    width: 150,
    minWidth: 150,
  },
}), {name: _componentDisplayName});

export interface UIInfoDialogFullSizeRowProps extends UIInfoDialogRowProps {}

const UIInfoDialogFullSizeRow = (props: UIInfoDialogFullSizeRowProps) => {
  const classes = useStyles(props);
  return (
    <UIInfoDialogRow
      {...props}
      classes={{
        ...classes,
      }}
    />
  );
};

UIInfoDialogFullSizeRow.displayName = _componentDisplayName;

export default UIInfoDialogFullSizeRow;
