import { makeStyles, Theme } from '@material-ui/core';
import { FilterValue } from '@Store/filter/FilterValue';
import store from '@Store/index';
import UIFilterButton from '@UI/filter/UIFilterButton';
import UIFilterRow from '@UI/filter/UIFilterRow';
import { GetNationalitiesListData, RandomUserQueryBuilderNationalities } from 'API/RandomUser/RandomUserQueryBuilder';
import { observer } from 'mobx-react';
import React, { useCallback, useMemo } from 'react'

const _componentDisplayName = 'UsersNationalities';

export interface UsersNationalitiesProps {}
export interface UsersNationalitiesButtonProps {
  nationality: FilterValue<RandomUserQueryBuilderNationalities>
  className: string
}

const NatButton = observer((props: UsersNationalitiesButtonProps) => {
  const { nationality } = props
   const onClick = useCallback(
    () => {
      nationality.toggle();
    },
    [],
  )
  return (
    <UIFilterButton
      isActive={nationality.selected}
      val={nationality.value}
      onButtonClick={onClick}
      className={props.className}
    >
      {nationality.value}
    </UIFilterButton>
  )
})

const useStyles = makeStyles((theme: Theme) =>({
  root: {
    flexWrap: 'wrap',
    marginLeft: -theme.spacing(),
    justifyContent: 'flex-start',
  },
  button: {
    marginLeft: theme.spacing(),
    marginBottom: theme.spacing(),
    width: 90,
  },
}), {name: _componentDisplayName});

const UsersNationalities = (props: UsersNationalitiesProps) => {
  const filter = store.pages.home.filter;
  const classes = useStyles(props);
  return (
    <UIFilterRow
      label="Nationalities"
      classes={{
        controls: classes.root
      }}
    >
      {filter.nationalities.map((nat) => (
        <NatButton
          key={nat.value}
          nationality={nat}
          className={classes.button}
        />
      ))}
    </UIFilterRow>
  );
};

UsersNationalities.displayName = _componentDisplayName;

export default observer(UsersNationalities);
