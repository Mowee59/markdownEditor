import { useState, createContext, useContext } from "react";
import data from '../../data.json';
import { useReducer } from "react";

const MarkdownContext = createContext(null);
const MarkdownProvider = ({children}) => {
 
  const initialFile = {fileName: 'untitled.md ', content: data[1].content};
  // const [markdown, setMarkdown] = useState(data[1].content);
  const [state, dispatch] = useReducer(reducer,  {
    files:
      initialFile,
    currentFile : initialFile
    });

  function reducer(state, action){

    

    switch(action.type){
      case 'edit_current_file':
        let newState = {...state}
        newState.currentFile.content = action.content;
        return newState;
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
