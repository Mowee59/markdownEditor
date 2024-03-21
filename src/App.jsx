
import GlobalStyle from "./themes/global.js";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/themes.js";

import MainLayout from "./components/layout/MainLayout";
import HeaderCol from "./components/layout/HeaderCol.jsx";


function App() {

  const [theme, setTheme] = useState('dark');

  return(
    
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <MainLayout>
        <MainLayout.Col>
          <HeaderCol title="Markdown"  />

        </MainLayout.Col>
        <MainLayout.Col>
        <HeaderCol title="Preview"/>
        </MainLayout.Col >
      </MainLayout>
      </ThemeProvider>
  );
}

export default App;
