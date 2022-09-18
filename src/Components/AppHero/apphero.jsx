import linkedIn from "../../Image/linkedin.png"
import github from "../../Image/github.png"
import zeinabHero from "../../Image/zeinabHero.png"
import "./apphero.scss"

function AppHero() {
    return (
        <div className="appHero d-flex w-100">
            <div className="nameHero">
                <div className="nameDev">
                    <h3>Zainab Oyedeji-</h3>
                    <p>developer from <br /> Lagos Nigeria</p>
                </div>
                <div className="appIcons">
                    <img src={linkedIn} alt="linkedIn" className="linkedIn" />
                    <img src={github} alt="github" />
                </div>
            </div>
            <div className="zeinabHero">
                <img src={zeinabHero} alt="zeinabHero" />
            </div>
        </div>
    );
}

export default AppHero;
