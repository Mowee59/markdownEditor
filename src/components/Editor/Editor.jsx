import { useState } from "react";
import { useMarkdownContext } from "../../providers/markdown-provider/MarkdownProvider.jsx";
import HeaderCol from "../HeaderCol/HeaderCol"
import {StyledTextArea, EditorDiv} from "./Editor.styled.js";
import { useContext } from "react";

const Editor = () => {

  const [markdown, setMarkdown] = useMarkdownContext();

  const updateMarkdown = (event) => {
    setMarkdown(event.target.value);
  }
  

  return(
  <EditorDiv>
    <HeaderCol title={'Markdown' }/>
    <StyledTextArea
    value={markdown}
    onChange={updateMarkdown}
    />
  </EditorDiv>  
  )

}

export default Editor;