import { useState, createContext, useContext } from "react";
import data from '../../data.json';

const MarkdownContext = createContext(null);

const MarkdownProvider = ({children}) => {

  const [markdown, setMarkdown] = useState(data[1].content);

  return(
  <MarkdownContext.Provider value={[markdown, setMarkdown]}>
    {children}
  </MarkdownContext.Provider>
  );


}

export const useMarkdownContext = () => useContext(MarkdownContext);

export default MarkdownProvider;
