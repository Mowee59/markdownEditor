import documentIcon from '../../assets/icon-document.svg'
import { useMarkdownContext } from '../../providers/markdown-provider/MarkdownProvider.jsx';
import StyledDocumentInfo from './DocumentInfo.styled.js';






const DocumentInfo = ({fileName}) => {

  
  
  return(
    <StyledDocumentInfo>
      <StyledDocumentInfo.img src={documentIcon}/>
      <StyledDocumentInfo.ul>
        <StyledDocumentInfo.ul.firstLine>Document Name</StyledDocumentInfo.ul.firstLine>
        <StyledDocumentInfo.ul.secondLine><input type='text' value={fileName} maxLength={50}/></StyledDocumentInfo.ul.secondLine>
      </StyledDocumentInfo.ul>
    </StyledDocumentInfo>

  );
};

export default DocumentInfo;