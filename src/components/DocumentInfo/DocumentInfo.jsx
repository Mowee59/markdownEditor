import { useState } from 'react';
import documentIcon from '../../assets/icon-document.svg'
import { useMarkdownContext } from '../../providers/markdown-provider/MarkdownProvider.jsx';
import StyledDocumentInfo from './DocumentInfo.styled.js';
import { TEMP_CURRFILE } from '../../providers/markdownReducer.js';





// TODO pass fileName and Date props
const DocumentInfo = () => {

  const [state, dispatch] = useMarkdownContext();
  const [userInput, setUserInput] = useState(TEMP_CURRFILE);

  // TODO Check for extension and verify filename

  // const changeFileName = (event) => {
  //   const newFileName = event.target.value;
  //   console.log(newFileName)
  //     dispatch({action: 'edit_current_fileName', content: newFileName});
  // }
  
   const handleInput = ( event ) => {
     console.log('handledinput')
     const userInput = event.target.value
     setUserInput(userInput)
   }

  

  return(
    <StyledDocumentInfo>
      <StyledDocumentInfo.img src={documentIcon}/>
      <StyledDocumentInfo.ul>
        <StyledDocumentInfo.ul.firstLine>Document Name</StyledDocumentInfo.ul.firstLine>
        <StyledDocumentInfo.ul.secondLine>
          <input 
          type='text' 
          value={userInput} 
          onInput={handleInput}
          // onBlur={changeFileName}
          maxLength={50}
          />
          </StyledDocumentInfo.ul.secondLine>
      </StyledDocumentInfo.ul>
    </StyledDocumentInfo>

  );
};

export default DocumentInfo;