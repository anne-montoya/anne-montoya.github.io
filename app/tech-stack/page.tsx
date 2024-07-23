import Image from 'next/image'
import styles from '../styles.module.css'

export default function Page() {
    return <div className={styles.tech_stack_div}>
       <h1 className={styles.page_name}>Tech Stack</h1>

        <div className={styles.main_group}>
            <Image
                className={styles.logos}
                src='../tech/nodejs.png'
                alt='nodejs'
                width={190}
                height={50}
            />
            <Image
                className={styles.logos}
                src='../tech/typescript.png'
                alt='typescript'
                width={180}
                height={100}
            />
            <Image
                className={styles.logos}
                src='../tech/javascript.png'
                alt='javascript'
                width={100}
                height={100}
            />
        </div>
        <div className={styles.tech_group}>
            <Image
                className={styles.logos}
                src='../tech/aws.png'
                alt='aws'
                width={180}
                height={100}
            />
            <Image
                className={styles.logos}
                src='../tech/docker.png'
                alt='docker'
                width={420}
                height={100}
            />
            <Image
                className={styles.logos}
                src='../tech/java.png'
                alt='java'
                width={180}
                height={100}
            />
        </div>

        <div className={styles.tech_group}>
            <Image
                className={styles.logos}
                src='../tech/redis.png'
                alt='redis'
                width={225}
                height={150}
            />

            <Image
                className={styles.logos}
                src='../tech/mongodb.png'
                alt='mongodb'
                width={150}
                height={150}
            />
            <Image
                className={styles.logos}
                src='../tech/postgres.png'
                alt='postgres'
                width={150}
                height={150}
            />
        </div>

        <div className={styles.tech_group}>
            <Image
                className={styles.logos}
                src='../tech/react.webp'
                alt='react'
                width={100}
                height={100}
            />

            <Image
                className={styles.logos}
                src='../tech/next.png'
                alt='next'
                width={100}
                height={100}
            />
            <Image
                className={styles.logos}
                src='../tech/angular.png'
                alt='angular'
                width={100}
                height={100}
            />
        </div>
       
    </div>
}