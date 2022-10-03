import { t } from "i18next";
import zeinabWeb from "../../Image/web.png"
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
                <p>{t("i_enjoy_creating_customer-facing_applications_that_allow")} <br/>{t("me_to_combine_my_backgrounds_in_business_and_technology")}.</p>
            </div>
        </div>
    );
}

export default AppHero;
