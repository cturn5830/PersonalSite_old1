//Rendered in ContactContent
import styles from "../styles/Comp/ContactForm.module.css";

export default function Form(){


    return(<div>
        <div className={styles.FormIntrotext}>
            
            <h2>Don't Want To Go Off Site?</h2>
            <h2>Send A Message To Me!</h2>
        </div>
    
        <div className={styles.FormContainer} id="form">
            <form className={styles.form} id="SendToGmail" name="SendToGmail" action="https://formsubmit.co/67ebc5b7393c7f72a9ad12f14c536519" method="POST">
                <input type="text" id="Name" name="Name" placeholder="Name"></input>
                <input type="email" id="Email" name="Email" placeholder="Email"></input>
                <input type="number" id="Phone_number" name="Phone_number" placeholder="Phone #"></input>
                <textarea name="Message" id="Message" form="SendToGmail" placeholder="Enter Message here..."></textarea>
                <input type="submit"></input>
                <input type="hidden" name="_next" value="http://localhost:3000/contact"></input>
            </form>
        </div>
    </div>)
}