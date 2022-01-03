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

        <div className={styles.grid}>
          <Link href="/">
            <a className={styles.card}>
              <h2>&larr; Return home</h2>
            </a>
          </Link>
          <a className={styles.card}>
            <h2>Tech Stack</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>jQuery</li>
                <li>ASP.NET MVC</li>
                <li>Kentico 12 CMS</li>
              </ul>
          </a>
          
          <a className={styles.card}>
            <h2>Project Description</h2>
            <p>Brand marketing site for one of PPG&apos;s paint and stain brands</p>
          </a>

          
          <a className={styles.card}>
            <h2>My Responsibilities</h2>
            <p>Setup environments, generate color images, load initial content, customize components</p>
          </a>
          <div className={styles.imageCard}>
            <Image src="/images/projects/pps/homepage.png" width="300px" height="400px" alt="PP&amp;S Homepage"/>
          </div>




        </div>


      </main>

      <footer className={styles.footer}>
        ©Alex Kibler 2021
      </footer>
    </div>
  )
}

export default PPS
