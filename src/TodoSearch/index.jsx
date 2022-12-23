import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading}){

    const onSearchValueChange =(event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return(
        <div className={`TodoSearch ${loading && "TodoSearch__loading"}`}>
            <input 
                type="text" 
                className={`TodoSearch__input ${loading && "TodoSearch__input__loading"}`}
                placeholder="Search task..." 
                onChange={onSearchValueChange}
                value={searchValue}
            />
            <span className="TodoSearch__icon"></span>
        </div>

    );
};

export {TodoSearch};