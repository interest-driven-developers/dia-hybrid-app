'use client';

import Card from '../../components/Card';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
} from '@ionic/react';
import Notifications from '../../components/Notifications';
import { useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import { getHomeItems } from '@/store/selectors';
import Store from '@/store';
import { HomeItem } from '@/mock';
import Layout from '@/components/Layout';
import Intro from '@/components/Intro';


const Home = () => {
  const homeItems = Store.useState(getHomeItems) as HomeItem[];
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <Layout>
      <IonContent className="ion-padding" fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Feed</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <div className="mt-12 flex flex-col justify-center mx-auto items-center w-full gap-10">
          <Notifications
            open={showNotifications}
            onDidDismiss={() => setShowNotifications(false)}
          />
          <Intro />
        </div>
      </IonContent>
    </Layout>
  );
};

export default Home;
