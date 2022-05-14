import React from 'react';

function useLocalStorage (itemName, initialValue) {
    const [error, setError]= React.useState(false);
    const [loading, setLoading]= React.useState(true);
    const [item, setItem]= React.useState(initialValue);
    
    //Usando el useEffect para simular que traemos los datos del backend
  
    React.useEffect(()=>{
      setTimeout(()=>{
        
        try {
          //Usando el localStorage para el array de ToDos
          const localStorageItem = window.localStorage.getItem(itemName);
          let parsedItem;
          
          if ( !localStorageItem) {
  
            window.localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem= [];
  
          } else {
  
            parsedItem = JSON.parse(localStorageItem)
          };
  
          setItem(parsedItem);
          setLoading(false);
  
      } catch (e){
          setError(e);
      }
      }, 1750)
    }, [])
     
  
    //Creando la función que guarda en LocalStorage y Actualiza el estado de los Todos
    const saveItem = (newItem) => {
      try {
        const stringifiedTodos = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedTodos);
        setItem(newItem);
      } catch (e) {
        setError(e);
      }
    };
  
    return {
      item, 
      saveItem,
      loading,
      error  
    };
  };

  export { useLocalStorage };