
import GlobalStyle from "./themes/global.js";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/themes.js";
import MarkdownProvider from "./providers/markdown-provider/MarkdownProvider.jsx";
import MainLayout from "./components/Layout/MainLayout.jsx";
import Editor from "./components/Editor/Editor.jsx";
import Preview from "./components/Preview/Preview.jsx";


function App() {

  const [theme, setTheme] = useState('dark');

  return(
    
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <MarkdownProvider>
        <MainLayout>
          <MainLayout.Col>
            <Editor />
          </MainLayout.Col>
          <MainLayout.Col>
           <Preview/>
          </MainLayout.Col >
        </MainLayout>
      </MarkdownProvider>
      </ThemeProvider>
  );
}

export default App;
