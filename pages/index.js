import Head from 'next/head'
import styles from '../styles/Home.module.css'

//components
import Sidebar from '../components/Sidebar'
import MainFeed from '../components/MainFeed'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>fublot.</title>
        <meta name="description" content="A Daily Dump Of Articles On Technology." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Sidebar />
        <MainFeed />
      </main>
    </div>
  )
}
