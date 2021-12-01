import Image from "next/dist/client/image"
import PlaceHolder from "../public/img/PHIMG.jpg"
import React, {useState, Component} from "react"


export default function AboutContent(){
const [fact, setfact] = useState("")


const FactsHere = [
    "I'm currently 19 years young",
    "I grew up in Ohio", 
    "I have seven siblings"]

let factshow = FactsHere[0]
let num = 1

function getRandomInt() {
  let num = Math.floor(Math.random() * FactsHere.length);
  setfact = FactsHere[num]
}

    return(
    <div className="content">
<div className="about1">

    <h2> Why I'm a Developer </h2>
    <p> Why i'm a dev info here
    Why i'm a dev info here
    Why i'm a dev info here
    Why i'm a dev info here
    Why i'm a dev info here
    Why i'm a dev info here
    Why i'm a dev info here
    Why i'm a dev info here
    Why i'm a dev info here
    Why i'm a dev info here
    Why i'm a dev info here </p>
</div>

<div className="about2">

    <h2> My Purpose </h2>
    <p> My purpose info here
    My purpose info here
    My purpose info here
    My purpose info here
    My purpose info here
    My purpose info here
    My purpose info here
    My purpose info here
    My purpose info here
    My purpose info here
    My purpose info here
    My purpose info here </p>
</div> 
<div className="about3">  {//VALUES!!!
}

<h2> My Values </h2>

<h4>Value 1:</h4>
<p>Value 1 hereValue 1 hereValue 1 hereValue 
    1 hereValue 1 hereValue 1 hereValue 1 here
    Value 1 hereValue 1 hereValue 1 hereValue 
    1 hereValue 1 hereValue 1 hereValue 1 here
    Value 1 hereValue 1 hereValue 1 hereValue 
    1 hereValue 1 hereValue 1 hereValue 1 here
    Value 1 hereValue 1 hereValue 1 hereValue 
    1 hereValue 1 hereValue 1 hereValue 1 here
    Value 1 hereValue 1 here</p>
<br/>

<h4>Value 2:</h4>
<p>Value 2 here</p>
<br/>

<h4>Value 3:</h4>
<p>Value 3 here</p>
<br/>

<h4>Value 4:</h4>
<p>Value 4 here</p>
<br/>
</div>


{// Random fact section
}

        <div id="randominfo">Random facts display below<br/>
        <span className="randomfacts">{fact}</span>
        </div>
            <button id="factbtn" onClick={getRandomInt}>Click Me!</button>
    </div>)
}