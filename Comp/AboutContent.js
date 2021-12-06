import Image from "next/dist/client/image"
import PlaceHolder from "../public/img/PHIMG.jpg"
import React, {useState, Component} from "react"
import RandomFacts from "./RandomFact"

export default function AboutContent(){

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
<RandomFacts/>
    </div>)
}
