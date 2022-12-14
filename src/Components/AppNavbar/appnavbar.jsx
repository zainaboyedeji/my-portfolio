import wave from "../../Image/wave.jpeg"
import "./appnavbar.scss"
import { Link } from "react-router-dom";
import { t } from "i18next";

function AppNavbar() {
    return (
        <div className="appNavbar w-100 d-flex justify-content-between">
            <div className="wave">
                <Link to="/" className="d-flex">
                    <img src={wave} alt="wave" className="waveHand" />
                    <p>Zainab O.</p>
                </Link>
            </div>
            <div className="d-flex navSide">
                {/* 
                <div className="translate">
                    <AppTranslate />
                </div> */}
                <Link to="/projects" className="translate pt-1"><p>{t('all_projects')}</p></Link>
                <Link to="/contacts" className="pt-1"><p>{t('contacts')}</p></Link>
            </div>
        </div>
    );
}

export default AppNavbar;
