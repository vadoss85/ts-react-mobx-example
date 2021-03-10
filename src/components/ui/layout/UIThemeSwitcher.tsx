import { makeStyles, Switch, Theme, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { StyledComponent } from 'configure/theme';
import React, { useCallback } from 'react'
import { AppThemes } from 'store/AppTheme';

const _componentDisplayName = 'UIThemeSwitcher';

const useStyles = makeStyles((theme: Theme) =>({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    marginRight: theme.spacing() * 2,
  },
  label: {
    cursor: 'pointer',
  },
  inactiveLabel: {
    cursor: 'default',
    pointerEvents: 'none',
    fontWeight: theme.typography.fontWeightBold,
  }
}), {name: _componentDisplayName});

export interface UIThemeSwitcherProps extends StyledComponent<typeof useStyles> {
  theme: AppThemes;
  onThemeSwitch: () => void
}

const UIThemeSwitcher = (props: UIThemeSwitcherProps) => {
  const classes = useStyles(props);
  const { theme, onThemeSwitch } = props;

  const onChange = useCallback(
    () => {
      onThemeSwitch();
    },
    [],
  )

  const onLabelClick = useCallback(
    () => {
      onThemeSwitch();
    },
    [],
  )

  return (
    <div
      className={classes.root}
    >
      <Typography className={classes.text}>Theme: </Typography>
      <Typography
        className={clsx(
          classes.label,
          {
            [classes.inactiveLabel]: theme === 'default',
          }
        )}
        onClick={onLabelClick}
      >
        Default
      </Typography>
      <Switch
        value={theme}
        checked={theme == 'dark'}
        onChange={onChange}
      />
      <Typography
        className={clsx(
          classes.label,
          {
            [classes.inactiveLabel]: theme === 'dark',
          }
        )}
        onClick={onLabelClick}
      >
        Dark
      </Typography>
    </div>
  );
};

UIThemeSwitcher.displayName = _componentDisplayName;

export default UIThemeSwitcher;
