import { FC, useState } from 'react';
import styles from './discoverpage.module.scss';
import dynamic from 'next/dynamic';

const ReviewOverlay = dynamic(() => import('@/components/reviewOverlay/reviewOverlay'), { ssr: false });

const DiscoverPage: FC = () => {

  const [openReviewOverlay, setOpenReviewOverlay ] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button className={"button_big"} onClick={() => setOpenReviewOverlay(true)}>
        <span>review something!</span>
      </button>

      {openReviewOverlay && <ReviewOverlay closeOverlay={() => {setOpenReviewOverlay(false)}} />}

    </div>
  );
};

export default DiscoverPage;