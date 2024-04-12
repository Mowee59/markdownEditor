import ReactMarkdown from "react-markdown";
import { useMarkdownContext } from "../../providers/markdown-provider/MarkdownProvider.jsx";
import {
  ContentPreview,
  PreviewDiv,
  PreviewScrollDiv,
} from "./Preview.styled.js";
import HeaderCol from "../HeaderCol/HeaderCol.jsx";
import iconPreview from "../../assets/icon-show-preview.svg";

const Preview = ({ previewMode }) => {
  const { state, currentFileName } = useMarkdownContext();

  return (
    <PreviewDiv>
      <HeaderCol title={"Preview"} aside={iconPreview} />
      <PreviewScrollDiv>
        <ContentPreview $previewMode={previewMode}>
          <ReactMarkdown>{state.get(currentFileName)?.content}</ReactMarkdown>
        </ContentPreview>
      </PreviewScrollDiv>
    </PreviewDiv>
  );
};

export default Preview;
