'use client';

import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { cog, flash, home, homeOutline, homeSharp, list, rocketOutline } from 'ionicons/icons';
import Home from './Home';
import Lists from './Lists';
import ListDetail from '../../components/ListDetail';
import Settings from './Settings';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/home" render={() => <Home />} exact={true} />
        <Route path="/tabs/lists" render={() => <Lists />} exact={true} />
        <Route path="/tabs/lists/:listId" render={() => <ListDetail />} exact={true} />
        <Route path="/tabs/settings" render={() => <Settings />} exact={true} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/home" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>홈</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/lists">
          <IonIcon icon={rocketOutline} />
          <IonLabel>문제 풀기</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/settings">
          <IonIcon icon={cog} />
          <IonLabel>Settings!</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
