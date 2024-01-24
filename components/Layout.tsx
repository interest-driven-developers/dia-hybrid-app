import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/react';
import Header from './Header';
const Layout = ({ children }: { children: React.ReactNode }) => (
  <IonPage>
    {/* <IonHeader>
      <IonToolbar>
        <IonTitle>DIA</IonTitle>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonButtons slot="end">
          <IonButton onClick={() => setShowNotifications(true)}>
            <IonIcon icon={notificationsOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader> */}
    <Header session={''} />
    {children}
  </IonPage>
);

export default Layout;
