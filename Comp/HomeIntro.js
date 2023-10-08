import Image from "next/dist/client/image"
import PlaceHolder from "../public/img/PHIMG.jpg"
import Recentproject from "./RecentProjects"
import Heroimg from "../public/img/HeroImg.jpg"
import HowIDoIt from "./HowIDoIt"

import styles from "../styles/Comp/HomeIntro.module.css";


export default function Introcontent(){
    return(<div className="content">
        <div className={styles.home1}>
            <img className={styles.Heroimg} src="/img/HeroImg.jpg" alt="Hero"/>
            <div className={styles.Greeting}>
            <h2>Howdy There!</h2>
            <p>What am I all about? 
                Building websites of course! 
                Websites are one of the numerous one ways to comunicate with others on ideas, while being accessible from anywhere at anytime.
                Capturing ones image of an idea and translating into a easy to read website is important and prideful skill.
            </p>
            </div>
        </div>
        <HowIDoIt/>
    </div>)
}