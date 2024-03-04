import { IonIcon } from '@ionic/react';
import { useHistory } from 'react-router';
import { chevronBackOutline, shareSocial } from 'ionicons/icons';
import copyToClipboard from '@/utils/copyToClipBoard';

interface Props {}

const ProblemHeader: React.FC<Props> = ({}) => {
  const history = useHistory();

  return (
    <div className="flex items-center justify-center mb-[32px] px-4">
      <div onClick={() => history.goBack()}>
        <IonIcon
          icon={chevronBackOutline}
          className="h-5 w-5 text-black cursor-pointer rounded-md hover:opacity-50"
        />
      </div>
      <h1 className="flex mt-1 text-lg items-center justify-center leading-[21.6px] sm:text-xl font-bold text-center text-primary flex-grow">
        스크립트 작성
      </h1>
      <div className="mr-1" onClick={() => copyToClipboard()}>
        {/* <ShareIcon /> */}
        <IonIcon
          icon={shareSocial}
          className="h-5 w-5 text-primary"
        />
      </div>
    </div>
  );
};

export default ProblemHeader;
