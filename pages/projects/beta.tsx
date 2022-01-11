import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Project from '../../components/project';
import ImageCard from '../../models/ImageCard'
import styles from '../../styles/Home.module.css'

const CDP: NextPage = () => {
  const images: ImageCard[] = [{
    path: "/images/projects/beta/login.png",
    title: "ProSight Login"
  }, {
    path: "/images/projects/beta/dashboard.png",
    title: "ProSight Dashboard"
  },{
    path: "/images/projects/beta/shop.png",
    title: "ProSight Shop Page"
  },{
    path: "/images/projects/beta/product-filters.png",
    title: "ProSight Product Filters"
  },{
    path: "/images/projects/beta/product-modal.png",
    title: "ProSight Product Modal"
  },{
    path: "/images/projects/beta/basket.png",
    title: "ProSight Basket"
  },
 ]
  return (
    <Project title={'PPG ProSight'} images={images}>
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
                  <li>Angular</li>
                  <li>Angular Material (Heavily modified)</li>
                  <li>.NET 5 WebApi</li>
                  <li>Entity Framework Core</li>
                  <li>Identity Server Core</li>
                </ul>
            </a>
            
            <a className={styles.card}>
              <h2>Project Description</h2>
              <p>MVP e-Commerce site to enable PPG to sell paint online during the early days of the pandemic</p>
            </a>

            
            <a className={styles.card}>
              <h2>My Responsibilities</h2>
              <p>Everything! Interview customers, architect application, build every layer (frontend, backend, database, devops), mentor junior developer(s), load data</p>
            </a>
          </div>
        </div> 
      </Project>

  )
}

export default CDP
