'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './styles.module.css'

export default function Logo () {
    return <Link href='/' style={{ display: 'block' }}>
        <Image
            src='/logo-no-background_h.svg'
            alt='Logo'
            width={100}
            height={50}
            className={styles.nav_logo}
        />
    </Link>
}