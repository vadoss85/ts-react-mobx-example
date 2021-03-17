import { Button, ButtonProps, makeStyles, Theme } from '@material-ui/core';
import React, { useCallback } from 'react'

const _componentDisplayName = 'UIFilterButton';

const useStyles = makeStyles((theme: Theme) =>({
}), {name: _componentDisplayName});

export interface UIFilterButtonProps<VT> extends ButtonProps {
  isActive: boolean;
  val: VT;
  onButtonClick: (val: VT) => void;
}

const UIFilterButton = (props: UIFilterButtonProps<any>) => {
  const classes = useStyles(props);
  const { children, val, isActive, onButtonClick, ...restButtonProps } = props;
  const onClick = useCallback(
    () => {
      onButtonClick(val);
    },
    [isActive],
  )
  return (
    <Button
      {...restButtonProps}
      variant="contained"
      color={isActive ? 'primary' : 'secondary'}
      classes={{
        ...classes,
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

UIFilterButton.displayName = _componentDisplayName;

export default UIFilterButton;
