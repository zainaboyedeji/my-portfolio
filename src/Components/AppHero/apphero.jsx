import linkedIn from "../../Image/linkedin.png"
import github from "../../Image/github.png"
import zeinabHero from "../../Image/zeinabHero.png"
import "./apphero.scss"
import { t } from "i18next"

function AppHero() {
    return (
        <div className="appHero d-flex w-100">
            <div className="nameHero animate__animated animate__fadeInDown animate__slow">
                <div className="nameDev">
                    <h3>Zainab Oyedeji-</h3>
                    <div className="writeUp">{t('developer_from')}</div>
                    <div className="writeUp">Lagos Nigeria</div>
                </div>
                <div className="appIcons">
                    <a href="https://www.linkedin.com/in/zainab-oyedeji/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="linkedIn" className="linkedIn" /></a>
                    <a href="https://github.com/zainaboyedeji" target="_blank" rel="noreferrer"><img src={github} alt="github"/></a>
                </div>
            </div>
            <div className="zeinabHero animate__animated animate__fadeInDown animate__slow">
                <img src={zeinabHero} alt="zeinabHero" />
            </div>
        </div>
    );
}

export default AppHero;
