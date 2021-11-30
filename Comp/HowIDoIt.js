import Image from "next/dist/client/image"
import PlaceHolder from "../public/img/PHIMG.jpg"
import HTMLimg from "../public/img/HTML.png"
import CSSimg from "../public/img/CSS.png"
import JSimg from "../public/img/JS.png"
import REACTimg from "../public/img/React.png"
import WPimg from "../public/img/WordPress.png"


export default function HowIDoIt(){
    return(<div className="HowIDoIt">
        <h2>How I Do It</h2>
        <div className="HIDIimg">
<Image src={HTMLimg} alt="HTML"/>
<Image src={CSSimg} alt="CSS"/>
<Image src={JSimg} alt="Java Script"/>
<Image src={REACTimg} alt="React"/>
<Image src={WPimg} alt="Wordpress"/>
</div>
    </div>)
}