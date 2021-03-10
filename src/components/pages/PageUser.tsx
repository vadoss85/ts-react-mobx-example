import { Typography } from '@material-ui/core';
import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import { AppRoutes } from '../../store/Routes';

const PageUser = () => {
  let match = useRouteMatch();
  console.log(match);
  return (
    <Typography>
      <Link to={AppRoutes.home}>
        Back to list
      </Link>
    </Typography>
  );
}

export default PageUser;