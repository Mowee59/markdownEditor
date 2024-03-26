import { useMarkdownContext } from "../../providers/markdown-provider/MarkdownProvider.jsx";
import HeaderCol from "../HeaderCol/HeaderCol"
import {StyledTextArea, EditorDiv} from "./Editor.styled.js";
import { EDIT_CURRENT_FILECONTENT, EDIT_CURRENT_FILENAME,TEMP_CURRFILE } from "../../providers/markdownReducer.js";

const Editor = () => {

  const [state, dispatch] = useMarkdownContext();

  // const updateMarkdown = (event) => {
  //   setMarkdown(event.target.value);
  // }
  
  const updateMarkdown = (event) => {
    // setMarkdown(event.target.value);
    dispatch({
      type:EDIT_CURRENT_FILECONTENT,
      payload: event.target.value 
    });
  }

  return(

  <EditorDiv>
    <HeaderCol title={'Markdown' }/>
    <StyledTextArea
    value={state.get(TEMP_CURRFILE).content}
    onChange={updateMarkdown}
    spellCheck="false"
    />
  </EditorDiv>  
  )

}

export default Editor;