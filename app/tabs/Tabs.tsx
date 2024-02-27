'use client';

import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import {  cog, flash, home, homeOutline, homeSharp, list, rocketOutline, timeOutline,bookOutline } from 'ionicons/icons';
import Home from './Home';
import Lists from './Lists';
import ListDetail from '../../components/ListDetail';
import Settings from './Settings';
import SolveMain from './solve/SolveMain';
// import HomeIcon from '@/ui/icons/HomeIcon';
const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/home" render={() => <Home />} exact={true} />
        <Route path="/tabs/solve/:query" render={() => <SolveMain />} exact={true} />
        {/* <Route path="/tabs/solve/:listId" render={() => <ListDetail />} exact={true} /> */}
        <Route path="/tabs/history" render={() => <Settings />} exact={true} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/home" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" className="py-3 px-2">
        <IonTabButton tab="tab1" href="/tabs/home">
          <IonIcon icon={homeOutline} />
          {/* <IonIcon src={HomeIcon} /> */}
          <IonLabel>홈</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/solve/backend">
          <IonIcon icon={bookOutline} />
          <IonLabel>문제풀기</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/history">
          <IonIcon icon={timeOutline} />
          <IonLabel>히스토리</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;

