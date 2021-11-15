//Rendered in ContactContent
export default function Form(){
    return(<div>
        <div className="FormIntrotext">
            
            <h2>Don't Want To Go Off Site?</h2>
            <h2>Send A Message To Me!</h2>
        </div>
    
        <div className="FormContainer">
            <form name="SendToGmail">
                <input type="text" id="Name" name="Name" placeholder="Name"></input>
                <input type="email" id="Email" name="Email" placeholder="Email"></input>
                <textarea name="Message" form="SendToGmail" placeholder="Enter Message here..."></textarea>
            </form>
        </div>
    </div>)
}