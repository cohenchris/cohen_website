import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
 
export default function Website({ Component, pageProps }) {
  return(
          <>
            <Header/>
              <Navbar />
                <main>
                  <Component {...pageProps} />
                </main>
              <Footer />
          </>
        )
}

