import Head from 'next/head'

const name = 'MAHacks'
const url = 'https://mahacks.com'

const Meta: React.FC<{
  title?: string
  description?: string
  image?: string
}> = ({
  title: pageTitle,
  description = 'High schoolers: learn to code and meet new friends with 24 hours of learning, hacking, free food and prizes.',
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
      {/* <meta key="theme_color" name="theme-color" content={theme.colors.primary} /> */}
      {/* <meta
      key="tile_color"
      name="msapplication-TileColor"
      content={theme.colors.primary}
    />
    <link
      key="safari_icon"
      rel="mask-icon"
      href={`${url}/safari-pinned-tab.png`}
      color={theme.colors.primary}
    /> */}
      {/* <link
      key="apple_icon"
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${url}/apple-touch-icon.png`}
    />
    <link
      key="favicon_32"
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={`${url}/favicon-32x32.png`}
    />
    <link
      key="favicon_16"
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={`${url}/favicon-16x16.png`}
    />
    <link key="manifest" rel="manifest" href={`${url}/site.webmanifest`} /> */}
      {children}
    </Head>
  )
}

export default Meta
