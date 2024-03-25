import iconDelete from "../../../assets/icon-delete.svg"
import iconSave from "../../../assets/icon-save.svg"
import StyledFileBar from "./FileBar.styled.js";
import Button from "../../Button/Button.jsx";
import DocumentInfo from "../../DocumentInfo/DocumentInfo.jsx";
import { useMarkdownContext } from "../../../providers/markdown-provider/MarkdownProvider.jsx";

const FIleBar = () => {

const [state] = useMarkdownContext();

return( 
  <StyledFileBar>
    <DocumentInfo fileName={state.currentFile.fileName}/>
    < StyledFileBar.img src={iconDelete} alt="Icon Delete"/>
    <Button small iconButton={iconSave} textButton='Save Changes'/>
  </StyledFileBar>
);

}

export default FIleBar;