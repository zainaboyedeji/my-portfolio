import FooterImg from "../../Image/zeinabHero.png"
import linkedIn from "../../Image/linkedin.png"
import github from "../../Image/github.png"

function AppFooter() {

    return (
        <div className="AppFooter">
            <img src={FooterImg} alt="footerimg" />
            <h2>
                Having a great idea?
            </h2>
            <div className="appIcons d-flex">
                <img src={linkedIn} alt="linkedIn" className="linkedIn" />
                <img src={github} alt="github" />
            </div>
        </div>
    );
};
export default AppFooter;