import { List, makeStyles } from "@material-ui/core";
import React from "react";
import { StyledComponent } from "../../../../../configure/theme";
import { WithRandomUserModel } from "../../../../../typings/User";
import UIInfoDialogRow from "../../../../ui/user/UIInfoDialogRow";

const _componentDisplayName = 'UserInfoTabLogin';

const useStyles = makeStyles(() =>({
  root: {},
}), {name: _componentDisplayName});

export interface UserInfoTabLoginProps extends StyledComponent<typeof useStyles>, WithRandomUserModel {}

const UserInfoTabLogin = (props: UserInfoTabLoginProps) => {
  const classes = useStyles(props);
  const { user } = props;
  return (
    <List
      disablePadding={true}
    >
      <UIInfoDialogRow
        label="Username"
        text={user.login.username}
      />
      <UIInfoDialogRow
        label="UUID"
        text={user.login.uuid}
      />
      <UIInfoDialogRow
        label="Password"
        text={user.login.password}
      />
      <UIInfoDialogRow
        label="MD5"
        text={user.login.md5}
      />
      <UIInfoDialogRow
        label="SHA1"
        text={user.login.sha1}
      />
      <UIInfoDialogRow
        label="SHA256"
        text={user.login.sha256}
        disableDivider={true}
      />
    </List>
  );
};

UserInfoTabLogin.displayName = _componentDisplayName;

export default UserInfoTabLogin;
