import Layout from '@/components/Layout'
import '../styles/globals.scss'
import '../styles/styles.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
