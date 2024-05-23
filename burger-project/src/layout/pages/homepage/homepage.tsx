import { FC } from 'react';
import styles from './homepage.module.scss';

interface HomePageProps {
 
}

const HomePage: FC<HomePageProps> = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Opsie! nothing here yet</h1>
      <h4>pst... try discover</h4>
    </div>
  );
};

export default HomePage;