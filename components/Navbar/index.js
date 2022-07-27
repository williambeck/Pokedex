import Link from "next/link"
import Image from "next/image"

import styles from '../Navbar/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image 
                    src="/images/pngegg.png" 
                    width="35" 
                    height="40" 
                    alt="Pokédex"/>
                <h1>Pokédex</h1>
            </div>

            <ul className={styles.link_items}>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>About</a></Link>
                </li>
            </ul>
        </nav>

    )
}