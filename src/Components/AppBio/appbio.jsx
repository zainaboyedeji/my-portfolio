import { t } from "i18next";
import zeinabWeb from "../../Image/web.png"
import { Link } from "react-router-dom";
import "./appbio.scss"

function AppHero() {
    return (
        <div className="appBio d-flex w-100">
            <div className="zeinabWeb">
            <img src={zeinabWeb} alt="zeinabWeb" />
            </div>
            <div className="zeinabBio">
                <h3><span>{t('specialist')}</span> {t('in_creative')} <br/> {t('digital products')} </h3>
                <p>I am a Software Engineer with 3 years of professional experience, with a lot of focus on the front-end.</p>
                <p>I  am currently a Frontend Engineer at Moove Africa,where i focus on improving the quality of frontend code by paying close attention to details with the help of grade A softwares and developer tools/processes</p>
                <p>{t("i_enjoy_creating_customer-facing_applications_that_allow")} <br/>{t("me_to_combine_my_backgrounds_in_business_and_technology")}.</p>
                <Link to="">Resume</Link>
            </div>
        </div>
    );
}

export default AppHero;
