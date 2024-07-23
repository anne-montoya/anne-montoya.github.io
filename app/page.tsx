import styles from './styles.module.css'
import Image from 'next/image'

export default function Page() {
    return <div className={styles.centered_element}>
        <h1 className={styles.name}>Hi, I'm Anne Montoya</h1>
        <p className={styles.common_text}>
            I'm a Software Engineer with 6 years of experience, specializing in back-end development.
            I enjoy problem solving and building innovative software solutions.
        </p>
        <br></br>
        {/* <h2 className={styles.common_text}>🔧 Work In Progress ⚙️</h2> */}
        <div className={styles.links_div}>
        <a
            className={styles.logo_link}
            href='https://www.linkedin.com/in/anne-kristine-montoya/'
            target={"_blank"}
            rel={"noreferrer"}>
            <Image
                className={styles.logos}
                src='/linkedin-logo.webp'
                alt='linkedin'
                width={50}
                height={50}
            />
        </a>
        <a
            className={styles.logo_link}
            href='https://www.github.com/anne-montoya/'
            target={"_blank"}
            rel={"noreferrer"}>
            <Image
                className={styles.logos}
                src='/github-logo1.webp'
                alt='github'
                width={50}
                height={50}
            />
        </a>
        </div>
    </div>
}