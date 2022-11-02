import FooterImg from "../../Image/zeinabHero.png"
import linkedIn from "../../Image/linkedin.png"
import github from "../../Image/github.png"
import "./Footer.scss"
import { t } from "i18next";


function AppFooter() {
    return (
        <div className="AppFooter mt-5">

            <div className="appFooterImage">
                <img src={FooterImg} alt="footerimg" />
            </div>
            <h2>
                {t('having_a')} {t('great_idea')}?
            </h2>
            <div className="appIcons d-flex justify-content-center mt-4">
                <a href="https://www.linkedin.com/in/zainab-oyedeji/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="linkedIn" className="linkedIn" /></a>
                <a href="https://github.com/zainaboyedeji" target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
            </div>

        </div>
    );
};
export default AppFooter;