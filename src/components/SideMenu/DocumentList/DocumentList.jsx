import { useMarkdownContext } from "../../../providers/markdown-provider/MarkdownProvider";
import DocumentInfo from "../../DocumentInfo/DocumentInfo";
import StyledDocumentList from "./DocumentList.styled";

const DocumentList = () => {
  // TODO Display every file that is not current file 
  // TODO Create a new document 
  
  const {currentFileName, state} = useMarkdownContext();

  
  const getDocumentList = () => {
    // Get array of file to render DocumentInfo components
    // All file except current file

    // Create an array of all files frome the state and filtering currentFileName
    const fileArray = [...state.entries()];
    const filteredFileArray = fileArray.filter(([fileName, ]) => fileName !== currentFileName);

    return filteredFileArray

  }



  const documentList = getDocumentList();  

  return(
    <StyledDocumentList>
      {
      documentList.map(([fileName, content]) => (
        <DocumentInfo 
        key={fileName}
        fileName={fileName}
        firstLineText={content.createdAt}/>
      ))
      }
    </StyledDocumentList>
  );
}

export default DocumentList;