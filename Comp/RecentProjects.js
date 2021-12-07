//render in HomeIntro.js
import Image from "next/dist/client/image"
import PlaceHolder from "../public/img/PHIMG.jpg"
import Link from "next/link"

export default function Recentproject(){
    
    return(<div className="Recentprojects">
        <h2>Recent Projects</h2>
        <div>
Place Holder text for Recent projects
        </div>
        <div className="SendProjdiv">
            <Link href="/projects">
                <button className="SendProj">View More Projects Here</button>
            </Link>

        </div>
    </div>)
}