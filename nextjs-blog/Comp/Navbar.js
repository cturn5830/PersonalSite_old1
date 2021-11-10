import Link from "next/link"
import style from "../styles/Navbar"

export default function Navbar(){
    return(<div className="Navbar">
<ul>
    <li><Link href="/">
    Home
    </Link></li>
    <li><Link href="/about">
    About
    </Link></li>
    <li><Link href="/contact">
    Contact
    </Link></li>
    <li><Link href="/random">
    Random
    </Link></li>
</ul>
    </div>
    )}