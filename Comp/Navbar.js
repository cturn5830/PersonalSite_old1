import Link from "next/link"

import styles from "../styles/Comp/Navbar.module.css";

export default function Navbar(){
    return(<div className={styles.Navbar}>
        <h1>Connor Turner</h1>
<ul>
    <li><Link href="/">
    <a>Home</a>
    </Link></li>
    <li><Link href="/about">
    <a>About</a>
    </Link></li>
    <li><Link href="/contact">
    <a>Contact</a>
    </Link></li>
</ul>
    </div>
    )}