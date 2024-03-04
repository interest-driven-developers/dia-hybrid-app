'use client';
import BookMarkIcon from '@/ui/icons/BookMarkIcon';
import BookMarkFillIcon from '@/ui/icons/BookMarkFillIcon'; // Add this import statement
import { addBookmarkQuestion } from '@/app/api/addBookmarkQuestion';
import type { Question as QuestionType } from '@/types/Question';
import type { Session } from '@/types/Session';
import { useRouter } from 'next/navigation';
import { deleteBookmarkQuestion } from '@/app/api/deleteBookmarkQuestion';
import { IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router';

interface QuestionProps {
  question: QuestionType;
  isBookmarkOn?: boolean;
  session?: Session;
  isDetail?: boolean;
}

export default function Question({
  question,
  isBookmarkOn = true,
  session,
  isDetail = false,
}: QuestionProps) {
  const history = useHistory();

  const handleAddBookmark = async () => {
    await addBookmarkQuestion({
      pkValue: question.pkValue,
      accessToken: session?.user.access_token as string,
    });
    // router.refresh();
  };
  const handleDeleteBookmark = async () => {
    await deleteBookmarkQuestion({
      pkValue: question.pkValue,
      accessToken: session?.user.access_token as string,
    });
    // router.refresh();
  };
  return (
    <div
      className="flex relative w-full flex-col bg-[#F9F5FF] rounded-[5px] px-4 py-[18px]"
      onClick={() => history.push(`/tabs/solve/problem/${question.pkValue}`)}
    >
      {isBookmarkOn && (
        <div className="absolute top-[9px] right-[9px] cursor-pointer group">
          {question.bookmark ? (
            <BookMarkFillIcon onClick={() => handleDeleteBookmark()}></BookMarkFillIcon>
          ) : (
            <BookMarkIcon onClick={() => handleAddBookmark()}></BookMarkIcon>
          )}
        </div>
      )}
      <div className="flex flex-col gap-y-[2px] ">
        <p className="text-[#C1ABF1] text-[12px] sm:text-lg font-semibold leading-3">Question</p>
        <p className="text-[#212121] text-[16px] mt-0.5 sm:text-2xl font-bold leading-[19.2px]">
          {question.korTitleValue}
        </p>
      </div>
      {isDetail && (
        <>
          <p className="text-[#757575] text-[12px] sm:text-lg font-semibold leading-[14.4px] mt-4">
            🛎️ <span className="text-primary-600">{Math.floor(Math.random() * 2000) + 1}</span>번
            도전하고 있습니다
          </p>
          <div className="absolute bottom-[18px] right-[16px] mt-2 bg-white rounded-[100px] px-[10px] py-[3px]">
            <p className="text-[#757575] text-[10px] leading-[10px] font-semibold">
              <span className="text-primary-600 text-[8px] leading-[9.6px] mr-[1px]">
                평균 응답시간
              </span>{' '}
              05:00
            </p>
          </div>
        </>
      )}
    </div>
  );
}
