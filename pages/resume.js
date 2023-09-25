import { NextSeo } from 'next-seo';
import Image from "next/image";
import styles from './resume.module.css';
import { Document } from "react-pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function Resume() {
  return(
          <div className={styles.resume}>

            <NextSeo
              title="Resume"
              description="My resume."
            />

            <img
              src="https://raw.githubusercontent.com/cohenchris/resume/master/ChrisCohen_resume.png"
              alt="My resume"
              height={1500}
              width="auto"
            />

          </div>
        )
}
