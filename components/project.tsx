import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import ImageCard from '../models/ImageCard';

export default function Project(props: ProjectProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.title} />
      </Head>


      <main className={styles.main}>
        <h1 className={styles.title}>
          {props.title}
        </h1>
        <>{props.children}</>
        <div className={styles.grid}>
          {props.images.map(image => (
            <div className={styles.imageCard} key={image.title}>
              <Image src={image.path} blurDataURL={image.path} width="600px" height="400px" alt={image.title} placeholder="blur"/>
            </div>
          ))}
        </div>
      </main>


      <footer className={styles.footer}>
        ©Alex Kibler 2021
      </footer>

    </div>
  )
}
interface ProjectProps {
  title: string,
  images: ImageCard[];
  children: React.ReactNode;
}

