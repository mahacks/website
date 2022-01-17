import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import '../styles/nprogress.css'
import '../styles/globals.css'
import '../styles/fonts.css'
import { ParallaxProvider } from 'react-scroll-parallax'

NProgress.configure({
  minimum: 0.4,
  showSpinner: false,
})

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </div>
  )
}
export default MyApp
