// import { createContext, useEffect, useState } from "react";
// import AppNavbar from "./Components/AppNavbar/appnavbar";
// import AppWorkPlayBanner from "./Components/AppWorkPlayBanner/workplaybanner";
// import AppTabs from "./Components/AppTabComponent/AppTabs";
// import Footer from "./Components/Footer/Footer";
// import AppSplashScreen from "./Components/AppSplashScreen/AppSplashScreen";
// import ProductsIHaveWorkedOn from "./Components/ProductsIHaveWorkedOn/ProductsIHaveWorkedOn";
// import "./App.scss";
// import { BrowserRouter as Router } from "react-router-dom";
// import CompaniesIWorked from "./Components/CompaniesIWorked/CompaniesIWorked";
// import LandingComponent from "./Components/LandingComponent/LandingComponent";
// import Recommendations from "./Components/Recommendations/Recommendations";
import { FlipCountdown } from 'react-fancy-countdown';
import 'react-fancy-countdown/dist/countdown.css';

// export const ThemeContext = createContext(null);

function App() {
  // const [theme, setTheme] = useState("light ");
  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // };

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Wait for 3 seconds
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 6000);
  // },[]);

  return (
    <div>
    <FlipCountdown deadline="2030-12-31 14:23:22" />
      {/* {isLoading ? <AppSplashScreen /> : 
      <Router>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className="App" id={theme}>
             <AppNavbar onChange={toggleTheme} checked={theme === "dark"} /> 
            <LandingComponent />
            <ProductsIHaveWorkedOn />
            <AppWorkPlayBanner />
            <AppTabs />
            <CompaniesIWorked />
            <Recommendations/>
            <Footer />
          </div>
        </ThemeContext.Provider>
      </Router>} */}
    </div>
  );
}

export default App;