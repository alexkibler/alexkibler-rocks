import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Kibler Rocks</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the porfolio of Alex Kibler
        </h1>

        <p className={styles.description}>
          Hello! I&apos;m glad you&apos;re here
        </p>

        <div className={styles.grid}>
          <a href="/projects" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Check out my projects!</p>
          </a>

          <a href="/resume" className={styles.card}>
            <h2>Resume &rarr;</h2>
            <p>Check out my resume!</p>
          </a>

          <a
            href="/social"
            className={styles.card}
          >
            <h2>Social &rarr;</h2>
            <p>Follow me on socials!</p>
          </a>

          <a
            href="/test"
            className={styles.card}
          >
            <h2>Fourth card! &rarr;</h2>
            <p>
              Figure out what to use a fourth card for!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      ©Alex Kibler 2021
      </footer>
    </div>
  )
}

export default Home
