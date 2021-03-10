import { Grid } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import StorePageHome from '../../../store/pages/home';
import UIPageWidthContainer from '../../ui/UIPageWidthContainer';
import UserCard from '../../user/UserCard';
import UsersFilter from './filter/UsersFilter';
import UserInfoDialog from './infoDialog/UserInfoDialog';

interface PageHomeProps {
  store: StorePageHome;
}

const PageHome = observer((props: PageHomeProps) => {
  const { store } = props;
  const { randomUsers } = store;

  useEffect(() => {
    store.scrollHandler.attach();
    return () => {
      store.scrollHandler.detach();
  }
  }, []);

  randomUsers.initialLoad();

  // if (!randomUsers.count) {
  //   randomUsers.load();
  // }

  return (
    <UIPageWidthContainer
      useGutterTop={true}
    >
      <>
      <UsersFilter />
      <Grid
        container={true}
        spacing={2}
      >
        {randomUsers.models.map((user) => (
          <Grid
            key={user.id}
            item={true}
            xs={12}
            sm={4}
          >
            <UserCard
              user={user}
              onActionClick={store.showRandomUserFullInfo}
            />
          </Grid>
        ))}
      </Grid>
      <UserInfoDialog
        open={store.randomUserInfoDialog.visible}
        user={store.randomUserInfoDialog.randomUser}
        onClose={store.randomUserInfoDialog.hide}
      />
      </>
    </UIPageWidthContainer>
  )
})

export default PageHome;