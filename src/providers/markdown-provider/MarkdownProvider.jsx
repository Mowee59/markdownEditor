import { useState, createContext, useContext } from "react";
import data from '../../data.json';
import { useReducer } from "react";
import { useEffect } from "react";

const MarkdownContext = createContext(null);

const MarkdownProvider = ({children}) => {

  let [intialData, setData] = useState(null);

  //fetchig intial content
  useEffect( () => { 

    fetch('/src/data.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch( { type: 'set_intialState', content: data} )
      })
      .catch((e) => console.error(e));

  } 
    ,[]);

  // Initial document
  const initialFile = {fileName: 'untitled.md ', content: data[1].content};
  
  const [state, dispatch] = useReducer(reducer,  {
    files:
      initialFile,
    currentFile : initialFile
    });

  function reducer(state, action){

    let newState;
    newState = {... state}

    switch(action.type){
      case 'edit_current_file':
        newState.currentFile.content = action.content;
        return newState;

      case 'edit_current_fileName':
        // newState.currentFile.fileName = action.content;
        console.log(newState.currentFile.fileName)
        return newState;

      case 'set_intialState':
         for (let file of action.content){
          newState = {...newState, file}
         }
         console.log(newState);


      default:
        console.log('something went wrong');
        return state;
    }

  }




  return(
  <MarkdownContext.Provider value={[state, dispatch]}>
    {children}
  </MarkdownContext.Provider>
  );


}

export const useMarkdownContext = () => useContext(MarkdownContext);

export default MarkdownProvider;
