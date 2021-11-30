import Image from "next/dist/client/image"
import PlaceHolder from "../public/img/PHIMG.jpg"
import Recentproject from "./RecentProjects"
import Heroimg from "../public/img/Heroimg.jpg"
import HowIDoIt from "./HowIDoIt"

export default function Introcontent(){
    return(<div className="content">
        <div className="home1">
            <div className="Heroimg"><Image src={Heroimg} alt="Hero"/></div>
            <div className="Greeting">
            <h2>Howdy There!</h2>
            <p>What am I all about? 
                Building websites of course! 
                Websites are one of the numerous one ways to comunicate with others on ideas, while being accessible from anywhere at anytime.
                Capturing ones image of an idea and translating into a easy to read website is important and prideful skill.
            </p>
            </div>
        </div>
        <Recentproject/>
        <HowIDoIt/>
    </div>)
}