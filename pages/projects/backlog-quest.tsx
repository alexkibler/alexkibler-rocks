import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Project from '../../components/project';
import ImageCard from '../../models/ImageCard'
import styles from '../../styles/Home.module.css'

const BacklogQuest: NextPage = () => {
  const images: ImageCard[] = [{
    path: "/images/projects/bq/home.png",
    title: "Backlog Quest Homepage"
  }, {
      path: "/images/projects/bq/login.png",
      title: 'Backlog Quest Login Page'
  }, {
    path: "/images/projects/bq/games.png",
    title: 'Backlog Quest Games Page'
}, {
    path: "/images/projects/bq/add-game.png",
    title: 'Backlog Quest Add Game Dialog'
}
 ]
  return (
    <Project title={'Backlog Quest'} images={images}>
      <div className={styles.container}>
          <div className={styles.grid}>
            <Link href="/projects">
              <a className={styles.card}>
                <h2>&larr; Back to Projects</h2>
              </a>
            </Link>
            <a className={styles.card}>
              <h2>Tech Stack</h2>
                <ul>
                  <li>NextJS</li>
                  <li>React</li>
                  <li>@mui/material</li>
                  <li>Vercel</li>
                  <li>Prisma</li>
                  <li>Auth0</li>
                </ul>
            </a>
            
            <a className={styles.card}>
              <h2>Project Description</h2>
              <p>Game tracking site for people like me who play way too many games and can&apos;t keep track of them all</p>
            </a>

            
            <a className={styles.card}>
              <h2>My Responsibilities</h2>
              <p>Everything! It&apos;s a solo passion project</p>
            </a>
          </div>
        </div> 
      </Project>

  )
}

export default BacklogQuest
