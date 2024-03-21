import StyledMainLayout, {StyledLayoutCol} from "./MainLayout.styles.js";

const MainLayout = ({children}) => (
  <StyledMainLayout>
    {children}
  </StyledMainLayout>
);

MainLayout.Col = ({children}) => (
  <StyledLayoutCol>
    {children}
  </StyledLayoutCol>
);

export default MainLayout;