// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <meta name="keyword" content="portfolio, developer, software engineer, javascript, typescript, react, nextjs, angular, dotnet" />
            <meta property="og:title" content="Alex Kibler | Full Stack Web Developer"/>
            <meta property="og:image" content="https://alexkibler.rocks/images/me.png"/>
            <meta property="og:url" content="https://alexkibler.rocks" />
            <meta property="og:type" content="website" />
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