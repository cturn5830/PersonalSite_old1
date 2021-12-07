import Image from "next/dist/client/image"
import PlaceHolder from "../public/img/PHIMG.jpg"
import React, {useState, Component} from "react"
import RandomFacts from "./RandomFact"

export default function AboutContent(){

    return(
    <div className="content">
<div className="about1">

    <h2> Why I'm a Developer </h2>
    <p> Growing up I always wanted my devices
         to do particular things, however I 
         didn't always have the best things, 
         so I made it work. I would teach myself 
         how to install new apps on outdated phones,
          jailbreak game systems, and even build 
          my own gameboy-like hand held. Without 
          knowing I’ve learned when there's a will,
           there's a way, and many of these skills 
           have translated directly into being a web-developer. </p>
</div>

<div className="about2">

    <h2> My Goal </h2>
    <p> To solve problems and make life easier for 
        businesses and consumers alike though the 
        internet. Helping others though websites, 
        ultimately helps myself as well.</p>
</div> 
<div className="about3">  {//VALUES!!!
}

<h2> My Values </h2>

<div>
<h4>Serving With Christ:</h4>
<p>Serving with Christ is working with an open
     heart and moving in a super-natural way,
      fulfilling his will through actions and 
      behaviours. This also means serving others
       with a giving heart, being generous and kind.</p>
</div>

<div>
<h4>Working Openly:</h4>
<p>No one wants to just hope that something is 
    getting done, I’m about communicating where 
    I’m at with your project and keeping everyone 
    up to date on everything.</p>
</div>


<div>
<h4>Keeping All Cards On The Table:</h4>
<p>Keeping all cards on the table means being
     open about what you can do and having all
      options available, and providing understanding
       of the proper resources to complete the
        task via images or text</p>
</div>

<div>
<h4>Notes Are Key:</h4>
<p>I’m a huge user of notes and love to jot down 
    big facts down key elements to look back on,
     this avoids missing elements in the future 
     and minimizing revisions, helping myself 
     and you</p>
</div>

</div>
<RandomFacts/>
    </div>)
}
