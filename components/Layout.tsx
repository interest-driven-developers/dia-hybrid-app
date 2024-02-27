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
import { hammerOutline, menuOutline } from 'ionicons/icons';
import Logo from '@/ui/Logo';
import Header from './Header';
const Layout = ({ children }: { children: React.ReactNode }) => (
  <IonPage>
    <IonHeader className="ion-no-border pt-3 bg-white" color='none'>
      <IonToolbar className="flex justify-between items-center bg-white py-3" color="none">
        <IonTitle className="text-left px-4 ">
          <Logo className="w-[52px] h-[20px]" />
        </IonTitle>
        {/* <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons> */}
        <IonButtons slot="end" className="-space-x-2 mr-2">
          {/* <IonButton onClick={() => setShowNotifications(true)}>
            <IonIcon icon={notificationsOutline} />
          </IonButton> */}
          {/* 추가된 부분 */}
          {/* <IonButton>
            <IonIcon icon={menuOutline} className="text-[#757575]" />
          </IonButton> */}
          <IonButton>
            <IonIcon icon={menuOutline} className="text-[#757575]" />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    {/* <Header session={''} /> */}
    {children}
  </IonPage>
);

export default Layout;
