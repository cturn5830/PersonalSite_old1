import{useState} from "react"

export default function RandomFacts(){
const [count,setCount] = useState(5)
const facts=["fact1","fact2","fact3","fact4","fact5","fact6"]

function randomNum(){
    return Math.floor(Math.random()*facts.length)
}

function clickHandle(){
    setCount(facts[randomNum()])
}
    return(<div className="randomfactdiv">
<div>{count}</div>
<button className="RandomfactBTN" onClick={clickHandle}>Random Fact!</button>
    </div>)
}