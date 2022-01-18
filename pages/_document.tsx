import Document, { Html, Head, Main, NextScript } from 'next/document'

const googleFontFamilies: string[] = [
  'DM+Sans:ital,wght@0,400;0,500;0,700;1,400',
  'Outfit:wght@400;600;700;800',
  'Inter:wght@300;400;600;700;800',
]

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href={`https://fonts.googleapis.com/css2?${googleFontFamilies
              .map((f) => `family=${f}&`)
              .join('')}display=swap`}
            rel="stylesheet"
          />
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
