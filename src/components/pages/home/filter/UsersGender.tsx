import { Button, makeStyles, Theme } from '@material-ui/core';
import UIFilterButton, { UIFilterButtonProps } from '@UI/filter/UIFilterButton';
import UIFilterRow from '@UI/filter/UIFilterRow';
import React, { useCallback } from 'react'
import store from '@Store/index';
import { observer } from 'mobx-react';
import { UserGender } from '@Store/lists/randomUsers/RandomUsersList';

const _componentDisplayName = 'UsersGender';

export interface UsersGenderProps {}
export interface UsersGenderButtonProps extends UIFilterButtonProps<UserGender> {}

const useStyles = makeStyles((theme: Theme) =>({
  button: {
    width: 90,
  },
}), {name: _componentDisplayName});

const UsersGender = (props: UsersGenderProps) => {
  const filter = store.pages.home.filter;
  const classes = useStyles(props);
  const onClick = useCallback(
    (val: UserGender) => {
      filter.setGender(val);
    },
    [],
  )

  return (
    <UIFilterRow
      label="Gender"
    >
      <>
        <UIFilterButton
          isActive={!filter.gender}
          val={null}
          onButtonClick={onClick}
          className={classes.button}
        >
          All
        </UIFilterButton>
        <UIFilterButton
          isActive={filter.gender === 'male'}
          val="male"
          onButtonClick={onClick}
          className={classes.button}
        >
          Male
        </UIFilterButton>
        <UIFilterButton
          isActive={filter.gender === 'female'}
          val="female"
          onButtonClick={onClick}
          className={classes.button}
        >
          Female
        </UIFilterButton>
      </>
    </UIFilterRow>
  );
};

UsersGender.displayName = _componentDisplayName;

export default observer(UsersGender);
