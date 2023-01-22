import styles from './Header.module.css'
import moon from '../../../public/moon.svg'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
    return (
        <>
            <div className={styles.navbar}>
                <h3 className={styles.name}>Tiago</h3>
                <ul className={styles.navLinks}>
                    <li>
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Image src={moon} alt='Lua'/>
                    </li>
                </ul>
            </div>
        </>
    )
}