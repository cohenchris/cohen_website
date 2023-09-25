import Image from "next/image"
import { NextSeo } from 'next-seo';

export default function Home() {
  return(
          <>
            <NextSeo
              title="Home"
              description="Home page."
            />

            <Image
              src="/images/cover.png"
              alt=""
              height={1000}
              width={1000}
            />
            <h2>Software Engineer for Qualcomm</h2>
            <h2>Purdue University Alumnus</h2>
          </>
  );
}
