import Link from "next/link"

export default function Navbar(){
    return(<div className="Navbar">
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