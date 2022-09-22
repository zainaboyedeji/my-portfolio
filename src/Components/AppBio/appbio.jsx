import zeinabWeb from "../../Image/web.png"
import "./appbio.scss"

function AppHero() {
    return (
        <div className="appBio d-flex w-100">
            <div className="zeinabWeb">
            <img src={zeinabWeb} alt="zeinabWeb" />
            </div>
            <div className="zeinabBio">
                <h3><span>Specialist</span> in creative <br/> digital products </h3>
                <p>I am a graduate from Al-Hikmah </p>
            </div>
        </div>
    );
}

export default AppHero;
