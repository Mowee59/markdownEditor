import StyledIcon from "./PreviewIcon.styled";
import iconShowPreview from "../../../assets/icon-show-preview.svg";
import iconHidePreview from "../../../assets/icon-hide-preview.svg";

const PreviewIcon = ({ previewMode, onClick }) => {
  const icon = previewMode ? iconHidePreview : iconShowPreview;

  return <StyledIcon src={icon} onClick={onClick} />;
};

export default PreviewIcon;
