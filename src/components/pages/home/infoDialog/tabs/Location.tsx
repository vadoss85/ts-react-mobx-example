import { List } from '@material-ui/core';
import React from 'react'
import { WithRandomUserModel } from '../../../../../typings/User';
import UIInfoDialogRow from '../../../../ui/user/UIInfoDialogRow';
import UserLocation from '../../UserLocation';

const _componentDisplayName = 'UserInfoTabLocation';

export interface UserInfoTabLocationProps extends WithRandomUserModel {}

const UserInfoTabLocation = (props: UserInfoTabLocationProps) => {
  const { user } = props;
  return (
    <List>
      <UIInfoDialogRow
        label="Country"
        text={`${user.country}`}
      />
      <UIInfoDialogRow
        label="City"
        text={`${user.city}`}
      />
      <UIInfoDialogRow
        label="Coordinates"
        text={`${user.coords.latitude},${user.coords.longitude}, (Latitude, Longitude)`}
      />
      <UserLocation user={props.user} />
    </List>
  );
};

UserInfoTabLocation.displayName = _componentDisplayName;

export default UserInfoTabLocation;
