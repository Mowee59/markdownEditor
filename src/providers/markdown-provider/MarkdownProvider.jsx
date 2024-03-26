import { useState, createContext, useContext } from "react";
import markdownReducer from "../markdownReducer.js";
import { useReducer } from "react";
import data from '../../../public/data.json';

const MarkdownContext = createContext(null);

const MarkdownProvider = ({children}) => {
  
  // Initialazing global state fromm data.json, in the form of a map :
  //  
  //  fileName => (content, createdAt)
  //

  const [state, dispatch] = useReducer(markdownReducer, new Map(Object.entries(data)));

  //TODO rewrite fileName init
  const [currentFileName] = useState('welcome.md');
  

  return(
  <MarkdownContext.Provider value={{state, dispatch, currentFileName}}>
    {children}
  </MarkdownContext.Provider>
  );


}

export const useMarkdownContext = () => useContext(MarkdownContext);

export default MarkdownProvider;
