import styles from './styles.module.css'

export default function Page() {
    return <div className={styles.centered_element}>
        <h1 className={styles.name}>Hi, I'm Anne Montoya</h1>
        <p className={styles.common_text}>I'm a Software Engineer with 6 years of experience, specializing in back-end development.</p>
    </div>
}