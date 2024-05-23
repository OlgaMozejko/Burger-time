import  { FC, useState } from 'react';
import TagChoicesProps from './tagChoices.interface';
import styles from './tagChoices.module.scss';
import { mockTags } from '@/store/data/mockupData';
import combineClasses from '@/helpers/combineClasses';

const TagChoices: FC<TagChoicesProps> = (props) => {

  const { handleNextStep } = props;

  //get tags from store

  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [wasClicked, setWasClicked] = useState(false);

  const handleTagClick = (tag: string) => {
    if(selectedTags.includes(tag)){
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }

  };

  return (
    <div className={styles.container}>
      <div className={styles.button_wrapper}>
        <button className={"button_big"} 
        onClick={() => {
          handleNextStep({ tags: selectedTags });
          setWasClicked(true)}} 
          disabled={!selectedTags || selectedTags.length === 0 || wasClicked}>
          <span>Next</span>
        </button>
      </div>
      <div className={styles.tag_wrapper}>
      {mockTags.map(tag => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={combineClasses(styles.tag, selectedTags.includes(tag) ? styles.selected : '')}
        >
          <span>{tag}</span>
        </button>
      ))}
    </div></div>
  );
};

export default TagChoices;