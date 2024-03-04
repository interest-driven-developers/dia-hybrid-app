'use client';
import React, { useEffect, useState } from 'react';
import { getQuestionList } from '@/app/api/getQuestionList';
import { IonList } from '@ionic/react';
// import Question from '@/components/Question';
import Question from './components/Question';
import type { Question as QuestionType } from '@/types/Question';
import axios from 'axios';

interface SolveListProps {
  query: string;
}

const SolveList: React.FC<SolveListProps> = ({ query }) => {
  const [questionList, setQuestionList] = useState<QuestionType[]>([]);
  useEffect(() => {
    console.log('여기 안옴?');
    async function fetchQuestionList() {
      const questionList = await axios.get('/api/question/getList/?query=backend');
      setQuestionList(questionList.data as QuestionType[]);
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
