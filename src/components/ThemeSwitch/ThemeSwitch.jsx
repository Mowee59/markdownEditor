import StyledThemeSwitch from "./ThemeSwitch.styled.js"
import iconDarkMode from "../../assets/icon-dark-mode.svg"
import iconLightMode from "../../assets/icon-light-mode.svg"


const ThemeSwitch = ({theme, setTheme}) => {

  
  const toggleTheme = () =>  theme === 'light' ?  setTheme('dark') : setTheme('light');
  
  

  return(
  <StyledThemeSwitch >
    <StyledThemeSwitch.DarkIcon theme={theme} src={iconDarkMode} alt="Icon dark mode"/>
      <StyledThemeSwitch.checkBox defaultChecked={ theme === 'light' } onClick={toggleTheme} type="checkbox" />
    <StyledThemeSwitch.LightIcon theme={theme} src={iconLightMode} alt="Icon light mode"/>
  </StyledThemeSwitch>
  );
}

export default ThemeSwitch;