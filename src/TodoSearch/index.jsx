import React from "react";
import { TodoContext } from '../TodoContext'
import './TodoSearch.css';

function TodoSearch(){

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

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