import { NextSeo } from 'next-seo';
import styles from './index.module.css';

export default function Home() {
  return(
          <div className={styles.homeContainer}>
            <NextSeo
              title="Home"
              description="Home page."
            />

            <h2 className={styles.mainHeader}>Software Security Engineer for Qualcomm</h2>
            <h2 className={styles.mainHeader}>Purdue University Alumnus</h2>
          </div>
        );
}
