'use client';
import React, { useEffect, useState } from 'react';
import { IonContent, IonItem, IonLabel } from '@ionic/react';
import Layout from '@/components/Layout';
// import SolveList from './SolveList';
import { useParams } from 'react-router-dom';
import { getTags } from '@/utils/getTags';
import ProblemHeader from './ProblemHeader';
import { useHistory } from 'react-router-dom';
import { getQuestionDetails } from '@/app/api/getQuestionDetails';
import { useSession } from 'next-auth/react';
import type { Session } from '@/types/Session';
import type { Question } from '@/types/Question';
import ProblemSection from './ProblemSection';

const ProblemMain: React.FC = () => {
  const history = useHistory();
  const { data: session } = useSession();
  const params = useParams<{ pk: string }>();
  const { pk } = params;
  const typedSession = session as Session;
  console.log('pk', pk, typedSession);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState<string>('');
  const solveQuestion = () => {
    history.push(`/mockinterview/${pk}`);
  };
  const hideMenu = async () => {
    setAnimationClass('animate-fadeOutDown');
    await new Promise(r => setTimeout(r, 600));
    setIsModalOpen(false);
  };
  const handleClick = () => {
    if (isModalOpen) {
      hideMenu();
    } else {
      setAnimationClass('animate-fadeInUp');
      setIsModalOpen(true);
    }
  };

  return (
    <Layout>
      <IonContent className="h-screen">
        <ProblemHeader />
        {session && <ProblemSection pk={pk} handleClick={handleClick} session={typedSession} />}
      </IonContent>
    </Layout>
  );
};

export default ProblemMain;
