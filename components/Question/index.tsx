'use client';
import BookMarkIcon from '@/ui/icons/BookMarkIcon';
import BookMarkFillIcon from '@/ui/icons/BookMarkFillIcon'; // Add this import statement
import { addBookmarkQuestion } from '@/app/api/addBookmarkQuestion';
import type { Question as QuestionType } from '@/types/Question';
import type { Session } from '@/types/Session';
import { useRouter } from 'next/navigation';
import { deleteBookmarkQuestion } from '@/app/api/deleteBookmarkQuestion';
import { IonItem, IonLabel } from '@ionic/react';
interface QuestionProps {
  question: QuestionType;
  isBookmarkOn?: boolean;
  session?: Session;
}

export default function Question({ question, isBookmarkOn = true, session }: QuestionProps) {
  // const router = useRouter();
  console.log('question', question);
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
    <div className="flex relative w-full flex-col bg-[#F9F5FF] rounded-[5px] px-4 py-[18px]">
      {isBookmarkOn && (
        <div className="absolute top-[9px] right-[9px] cursor-pointer group">
          {question.bookmark ? (
            <BookMarkFillIcon onClick={() => handleDeleteBookmark()}></BookMarkFillIcon>
          ) : (
            <BookMarkIcon onClick={() => handleAddBookmark()}></BookMarkIcon>
          )}
        </div>
      )}
      <div className='flex flex-col gap-y-[2px] '>
        <p className="text-[#C1ABF1] text-[12px] sm:text-lg font-semibold leading-3">Question</p>
        <p className="text-[#212121] text-[16px] mt-0.5 sm:text-2xl font-bold leading-[19.2px]">
          {question.korTitleValue}
        </p>
      </div>
    </div>
  );
}