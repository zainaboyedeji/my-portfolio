import "./workplaybanner.scss"
import ball from "../../Image/ball.png"
import headphone from "../../Image/headphone.jpeg"
import { t } from "i18next";
import { useEffect } from "react";


function AppWorkPlayBanner() {
    useEffect(() => {
        window.AOS.init();
    }, []);

    return (
        <div className="appWorkPlayBanner">
            <div className="topright" data-aos="fade-up" data-aos-duration="3000"><img src={ball} alt="balling" /></div>
            <div className="topleft" data-aos="fade-up" data-aos-duration="3000"><img src={ball} alt="balling" /></div>
            <div className="topmiddle" data-aos="fade-up" data-aos-duration="3000"><img src={headphone} alt="balling" /></div>
            <div className="center">
                <h1>{t("work_hard")}.</h1>
                <h2>{t("play_hard")}.</h2>
            </div>
            <div className="bottomright" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"><img src={ball} alt="balling" /></div>
            <div className="bottomleft" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"><img src={ball} alt="balling" /></div>
            <div className="bottommiddle" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"><img src={headphone} alt="balling" /></div>
        </div>

    );
}

export default AppWorkPlayBanner;
