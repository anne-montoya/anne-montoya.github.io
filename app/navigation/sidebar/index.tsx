import Link from 'next/link'
import styles from './styles.module.css'

export default function Sidebar ({ isOpen, toggle }: { isOpen: boolean, toggle: () => void }) {
    return <div
        className={styles.sidebar}
        style={{
            opacity: `${isOpen ? "1" : "0"}`,
            top: ` ${isOpen ? "0" : "-100%"}`,
        }}
    >
        <button className={styles.close_button} onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"> 
                <path
                fill="#fff"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                />
            </svg>
        </button>
        <ul className={styles.sidebar_pages}>
            <li>
                <Link href="/projects" style={{ color: 'inherit' }} onClick={toggle}><p>Projects</p></Link>
            </li>
            <li>
                <Link href="/tech-stack" style={{ color: 'inherit' }} onClick={toggle}><p>Tech Stack</p></Link>
            </li>
        </ul>

    </div>
}