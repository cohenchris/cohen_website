import Link from "next/link"
import styles from './layout.module.css';

export default function Header() {
  return(
          <div className={styles.navbar}>
            <Link className={styles.brand} href="/">Chris Cohen</Link>
            <Link className={styles.navbarlink} href="/">Home</Link>
            <Link className={styles.navbarlink} href="/resume">Resume</Link>
            <Link className={styles.navbarlink} href="/projects">Projects</Link>
            <Link className={styles.navbarlink} href="/music">Music</Link>
            <Link className={styles.navbarlink} href="/about">About</Link>
          </div>
        );
}
