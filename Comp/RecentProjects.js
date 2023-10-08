//render in HomeIntro.js
import Image from "next/dist/client/image"
import PlaceHolder from "../public/img/PHIMG.jpg"
import Link from "next/link"

import styles from "../styles/Comp/Recentprojects.module.css";

export default function Recentproject(){
    
    return(<div className={styles.Recentprojects}>
        <h2>Recent Projects</h2>
        <div>
Place Holder text for Recent projects
        </div>
        <div className={styles.SendProjdiv}>
            <Link href="/projects">
                <button className={styles.SendProj}>View More Projects Here</button>
            </Link>

        </div>
    </div>)
}