import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return(
          <div>
            <a href="https://www.linkedin.com/cohenchristopher">LinkedIn</a>
            <a href="https://github.com/cohenchris">GitHub</a>
            <h1>© 2019-{currentYear} Chris Cohen</h1>
          </div>
        )
}
