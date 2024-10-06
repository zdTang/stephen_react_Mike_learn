import { useState } from "react";
const Searchbar = ({onSubmit}) => {
    const [term,setTerm]=useState('');
    
    const handleFormSubmit = (event)=>{
        event.preventDefault();

        onSubmit(term);
    }
  
    const handleChange=(event)=>{
        setTerm(event.target.value);
    };
    return (
    <div>
        <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange}/>
        </form>
    </div>
  )
}


export default Searchbar;