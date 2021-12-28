import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const PPS: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pittsburgh Paints &amp; Stains</title>
        <meta name="description" content="Alex Kibler&apos;s Projects" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Pittsburgh Paints &amp; Stains
        </h1>

        <p className={styles.description}>
          sample text
        </p>

      </main>

      <footer className={styles.footer}>
      ©Alex Kibler 2021
      </footer>
    </div>
  )
}

export default PPS
