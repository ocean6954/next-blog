import type { AppProps } from 'next/app'
import Layout from 'components/layouts'
import 'styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </>
  )
}
