import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Kibler Rocks</title>
        <meta name="description" content="Alex Kibler&apos;s portfolio" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the portfolio of Alex Kibler
        </h1>

        <p className={styles.description}>
          Hello! I&apos;m glad you&apos;re here
        </p>
        <Image src="/images/me.png" alt="me, on the right" width={300} height={300}/>

        <div className={styles.grid}>
          <Link href="/projects">
          <a className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Check out my projects!</p>
          </a>
          </Link>

          <a href="https://1drv.ms/w/s!AomV34f1A3yUg_JneczuzsLI6mTJDQ?e=0g57V8" target="_blank" rel="noreferrer" className={styles.card}>
            <h2>Resume &rarr;</h2>
            <p>Check out my resume!</p>
          </a>
          <Link href="/social">
          <a
            className={styles.card}
          >
            <h2>Social &rarr;</h2>
            <p>Follow me on socials!</p>
          </a>
          </Link>

          <div
            className={styles.card}
          >
            <h2>Fourth card! &rarr;</h2>
            <p>
              Figure out what to use a fourth card for!
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
      ©Alex Kibler 2021
      </footer>
    </div>
  )
}

export default Home
