import React, { useCallback } from 'react'
import { FuncWithRandomUserModel, WithRandomUserModel } from '../../typings/User';
import UIUserCard from '../ui/user/UIUserCard';

const _componentDisplayName = 'UserCard';

export interface UserCardProps extends WithRandomUserModel {
  onActionClick: FuncWithRandomUserModel<void>;
}

const UserCard = (props: UserCardProps) => {
  const {
    onActionClick,
    user,
  } = props;
  const {
    avatars,
    firstName,
    lastName,
    registrationDate,
    city,
    country,
    state,
    cell,
    phone,
  } = user;

  const onClick = useCallback(
    () => {
      onActionClick(user);
    },
    [],
  )

  return (
    <UIUserCard
      avatar={avatars['48x48']}
      title={`${firstName} ${lastName}`}
      subheader={registrationDate.format("MMM Do, YYYY")}
      location={`${city}, ${country}`}
      cell={cell}
      phone={phone}
      onActionClick={onClick}
    />
  );
};

UserCard.displayName = _componentDisplayName;

export default UserCard;
