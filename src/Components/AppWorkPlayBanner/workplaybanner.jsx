import "./workplaybanner.scss"
import ball from "../../Image/ball.png"
import clock from "../../Image/clock.png"
import spotify from "../../Image/spotify.png"
import { t } from "i18next";

function AppWorkPlayBanner() {
    return (
        <div className="appWorkPlayBanner">
            <div className="topright animate__animated animate__shakeY"><img src={ball} alt="balling"/></div>
             <div className="topleft animate__animated animate__shakeY"><img src={clock} alt="balling"/></div>
             <div className="topmiddle animate__animated animate__shakeY"><img src={spotify} alt="balling"/></div>
            <div className="center">
                <h1>{t("work_hard")}.</h1>
                <h2>{t("play_hard")}.</h2>
            </div>
            <div className="bottomright animate__animated animate__shakeY"><img src={ball} alt="balling"/></div>
            <div className="bottomleft animate__animated animate__shakeY"><img src={clock} alt="balling"/></div>
            <div className="bottommiddle animate__animated animate__shakeY"><img src={spotify} alt="balling"/></div>
        </div>

    );
}

export default AppWorkPlayBanner;
