import FooterImg from "../../Image/zeinabHero.png"
import linkedIn from "../../Image/linkedin.png"
import github from "../../Image/github.png"
import "./AppFooter.scss"
import { t } from "i18next";


function AppFooter() {
    return (
        <div className="AppFooter mt-5">

            <div className="appFooterImage">
                <img src={FooterImg} alt="footerimg" />
            </div>
            <h2>
                {t('having_a')} <br /> {t('great_idea')}?
            </h2>
            <div className="appIcons d-flex justify-content-center mt-5">
                <img src={linkedIn} alt="linkedIn" className="linkedIn" />
                <img src={github} alt="github" />
            </div>

        </div>
    );
};
export default AppFooter;