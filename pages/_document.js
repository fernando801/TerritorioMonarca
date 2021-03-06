import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700' rel='stylesheet'/>
          <link href='https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400' rel='stylesheet'/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <div id='modal'></div>
      </Html>
    )
  }
}

export default MyDocument
