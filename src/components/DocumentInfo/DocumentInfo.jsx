import documentIcon from '../../assets/icon-document.svg'
import StyledDocumentInfo from './DocumentInfo.styled.js';





const DocumentInfo = () => {
  
  return(
    <StyledDocumentInfo>
      <StyledDocumentInfo.img src={documentIcon}/>
      <StyledDocumentInfo.ul>
        <StyledDocumentInfo.ul.firstLine>Document Name</StyledDocumentInfo.ul.firstLine>
        <StyledDocumentInfo.ul.secondLine>Untitled.md</StyledDocumentInfo.ul.secondLine>
      </StyledDocumentInfo.ul>
    </StyledDocumentInfo>

  );
};

export default DocumentInfo;