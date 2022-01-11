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
    path: "/images/projects/cdp/products.png",
    title: "CDP Products List"
  }, {
    path: "/images/projects/cdp/product-modal.png",
    title: "CDP Products Modal"
  },{
    path: "/images/projects/cdp/confirmation.png",
    title: "CDP Confirmation"
  },{
    path: "/images/projects/cdp/basket.png",
    title: "CDP Basket"
  },{
    path: "/images/projects/cdp/checkout.png",
    title: "CDP Checkout"
  },{
    path: "/images/projects/cdp/orders.png",
    title: "CDP Orders"
  },{
    path: "/images/projects/cdp/order.png",
    title: "CDP Order"
  },{
    path: "/images/projects/cdp/customers.png",
    title: "CDP Customers"
  }
 ]
  return (
    <Project title={'PPG Pro Online Ordering'} images={images}>
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
                  <li>PPG Primer Design System</li>
                  <li>GraphQL</li>
                  <li>.NET 5 API Microservices</li>
                  <li>Azure B2C</li>
                </ul>
            </a>
            
            <a className={styles.card}>
              <h2>Project Description</h2>
              <p>Global eCommerce site to allow PPG to sell all sorts of products all over the world</p>
            </a>

            
            <a className={styles.card}>
              <h2>My Responsibilities</h2>
              <p>Led a team of primarily frontend developers to build the entire frontend for the customer journey from browsing products through checkout</p>
            </a>
          </div>
        </div> 
      </Project>

  )
}

export default CDP
