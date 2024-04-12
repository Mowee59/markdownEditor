import ReactMarkdown from "react-markdown";
import { useMarkdownContext } from "../../providers/markdown-provider/MarkdownProvider.jsx";
import {
  ContentPreview,
  PreviewDiv,
  PreviewScrollDiv,
} from "./Preview.styled.js";
import HeaderCol from "../HeaderCol/HeaderCol.jsx";
import PreviewIcon from "./PreviewIcon/PreviewIcon.jsx";

const Preview = ({ previewMode, setPreviewMode }) => {
  const { state, currentFileName } = useMarkdownContext();

  const togglePreviewMode = () => {
    setPreviewMode(!previewMode);
  };

  return (
    <PreviewDiv>
      <HeaderCol
        title={"Preview"}
        aside={
          <PreviewIcon previewMode={previewMode} onClick={togglePreviewMode} />
        }
      />
      <PreviewScrollDiv>
        <ContentPreview $previewMode={previewMode}>
          <ReactMarkdown>{state.get(currentFileName)?.content}</ReactMarkdown>
        </ContentPreview>
      </PreviewScrollDiv>
    </PreviewDiv>
  );
};

export default Preview;
