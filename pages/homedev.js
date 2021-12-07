import Navbar from "../Comp/Navbar"
import AboutContent from "../Comp/AboutContent"
import Recentproject from "../Comp/RecentProjects"

export default function About(){
    return(<div>
        <Navbar/>
        <div className="content">
        <Recentproject/>
        </div>
    </div>)
}