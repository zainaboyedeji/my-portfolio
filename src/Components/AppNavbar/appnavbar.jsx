import wave from "../../Image/wave.jpeg"
import "./appnavbar.scss"
import { Link } from "react-router-dom";
import ReactSwitch from 'react-switch';
import AppTranslate from "../AppTranslate/AppTranslate";
import { t } from "i18next";

function AppNavbar({ onChange, checked }) {
    return (
        <div className="appNavbar w-100 d-flex justify-content-between">
            <div className="wave">
                <Link to="/" className="d-flex">
                    <img src={wave} alt="wave" className="waveHand" />
                    <p>Zainab .O.</p>
                </Link>
            </div>
            <div className="d-flex navSide">
                <div className="translate">
                    <ReactSwitch onChange={onChange} checked={checked} />
                </div>
                <div className="translate">
                    <AppTranslate />
                </div>
                <Link to="/" className="translate pt-1"><p>{t('all_projects')}</p></Link>
                <Link to="/" className="pt-1"><p>{t('contacts')}</p></Link>
            </div>
        </div>
    );
}

export default AppNavbar;
