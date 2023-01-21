import styles from './Header.module.css'
import moon from '../../../public/moon.svg'
import Image from 'next/image'

export function Header() {
    return (
        <>
            <div className={styles.navbar}>
                <h3 className={styles.name}>Tiago</h3>
                <ul className={styles.navLinks}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Skills</a>
                    </li>
                    <li>
                        <a href="/">Service</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                    <li onClick={() => console.log('Ola')}>
                        <Image src={moon} alt='Lua'/>
                    </li>
                </ul>
            </div>
        </>
    )
}