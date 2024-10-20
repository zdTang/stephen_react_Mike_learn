import { useState } from "react";
import "../CSS/SearchBar.css"
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
    <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
        <label>Confirm your search:</label>
        <input value={term} onChange={handleChange}/>
        <div>
            {term.length<3&&'Term must more than 3 letters!'}
        </div>
        </form>
    </div>
  )
}


export default Searchbar;