import Image from "next/image"
import Facebookimg from "../public/img/facebookICON.png"
import Instaimg from "../public/img/instaICON.png"
import Gmailimg from "../public/img/gmailICON.png"

import Form from "./ContactForm"

export default function Content(){
    return(<div className="content">
        <h2>Contact</h2>
        <div className="mediabar">
        <a className="media" target="_blank" href="https://www.facebook.com/profile.php?id=100005501896410">
                <span>
                <Image src={Facebookimg} alt="facebook icon"width={100}height={100}/>
                </span>
                <p>@Connor Turner</p>
        </a>
        
            <div className="media">
                <span>
                <Image src={Gmailimg} alt="Email icon"width={100}height={100}/>
                </span>
                <p>cturn5830@gmail.com</p>
            </div>
       
        <a className="media" target="_blank" href="https://www.instagram.com/captainturn/">
                <span>
                <Image src={Instaimg} alt="Instagram icon"width={100}height={100}/>
                </span>
                <p>@captainturn</p>
        </a>
            </div>
        <Form/>
    </div>)
}