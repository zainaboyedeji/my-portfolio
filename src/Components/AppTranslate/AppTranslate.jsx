import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import i18next from 'i18next';
import globe from "../../Image/globe.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./apptranslate.scss";



const languages = [
    {
        code: "fr",
        name: "Francais",
        country_code: "fr",
    },
    {
        code: "en",
        name: "English",
        country_code: "gb",
    },
];

function AppTranslate() {
    const currentLanguageCode = cookies.get("i18next") || "en";
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

    const { t } = useTranslation();

    useEffect(() => {
        document.title = t("app_title");
    }, [currentLanguage, t]);
    return (

        <div className="appTranslate">
            <Navbar>
                <Container fluid>
                    <Navbar href="#home"> <img style={{ width: '1.5rem' }} src={globe} alt="globe" /></Navbar>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                menuVariant="dark"
                            >
                                <ul>
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
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

};

export default AppTranslate;
