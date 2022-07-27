import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (
        <nav>
            <div>
                <Image 
                    src="/images/pngegg.png" 
                    width="35" 
                    height="40" 
                    alt="Pokédex"/>
                <h1>Pokédex</h1>
            </div>

            <ul>
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