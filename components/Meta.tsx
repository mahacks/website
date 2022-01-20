import Head from 'next/head'

const name = 'MAHacks'
const url = 'https://mahacks.com'

const Meta: React.FC<{
  title?: string
  description?: string
  image?: string
}> = ({
  title: pageTitle,
  description = 'Learn to code, hone your skills, build something new, and make new friends with free food and prizes over 24 hours! MAHacks VI is a 24-hour high school hackathon for students of all skill sets and experience. Come join us for a weekend of fun!',
  image = url + '/img/og/simple.png',
  children,
}) => {
  const title = pageTitle ? `${pageTitle} | ${name}` : name

  return (
    <Head>
      <meta key="og_locale" property="og:locale" content="en_US" />
      <meta key="og_type" property="og:type" content="website" />
      <meta key="og_site" property="og:site_name" content={name} />
      <title key="title">{title}</title>
      <meta key="og_title" property="og:title" content={title} />
      <meta key="tw_title" name="twitter:title" content={title} />
      {description && (
        <>
          <meta key="desc" name="description" content={description} />
          <meta key="og_desc" property="og:description" content={description} />
          <meta
            key="tw_desc"
            name="twitter:description"
            content={description}
          />
        </>
      )}
      {image && (
        <>
          <meta key="og_img" property="og:image" content={image} />
          <meta
            key="tw_card"
            name="twitter:card"
            content="summary_large_image"
          />
          <meta key="tw_img" name="twitter:image" content={image} />
        </>
      )}

      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000000" />

      {children}
    </Head>
  )
}

export default Meta
