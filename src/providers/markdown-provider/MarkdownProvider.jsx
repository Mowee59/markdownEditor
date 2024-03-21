import { useState, createContext, useContext } from "react";

const MarkdownContext = createContext(null);

const MarkdownProvider = ({children}) => {

  const [markdown, setMarkdown] = useState('');

  return(
  <MarkdownContext.Provider value={[markdown, setMarkdown]}>
    {children}
  </MarkdownContext.Provider>
  );


}

export const useMarkdownContext = () => useContext(MarkdownContext);

export default MarkdownProvider;
