import { Button, makeStyles, Menu, Theme } from '@material-ui/core';
import { useHomePageStore } from '@Store/providers/home';
import UIFilter from '@UI/filter/UIFilter';
import { StyledComponent } from 'configure/theme';
import React from 'react'
import UsersGender from './UsersGender';
import UsersNationalities from './UsersNationalities';

const _componentDisplayName = 'UsersFilter';

const useStyles = makeStyles((theme: Theme) =>({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: -(theme.spacing()*1.5),
  },
  filterRoot: {
    minWidth: 318,
    maxWidth: 318,
  },
  submitBlock: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  submitButton: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.light,
  },
}), {name: _componentDisplayName});

export interface UsersFilterProps extends StyledComponent<typeof useStyles> {}

const UsersFilter = (props: UsersFilterProps) => {
  const home = useHomePageStore();
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <UIFilter
        classes={{
          menuRoot: classes.filterRoot
        }}
      >
        <UsersGender />
        <UsersNationalities />
        <div className={classes.submitBlock}>
          <Button
            className={classes.submitButton}
            onClick={home.submitFilter}
          >
            Apply
          </Button>
        </div>
      </UIFilter>
    </div>
  );
};

UsersFilter.displayName = _componentDisplayName;

export default UsersFilter;
