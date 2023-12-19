"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import HistoryList from "../../../components/HistoryList";
import { PencilIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import Script from "next/script";
import ScriptDisplay from "@/app/solve/[id]/components/ScriptDisplay";
import MockTest from "../MockTest";
import QuestionInfo from "../QuestionInfo";
import { Question } from "@/types/Question";
import { VoiceType } from "@/types/Voice";
interface MainContainerProps {
  question: any;
  voices: VoiceType[];
}
export default function MainContainer({
  question,
  voices,
}: MainContainerProps) {
  const [isView, setIsView] = useState<number | null>(null); // 0: 히스토리 보기, 1: 스크립트 보기
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const ViewComponent = () => {
    switch (isView) {
      case 0:
        <QuestionInfo
          historyList={[]}
          pk={question.pk}
          setTestStart={setIsView}
        ></QuestionInfo>;
      case 1:
        return <MockTest pk={question.pk} voices={voices}></MockTest>;
      default:
        return (
          <QuestionInfo
            historyList={[]}
            pk={question.pk}
            setTestStart={setIsView}
          ></QuestionInfo>
        );
    }
  };
  return (
    <>
      <h1 className="text-3xl font-sans mt-5 text-gray-500">
        {question.title}
      </h1>
      <ViewComponent></ViewComponent>
    </>
  );
}
