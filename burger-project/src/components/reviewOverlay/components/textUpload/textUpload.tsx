import { FC, useState, ChangeEvent } from 'react';
import styles from './textUpload.module.scss';
import TextUploadProps from './textUpload.interface';

const TextUpload: FC<TextUploadProps> = (props) => {
  const [comment, setComment] = useState('');

  const { completeReview, placeholder } = props;

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newComment = event.target.value;
    setComment(newComment);
  };

  return (
    <div className={styles.container}>
      <div className={styles.button_wrapper}>
        <button className={"button_big"} onClick={() => completeReview({ other: comment })}>
          <span>Complete</span>
        </button>
      </div>
      <textarea
        placeholder={placeholder}
        value={comment}
        onChange={handleCommentChange}
        className={styles.comment}
      />
    </div>
  );
};

export default TextUpload;