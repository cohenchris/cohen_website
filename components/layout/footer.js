import Link from "next/link"
import styles from './layout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return(
          <div className={styles.foot}>

            <Link className={styles.footerlink} href="https://www.linkedin.com/cohenchristopher">
              <FontAwesomeIcon icon={faLinkedin}/>
            </Link>

            <Link className={styles.footerlink} href="https://github.com/cohenchris">
              <FontAwesomeIcon icon={faGithub}/>
            </Link>

            <div className={styles.footercopyright}>© 2019-{currentYear} Chris Cohen</div>
          </div>
        )
}
