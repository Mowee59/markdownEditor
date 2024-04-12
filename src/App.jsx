import GlobalStyle from "./themes/global.js";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/themes.js";
import MarkdownProvider from "./providers/markdown-provider/MarkdownProvider.jsx";
import MainLayout from "./components/Layout/MainLayout.jsx";
import Editor from "./components/Editor/Editor.jsx";
import Preview from "./components/Preview/Preview.jsx";
import AppHeader from "./components/AppHeading/AppHeader.jsx";
import SideMenu from "./components/SideMenu/SideMenu.jsx";
import FlexWrapper from "./components/FlewWrapper/FlexWrapper.jsx";

function App() {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  // Use context for menu state and renering button
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // TODO Use context for previewMode state
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <MarkdownProvider>
        {isMenuOpen && <SideMenu setTheme={setTheme} theme={theme} />}
        <FlexWrapper>
          <AppHeader toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
          <MainLayout>
            <MainLayout.Col previewMode={previewMode}>
              <Editor />
            </MainLayout.Col>
            <MainLayout.Col previewMode={previewMode}>
              <Preview
                previewMode={previewMode}
                setPreviewMode={setPreviewMode}
              />
            </MainLayout.Col>
          </MainLayout>
        </FlexWrapper>
      </MarkdownProvider>
    </ThemeProvider>
  );
}

export default App;
