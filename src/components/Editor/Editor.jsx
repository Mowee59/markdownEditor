import { useMarkdownContext } from "../../providers/markdown-provider/MarkdownProvider.jsx";
import HeaderCol from "../HeaderCol/HeaderCol"
import {StyledTextArea, EditorDiv} from "./Editor.styled.js";
import { Actions } from "../../providers/markdownReducer.js";

const Editor = () => {

  const {state, dispatch, currentFileName} = useMarkdownContext();

 

  
  const updateMarkdown = (event) => {
    
    dispatch({
      type:Actions.EDIT_FILECONTENT,
      payload: 
        {
          fileName: currentFileName,
          content: event.target.value
        }
    });
  }

  return(

  <EditorDiv>
    <HeaderCol title={'Markdown' }/>
    <StyledTextArea
    value={state.get(currentFileName)?.content}
    onChange={updateMarkdown}
    spellCheck="false"
    />
  </EditorDiv>  
  )

}

export default Editor;