import { useState } from "react"
import './search.css'
function Searchlist({onsubmit})//onsubmit is comming from app as a argument to acheive the data flow pipeline from child to parent component!!
{
    const [term,setTerm]=useState('')
    function handler_(event)
    {
        event.preventDefault()
    }
    const handlechange=(event)=>{
        setTerm(event.target.value);
        onsubmit(term);
    }
    return (
        <div id="search">
            <form onSubmit={handler_}>
            keyword:<input className="search" onChange={handlechange}/>
            </form>
        </div>
    );
}
export default Searchlist;