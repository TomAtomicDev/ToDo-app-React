import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){

    const onSearchValueChange =(event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return(
        <div className="TodoSearch">
            <input 
                type="text" 
                className="TodoSearch__input" 
                placeholder="Search task..." 
                onChange={onSearchValueChange}
                value={searchValue}
            />
            <span className="TodoSearch__icon"></span>
        </div>

    );
};

export {TodoSearch};