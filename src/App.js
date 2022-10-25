import { createContext, useState} from "react";
import AppNavbar from "./Components/AppNavbar/appnavbar";
import AppHero from "./Components/AppHero/apphero";
import AppBio from "./Components/AppBio/appbio";
import AppWorkPlayBanner from "./Components/AppWorkPlayBanner/workplaybanner";
import AppTabs from "./Components/AppTabComponent/AppTabs";
import AppFooter from "./Components/AppFooter/AppFooter";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AppSlide from "./Components/AppSlide/AppSlide";
import CompaniesIWorked from "./Components/CIHWW/cihww";



export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light ");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="p-5 App" id={theme}>
          <AppNavbar onChange={toggleTheme} checked={theme === "dark"} />
          <AppHero />
          <AppBio />
          <AppSlide/>
          <AppWorkPlayBanner />
          <AppTabs />
          <CompaniesIWorked/>
          <AppFooter />
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
