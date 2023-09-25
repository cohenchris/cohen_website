import Header from "../components/layout/header"
import Navbar from "../components/layout/navbar"
import Footer from "../components/layout/footer"
import '../styles/global.css';

export default function Website({ Component, pageProps }) {
  return(
          <div>
            <Header/>
              <Navbar />
                <main>
                  <Component {...pageProps} />
                </main>
            <Footer />
          </div>
        )
}

