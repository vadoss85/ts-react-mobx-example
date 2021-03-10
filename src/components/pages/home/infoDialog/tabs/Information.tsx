import { Avatar, Divider, List, ListItem, makeStyles, Theme, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React, { useMemo } from 'react'
import { StyledComponent } from '../../../../../configure/theme';
import { WithRandomUserModel } from '../../../../../typings/User';
import UIInfoDialogError from '../../../../ui/user/UIInfoDialogError';
import UIInfoDialogFullSizeRow from '../../../../ui/user/UIInfoDialogFullSizeRow';
import UIInfoDialogRow from '../../../../ui/user/UIInfoDialogRow';

const _componentDisplayName = 'UserInfoTabInformation';

const useStyles = makeStyles((theme: Theme) =>({
  root: {},
  mainInfo: {
    display: 'flex',
  },
  avatar: {
    width: 140,
    height: 140,
    border: `6px solid ${theme.palette.primary.light}`
  },
  textInfo: {
    flex: '1 1 auto'
  },
  list: {
    flex: '1 1 auto',
    marginLeft: theme.spacing() * 2,
  },
  gutterBottom: {
    marginBottom: theme.spacing() * 2,
  },
  fullSizeListItemLabel: {
    width: 150,
  }
}), {name: _componentDisplayName});

export interface UserInfoTabInformationProps extends StyledComponent<typeof useStyles>, WithRandomUserModel {}

const UserInfoTabInformation = (props: UserInfoTabInformationProps) => {
  const classes = useStyles(props);
  const { user } = props;

  return (
    <div className={classes.root}>
      <div
        className={ clsx(classes.mainInfo, classes.gutterBottom)}
      >
        <Avatar
          src={user.avatars['128x128']}
          className={classes.avatar}
        />
        <List
          disablePadding={true}
          className={classes.list}
        >
          <UIInfoDialogRow
            label="First name"
            text={user.firstName}
            disableDivider={true}
          />
          <UIInfoDialogRow
            label="Last name"
            text={user.lastName}
            disableDivider={true}
          />
          <UIInfoDialogRow
            label="Birth date"
            text={user.birthDate.format("MMM Do, YYYY")}
            disableDivider={true}
          />
          <UIInfoDialogRow
            label="Age"
            text={`${user.age}`}
            disableDivider={true}
          />
        </List>
      </div>
      <Divider className={classes.gutterBottom} />
      <List
        disablePadding={true}
        className={classes.list}
      >
        <UIInfoDialogFullSizeRow
          label="Gender"
          text={user.gender}
          classes={{
            listItemLabel: classes.fullSizeListItemLabel
          }}
        />
        <UIInfoDialogFullSizeRow
          label="Email"
          text={user.email}
        />
        <UIInfoDialogFullSizeRow
          label="Phone number"
          text={user.phone}
        />
        <UIInfoDialogFullSizeRow
          label="Cell number"
          text={`${user.cell}`}
        />
        <UIInfoDialogFullSizeRow
          label="Id"
          text={user.idToString.id}
          endAdornment={user.idToString.hasError && (
            <UIInfoDialogError />
          )}
        />
        <UIInfoDialogFullSizeRow
          label="Register date"
          text={`${user.registrationDate.format("MMM Do, YYYY")}`}
        />
      </List>
    </div>
  );
};

UserInfoTabInformation.displayName = _componentDisplayName;

export default UserInfoTabInformation;
