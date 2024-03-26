import { useState } from 'react';
import documentIcon from '../../assets/icon-document.svg'
import { useMarkdownContext } from '../../providers/markdown-provider/MarkdownProvider.jsx';
import StyledDocumentInfo from './DocumentInfo.styled.js';
import { Actions } from '../../providers/markdownReducer.js';





const DocumentInfo = ({fileName, firstLineText, editable=false}) => {

  //TODO Refactor component

  const {state, dispatch, currentFileName, setCurrentFileName} = useMarkdownContext();
  const [userInput, setUserInput] = useState(currentFileName);

  // TODO Check for extension and verify filename

  const changeFileName = (event) => {

    // TODO give user feedback
    const newFileName = event.target.value;
    console.log(newFileName)
    if(state.has(newFileName)){
      console.error('File already exists')
  
    } else {
      //Change filename in state and change currentFileName state 
      dispatch({
        type: Actions.EDIT_FILENAME,
        payload :
        {
          oldName: currentFileName, 
          newName: newFileName
        }
    });
    setCurrentFileName(newFileName);
  }
  }
  
  // Show the user what he's typing 
  const handleInput = ( event ) => {
    const userInput = event.target.value
    setUserInput(userInput)
  }

  

  return(
    <StyledDocumentInfo>
      <StyledDocumentInfo.img src={documentIcon}/>
      <StyledDocumentInfo.ul>
        <StyledDocumentInfo.ul.firstLine>{firstLineText}</StyledDocumentInfo.ul.firstLine>
        <StyledDocumentInfo.ul.secondLine  >
          <input 
          contentEditable={editable ? 'true' : 'false'}
          type='text' 
          value={fileName ? fileName : currentFileName} 
          onInput={handleInput}
          onBlur={changeFileName}
          maxLength={50}
          />
          </StyledDocumentInfo.ul.secondLine>
      </StyledDocumentInfo.ul>
    </StyledDocumentInfo>

  );
};

export default DocumentInfo;