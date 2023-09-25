import Header from "../components/layout/header"
import Navbar from "../components/layout/navbar"
import Footer from "../components/layout/footer"
import '../styles/global.css';
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'

export default function Website({ Component, pageProps }) {
  return(
          <div>
            <Theme>
              <Header/>
                <Navbar />
                  <main>
                    <Component {...pageProps} />
                  </main>
              <Footer />
            </Theme>
          </div>
        )
}

