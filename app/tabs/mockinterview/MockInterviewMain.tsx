'use client';
import React, { useEffect, useState } from 'react';
import { IonContent, IonItem, IonLabel } from '@ionic/react';
import Layout from '@/components/Layout';
import SolveList from './SolveList';
import { useParams } from 'react-router-dom';
import { getTags } from '@/utils/getTags';
import SolveHeader from './SolveHeader';
import useHideIonTabBar from '@/utils/useHideIonTabBar';

const MockInterviewMain: React.FC = () => {
  const params = useParams<{ pkValue: string }>();
  const { pkValue } = params;
  
  return (
    <Layout>
      <IonContent fullscreen>
        {/* <SolveHeader currentTag={currentTag} setCurrentTag={setCurrentTag} />
        <SolveList query={query} /> */}
      </IonContent>
    </Layout>
  );
};

export default MockInterviewMain;
