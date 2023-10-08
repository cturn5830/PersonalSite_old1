import Image from "next/image";
import Facebookimg from "../public/img/facebookICON.png";
import Instaimg from "../public/img/instaICON.png";
import Gmailimg from "../public/img/gmailICON.png";

import Form from "./ContactForm";

export default function Content() {
  return (
    <div className="content">
      <h2>Contact</h2>
      <div className="mediabar">
        <a className="media" target="_blank" href="#">
          <span>
            <Image
              src={Facebookimg}
              alt="facebook icon"
              width={100}
              height={100}
            />
          </span>
          <p>My Name</p>
        </a>

        <a className="media media2">
          <span>
            <Image src={Gmailimg} alt="Email icon" width={100} height={100} />
          </span>
          <p>My Email</p>
        </a>

        <a className="media" target="_blank" href="#">
          <span>
            <Image
              src={Instaimg}
              alt="Instagram icon"
              width={100}
              height={100}
            />
          </span>
          <p>My Insta</p>
        </a>
      </div>
      <Form />
    </div>
  );
}
