import React from 'react'
import { WithRandomUserModel } from '../../../typings/User';
import UIOLMap from '../../ui/UIOLMap';

const _componentDisplayName = 'UserLocation';

export interface UserLocationProps extends WithRandomUserModel {}

const UserLocation = (props: UserLocationProps) => {
  const { user } = props;
  return (
    <UIOLMap
      longitude={user.coords.longitude}
      latitude={user.coords.latitude}
    />
  );
};

UserLocation.displayName = _componentDisplayName;

export default UserLocation;
