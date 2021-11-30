import Image from "next/dist/client/image"
import PlaceHolder from "../public/img/PHIMG.jpg"
import React, {useState} from "react"

export default function AboutContent(){
const [fact, selectFact] = useState(1)

const FactsHere = [
    "I'm currently 19 years young",
    "I grew up in Ohio", 
    "I have seven siblings"]

function randomFact(){
    let number = math.floor(math.random() * FactsHere.length)
    return(number)
}


function factSelection() {
    selectFact(randomFact())
}

    return(
    <div className="content">

        <div id="randominfo"> Im the random info content for the about page
        <span className="randomfacts">{fact}</span>
        </div>
            <button onclick={factSelection}>Click Me!</button>
    </div>)
}