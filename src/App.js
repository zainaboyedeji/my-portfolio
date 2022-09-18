import AppNavbar from "./Components/AppNavbar/appnavbar"
import AppHero from "./Components/AppHero/apphero"
import AppBio from "./Components/AppBio/appbio"
import AppWorkPlayBanner from "./Components/AppWorkPlayBanner/workplaybanner"
import AppTabs from "./Components/AppTabComponent/AppTabs"
import AppFooter from "./Components/AppFooter/AppFooter"
import './App.scss';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { createContext, useState , useEffect } from "react";
import { useTranslation } from "react-i18next";
import cookies from 'js-cookie';
import Dropdown from 'react-bootstrap/Dropdown';


export const ThemeContext = createContext(null);

const languages = [
  {
    code: 'fr',
    name: 'Francais',
    country_code: 'fr'
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  }
]

function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  


  const [theme, setTheme] = useState("light ");
  
  const { t } = useTranslation();

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.title = t('app_title')
  }, [currentLanguage, t])
  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }} >
        <div className="p-5 App" id={theme}>
          <AppNavbar onChange={toggleTheme} checked={theme === "dark"} />
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {languages.map(({ code, name, country_code }) => (
                <Dropdown.Item href="#/action-1">{name}</Dropdown.Item>
              ))}
        {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
          {/* <div className="dropdown">
            <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><span className="dropdown-item-text"> {t('language')} </span>

              </li>
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <button className="dropdown-item" onClick={() => i18next.changeLanguage(code)} disabled={code === currentLanguageCode}>
                    <span className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}
                    ></span>
                    {name}
                  </button>
                </li>
              ))}

            </ul>
          </div> */}
          <label>{t('welcome_to_react')}</label>
          <AppHero />
          <AppBio />
          <AppWorkPlayBanner />
          <AppTabs />
          <AppFooter />
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
