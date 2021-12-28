import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Kibler&apos;s Projects</title>
        <meta name="description" content="Alex Kibler&apos;s Projects" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Projects
        </h1>

        <p className={styles.description}>
          Here are some things I&apos;ve built
        </p>

        <div className={styles.grid}>
            <Link href="/">
                <a className={styles.card}>
                    <h2>&larr; Return home</h2>
                    <p>A videogame backlog management suite!</p>
                </a>
            </Link>

            <a href="https://backlog.quest" target="_blank" rel="noreferrer" className={styles.card}>
                <h2>Backlog Quest &rarr;</h2>
                <p>A videogame backlog management suite!</p>
            </a>
        </div>
      </main>

      <footer className={styles.footer}>
      ©Alex Kibler 2021
      </footer>
    </div>
  )
}

export default Projects
