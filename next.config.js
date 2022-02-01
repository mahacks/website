const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/prospectus',
        destination: '/MAHacks_VI_Sponsorship_Prospectus_20220122.pdf',
        permanent: false,
      }, {
        source: '/poster',
        destination: '/MAHacks_VI_Attendee_Poster_20220123_1.pdf',
        permanent: false,
      }, {
        source: '/about',
        destination: '/#how-it-works',
        permanent: true,
      }, {
        source: '/past-events',
        destination: '/#previous',
        permanent: true,
      }, {
        source: '/sponsor',
        destination: '/#sponsors',
        permanent: true,
      }, {
        source: '/subscribe',
        destination: '/register',
        permanent: false,
      }, {
        source: '/join',
        destination: '/register',
        permanent: true,
      },
    ]
  },
})
