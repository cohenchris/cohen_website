import Head from 'next/head';

export default function Header() {
  return(
          <Head>
            {/* Standard favicon for browsers */}
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />

            {/* Apple Touch Icon for Apple devices */}
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/images/icons/apple-touch-icon-180x180.png"
            />

            {/* Android Chrome Icons for Android devices */}
            <link
              rel="icon"
              type="image/png"
              sizes="192x192"
              href="/images/icons/android-chrome-192x192.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="512x512"
              href="/images/icons/android-chrome-512x512.png"
            />
          </Head>
        );
}
