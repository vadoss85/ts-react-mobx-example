import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles, Slide, Tab, Tabs, Theme } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react'
import { StyledComponent } from '../../../../configure/theme';
import CloseIcon from '@material-ui/icons/Close';
import UserInfoTabLocation from './tabs/Location';
import UserInfoTabInformation from './tabs/Information';
import UserInfoTabLogin from './tabs/Login';
import { WithRandomUserModel } from '../../../../typings/User';

const _componentDisplayName = 'UserInfoDialog';

const useStyles = makeStyles((theme: Theme) =>({
  root: {},
  title: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  closeIconButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    color: theme.palette.common.white,
  },
  tabContent: {
    paddingTop: theme.spacing() * 2,
  },
  tabsContentContainer: {
    overflow: 'hidden',
  }
}), {name: _componentDisplayName});

export interface UserInfoDialogProps extends StyledComponent<typeof useStyles>, WithRandomUserModel {
  open: boolean;
  onClose: () => void;
}

const UserInfoDialog = (props: UserInfoDialogProps) => {
  const classes = useStyles(props);
  const { open, user, onClose } = props;
  const [tab, setTab] = useState(0)
  const setTabState = useCallback(
    (...args) => {
      setTab(args[1]);
    },
    [tab],
  )

  useEffect(() => {
    return () => {
      setTab(0)
    }
  }, [open]);

  if (!user) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle
        classes={{
          root: classes.title
        }}
      >
        {user.firstName} {user.lastName} full profile
        <IconButton
          onClick={onClose}
          className={classes.closeIconButton}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Tabs
          value={tab}
          indicatorColor="primary"
          textColor="primary"
          onChange={setTabState}
        >
          <Tab label="Information" />
          <Tab label="Login" />
          <Tab label="Location" />
        </Tabs>
        <section
          className={classes.tabsContentContainer}
        >
          <Slide
            in={tab === 0}
            direction="left"
          >
            <div className={classes.tabContent}>
              {tab === 0 && (
                <UserInfoTabInformation user={user} />
              )}
            </div>
          </Slide>
          <Slide
            in={tab === 1}
            direction="left"
          >
            <div>
              {tab === 1 && (
                <UserInfoTabLogin user={user} />
              )}
            </div>
          </Slide>
          <Slide
            in={tab === 2}
            direction="left"
          >
            <div>
              {tab === 2 && (
                <UserInfoTabLocation user={user} />
              )}
            </div>
          </Slide>
        </section>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          color="secondary"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

UserInfoDialog.displayName = _componentDisplayName;

export default UserInfoDialog;
