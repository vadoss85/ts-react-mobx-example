import { makeStyles, Card, CardHeader, Avatar, CardContent, Typography, ListItemIcon, Icon, List, ListItem, Divider, CardActions, Button } from '@material-ui/core';
import { LocationCity, SettingsCell, SettingsPhone } from '@material-ui/icons';
import React, { useCallback } from 'react'
import { StyledComponent } from '../../../configure/theme';
import UILink from '../UILink';

const _componentDisplayName = 'UIUserCard';

const useStyles = makeStyles(() =>({
  root: {},
  content: {
    paddingBottom: 0,
  },
  actions: {
    justifyContent: 'flex-end',
    paddingTop: 0,
  },
  pointer: {
    cursor: 'pointer',
  }
}), {name: _componentDisplayName});

export interface UIUserCardProps extends StyledComponent<typeof useStyles> {
  avatar: string;
  title: string;
  subheader: string;
  location: string;
  cell: string;
  phone: string;
  onActionClick: () => void;
}

const UIUserCard = (props: UIUserCardProps) => {
  const classes = useStyles(props);
  const { 
    avatar,
    title,
    subheader,
    location,
    cell,
    phone,
    onActionClick,
  } = props;

  const onClick = useCallback(
    () => {
      onActionClick();
    },
    [],
  )

  return (
    <Card>
      <CardHeader
        avatar={
          <div
            onClick={onClick}
            className={classes.pointer}
          >
            <Avatar
              src={avatar}
            />
          </div>
        }
        title={
          <Typography
            onClick={onClick}
            className={classes.pointer}
          >
            {title}
          </Typography>
        }
        subheader={subheader}
      />
      <CardContent
        className={classes.content}
      >
        <List
          disablePadding={true}
        >
          <ListItem
            disableGutters={true}
          >
            <ListItemIcon>
              <LocationCity />
            </ListItemIcon>
            <Typography variant="body2">{location}</Typography>
          </ListItem>
          <Divider />
          <ListItem
            disableGutters={true}
          >
            <ListItemIcon>
              <SettingsCell />
            </ListItemIcon>
            <Typography variant="body2">{cell}</Typography>
          </ListItem>
          <Divider />
          <ListItem
            disableGutters={true}
          >
            <ListItemIcon>
              <SettingsPhone />
            </ListItemIcon>
            <Typography variant="body2">{phone}</Typography>
          </ListItem>
        </List>
      </CardContent>
      <CardActions
        className={classes.actions}
      >
        <Button
          color="primary"
          onClick={onClick}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

UIUserCard.displayName = _componentDisplayName;

export default UIUserCard;
