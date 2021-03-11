import React from 'react'
import UILink from "@UI/UILink";
import { ReactNode } from "react";
import { useLocation, useRouteMatch } from "react-router-dom";
import UIGlobalMenuItem from '@UI/layout/UIGlobalMenuItem';

const _componentDisplayName = 'AppMenuItem';

export interface AppMenuItemProps {
  to: string;
  children: ReactNode;
}

const AppMenuItem = (props: AppMenuItemProps) => {
  const { to, children } = props;
  const location = useLocation();
  return (
    <UIGlobalMenuItem
      to={to}
      isActive={location.pathname === to}
    >
      {children}
    </UIGlobalMenuItem>
  );
};

AppMenuItem.displayName = _componentDisplayName;

export default AppMenuItem;
