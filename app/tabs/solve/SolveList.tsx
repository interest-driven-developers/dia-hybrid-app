import React, { useEffect, useState } from 'react';
import { getQuestionList } from '@/app/api/getQuestionList';
import { IonList } from '@ionic/react';
// import Question from '@/components/Question';
import Question from './components/Question';
import type { Question as QuestionType  } from '@/types/Question';

interface SolveListProps {
    query: string;
}

const SolveList: React.FC<SolveListProps> = ({query}) => {
  const [questionList, setQuestionList] = useState([]);
  useEffect(() => {
    async function fetchQuestionList() {
      const questionList = await getQuestionList(query);
        setQuestionList(questionList);
        console.log('query,list', query, questionList)
    }
    fetchQuestionList();
  }, [query]);
  return (
    <div className="flex flex-col gap-y-3">
      {questionList.map((question: QuestionType, i) => (
        <Question id={question.pkValue} title={question.korTitleValue} key={i} />
      ))}
    </div>
  );
};

export default SolveList;