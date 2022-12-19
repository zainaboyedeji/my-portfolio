import zeinabHero from "../../Image/zeinabHero.png"
import "./apphero.scss"
// import { t } from "i18next"


function AppHero() {
    return (
        <div className="appHero d-flex justify-content-between w-100">
        <div className="heroContent">
            <p>Hi, my name is</p>
            <h6 className="mt-5">Zainab Oyedeji</h6>
            <h1 className="mt-1">I Turn Ideas Into Real Life Projects.</h1>
            <p className="mt-5 details">I’m a software engineer with more than three years of experience in building<br /> exceptional products.Currently, I’m focused on building accessible, human-centered products at <a href="https://www.moove.io/" target="_blank" rel="noreferrer">Moove Africa</a> using grade A softwares and developer tools/processes..</p>
            <div className="mt-5">
                <a href="https://docs.google.com/document/d/1sgn3-vRNa__QkG9Vuhk01Kxv8VzqPJqJIlhVwu5cnro/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
            </div>
        </div>
        <div className="heroImage">
        <img src={zeinabHero} alt="zeinabHero" />
        </div>
    </div>
    );
}

export default AppHero;
