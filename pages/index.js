import { NextSeo } from 'next-seo';
import styles from './index.module.css';
import React, { useEffect, useState } from 'react';

export default function Home() {
  return(
          <div>
            <NextSeo
              title="Home"
              description="Home page."
            />
            <div className={styles.mainHeader}>

              <h1 className={styles.jobTitle}>
                Software Security Engineer for Qualcomm
              </h1>

              <h1 className={styles.alumnus}>
                Purdue University Alumnus
              </h1>

            </div>
          </div>
        );
}
