import Link from 'next/link'
import styles from './styles.module.css'
import Logo from './Logo'

export default function Navbar ({ toggle } : { toggle: () => void }) {
    return <div className={styles.navigation}>
        <div className={styles.nav_content}>
            <Logo />
            <ul className={styles.nav_pages}>
                <li>
                    <Link href='/projects' style={{ color: 'inherit' }}>
                        <p>Projects</p>
                    </Link>
                </li>
                <li>
                    <Link href='/tech-stack' style={{ color: 'inherit'}}>
                        <p>Tech Stack</p>
                    </Link>
                </li>
            </ul>
            <button type='button' className={styles.nav_button} onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24">
                    <path fill="#fff"
                        d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                </svg>
            </button>
        </div>
    </div>
}