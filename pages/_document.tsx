// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
            <meta name="keyword" content="portfolio, developer, software engineer, javascript, typescript, react, nextjs, angular, dotnet" />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content="Alex Kibler | Full Stack Web Developer"/>
            <meta property="og:image" content="https://alexkibler.rocks/images/me.png"/>
            <meta property="og:url" content="https://alexkibler.rocks" />
            <meta property="og:type" content="website" />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Alex Kibler | Full Stack Web Developer" />
            <meta name="twitter:image" content="https://alexkibler.rocks/images/me.png"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument