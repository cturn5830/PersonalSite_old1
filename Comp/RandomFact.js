import{useState} from "react"

import styles from "../styles/Comp/RandomFact.module.css";

export default function RandomFacts(){
const [count,setCount] = useState("Click The Button!")
const facts=["I grew up in Ohio till 2013",
                "I have 9 siblings",
                "I collect retro video games, over 200",
                "I was part of NHS and student council in high school",
                "Supernatrual is my favorite TV show",
                "My favorite game series Zelda",
                "My favorite artist is Eden",
                "I love pineapple on pizza",
                "My favorite super hero is Flash",
                "In high school I used to run track",
            ]

function randomNum(){
    return Math.floor(Math.random()*facts.length)
}

function clickHandle(){
    setCount(facts[randomNum()])
}
    return(<div>
        <div className={styles.randomfacttitlediv}>
            <h2>Want to Know More?</h2>
            </div>
    <div className={styles.randomfactdiv}>
<div>{count}</div>
<div className={styles.spacer}>
    <button className={styles.RandomfactBTN} onClick={clickHandle}>Random Fact!</button>
</div>

    </div></div>)
}