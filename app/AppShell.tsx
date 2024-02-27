'use client';

import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Tabs from './tabs';
import Header from './header/Header';
import AuthSession from './api/auth/AuthSession';

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
    // <AuthSession>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet id="main">
            {children}
            <Route path="/tabs" render={() => <Tabs />} />
            <Route path="/" render={() => <Redirect to="/tabs/home" />} exact={true} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    // </AuthSession>
  );
};

export default AppShell;
