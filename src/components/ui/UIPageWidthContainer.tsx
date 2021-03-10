import { Box, Container, makeStyles, Theme } from '@material-ui/core'
import clsx from 'clsx';
import React, { ReactChild } from 'react'

const _componentDisplayName = 'UIPageWidthContainer';

const useStyles = makeStyles((theme: Theme) =>({
  root: {
    maxWidth: 1024,
    margin: '0 auto',
  },
  gutterTop: {
    paddingTop: theme.spacing() * 4,
  }
}), {name: _componentDisplayName});

interface UIPageWidthContainerProps {
  children: ReactChild;
  classes?: Partial<ReturnType<typeof useStyles>>;
  useGutterTop?: boolean;
}

const UIPageWidthContainer = (props: UIPageWidthContainerProps) => {
  const classes = useStyles(props);
  const { useGutterTop } = props;
  return (
    <Container
      className={
        clsx(classes.root, {
          [classes.gutterTop]: useGutterTop,
        })
      }
      maxWidth="lg"
      component="section"
    >
      {props.children}
    </Container>
  );
}

export default UIPageWidthContainer