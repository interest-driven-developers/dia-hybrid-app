'use Client';
import mapTagToPurpose from '@/utils/mapTagToPurpose';
import { IonItem } from '@ionic/react';
type TagProps = {
  children?: React.ReactNode;
  selected: string;
  setTag: (tag: string) => void;
};
import { useMemo } from 'react';

export default function Tag(props: TagProps) {
  const selectedCategory = props.selected.toLowerCase();
  const categoryValues = useMemo(() => {
    switch (selectedCategory) {
      case 'backend':
        return '백엔드';
      case 'frontend':
        return '프론트엔드';
      case 'ios':
        return 'IOS';
      case 'aos':
        return 'AOS';
      default:
        return '';
    }
  }, [selectedCategory]);

  const tagStyle = useMemo(() => {
    if (categoryValues === props.children) {
      return 'bg-primary';
    } else {
      return 'bg-white border border-[#7C4DFF] border-solid hover:bg-primary ';
    }
  }, [categoryValues, props.children]);

  const tagNameStyle = useMemo(() => {
    if (categoryValues === props.children) {
      return 'text-white';
    } else {
      return 'text-primary hover:text-white';
    }
  }, [categoryValues, props.children]);

const handleTagClick = () => {
  if (props.children === props.selected) return null;
  props.setTag(props.children as string);
};
  return (
    <div
      className={`flex items-center rounded-[5px] py-2 px-[25px] ${tagStyle}`}
      onClick={handleTagClick}
      // lines="none"
      // color="none"
      // detail={false}
    >
      <h1 className={`text-xs text-center font-semibold whitespace-nowrap ${tagNameStyle}`}>
        {props.children}
      </h1>
    </div>
  );
}
