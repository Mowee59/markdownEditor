import { useMarkdownContext } from "../../providers/markdown-provider/MarkdownProvider.jsx";
import HeaderCol from "../HeaderCol/HeaderCol"
import {StyledTextArea, EditorDiv} from "./Editor.styled.js";

const Editor = () => {

  const [state, dispatch] = useMarkdownContext();

  // const updateMarkdown = (event) => {
  //   setMarkdown(event.target.value);
  // }
  
  const updateMarkdown = (event) => {
    // setMarkdown(event.target.value);
    dispatch({type:'edit_current_file', content: event.target.value})
  }

  return(

  <EditorDiv>
    <HeaderCol title={'Markdown' }/>
    <StyledTextArea
    value={state.currentFile.content}
    onChange={updateMarkdown}
    spellcheck="false"
    />
  </EditorDiv>  
  )

}

export default Editor;