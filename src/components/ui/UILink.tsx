import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Link, LinkProps } from 'react-router-dom';
import { StyledComponent } from '../../configure/theme';


const _componentDisplayName = 'UILink';

const useStyles = makeStyles(() =>({
  root: {
    textDecoration: 'none',
    color: 'inherit'
  },
}), {name: _componentDisplayName});

export interface UILinkProps extends LinkProps, StyledComponent<typeof useStyles> {}

const UILink = (props: UILinkProps) => {
  const classes = useStyles(props);
  return (
    <Link
      className={classes.root}
      {...props}
    />
  );
};

UILink.displayName = _componentDisplayName;

export default UILink;
