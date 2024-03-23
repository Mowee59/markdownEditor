import ReactMarkdown from 'react-markdown';
import { useMarkdownContext } from "../../providers/markdown-provider/MarkdownProvider.jsx"
import { PreviewDiv, PreviewScrollDiv} from "./Preview.styled.js";
import HeaderCol from "../HeaderCol/HeaderCol.jsx";
import iconPreview from "../../assets/icon-show-preview.svg"

const Preview = () => {
  const [markdown] = useMarkdownContext();

  return (
    <PreviewDiv>
      <HeaderCol title={'Preview'} aside={iconPreview}/>
      <PreviewScrollDiv>
        <ReactMarkdown>{ markdown }</ReactMarkdown>
      </PreviewScrollDiv>
    </PreviewDiv>

  );

}

export default Preview;