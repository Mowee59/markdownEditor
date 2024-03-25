import { useState, createContext, useContext } from "react";
import data from '../../data.json';
import { useReducer } from "react";

const MarkdownContext = createContext(null);

const MarkdownProvider = ({children}) => {

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
