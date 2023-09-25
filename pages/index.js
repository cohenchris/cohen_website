import Layout from "../components/layout"

export default function Home() {
  return(
          <Layout>
            <div className="background">
              <div className="home">
                <div className="cover">
                  <img src="/images/cover.png" alt="" />
                </div>

                <br />
                <br />
                  <div>
                    <h2>Software Engineer for Qualcomm</h2>
                    <h2>Purdue University Alumnus</h2>
                  </div>
              </div>
            </div>
          </Layout>
  );
}
