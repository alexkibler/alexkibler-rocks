import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Social: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Alex Kibler&apos;s Socials</title>
                <meta name="description" content="Alex Kibler&apos;s Socials" />
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
                        </a>
                    </Link>

                    <a href="https://github.com/alexkibler" target="_blank" rel="noreferrer" className={styles.card}>
                        <h2>Github &rarr;</h2>
                        <p>The place where my code lives!</p>
                    </a>

                    <a href="https://twitter.com/kiddblur" target="_blank" rel="noreferrer" className={styles.card}>
                        <h2>Twitter &rarr;</h2>
                        <p>The place where my snark lives!</p>
                    </a>

                    <a href="https://twitch.tv/kiddblur" target="_blank" rel="noreferrer" className={styles.card}>
                        <h2>Twitch &rarr;</h2>
                        <p>The place where I occasionally stream videogames!</p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                ©Alex Kibler 2021
            </footer>
        </div>
    )
}

export default Social
