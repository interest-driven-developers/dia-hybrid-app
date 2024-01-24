'use client';

import { IonApp, IonRouterOutlet, setupIonicReact, IonHeader, IonToolbar, IonTitle} from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Tabs from './tabs';
import Header from './header/Header';

setupIonicReact({});

window.matchMedia('(prefers-color-scheme: dark)').addListener(async status => {
  try {
    await StatusBar.setStyle({
      style: status.matches ? Style.Dark : Style.Light,
    });
  } catch {}
});

const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          {children}
          <Route path="/tabs" render={() => <Tabs />} />
          <Route path="/" render={() => <Redirect to="/tabs/home" />} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
