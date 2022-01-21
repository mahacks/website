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
        destination: '/MAHacks_VI_Sponsorship_Prospectus_20220119.pdf',
        permanent: false,
      },
    ]
  },
})
