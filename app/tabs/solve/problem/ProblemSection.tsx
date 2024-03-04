import React, { useEffect, useState } from 'react';

import { IonIcon } from '@ionic/react';
import { useHistory } from 'react-router';
import { chevronBackOutline, shareSocial } from 'ionicons/icons';
import copyToClipboard from '@/utils/copyToClipBoard';
import Question from '@/components/Question';
import { Question as QuestionType } from '@/types/Question';
import ScriptSection from '@/components/ScriptSection';
import Button from '@/components/Button';
import { Session } from '@/types/Session';
import { getQuestionDetails } from '@/app/api/getQuestionDetails';
import { QuestionSkeleton } from '@/ui/skeleton/QuestionSkeleton';

interface Props {
  pk: string;
  handleClick: () => void;
  session: Session;
}

const ProblemSection: React.FC<Props> = ({ pk, handleClick, session }) => {
  const [question, setQuestion] = useState<QuestionType>();
  useEffect(() => {
    async function fetchQuestionDetails() {
      try {
        const questionDetails = await getQuestionDetails({
          id: pk,
          accessToken: session.user.access_token,
        });
        setQuestion(questionDetails.data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchQuestionDetails();
  }, [pk, session]);
  return (
    <div className="flex flex-col gap-y-3 mb-4 h-5/6 px-4">
      {question ? (
        <Question
          question={question}
          session={session}
          isBookmarkOn={session ? true : false}
        ></Question>
      ) : (
        <QuestionSkeleton></QuestionSkeleton>
      )}
      <ScriptSection id={pk} className="h-full mb-2"></ScriptSection>
      <Button onClick={handleClick}>개별 모의연습</Button>
    </div>
  );
};

export default ProblemSection;
