import "./workplaybanner.scss"
import ball from "../../Image/ball.png"

function AppWorkPlayBanner() {
    return (
        <div className="appWorkPlayBanner">
            <div class="topright animate__animated animate__shakeY"><img src={ball} alt="balling"/></div>
             <div class="topleft animate__animated animate__shakeY"><img src={ball} alt="balling"/></div>
            <div className="center">
                <h1>Work Hard</h1>
                <h2>Play Hard</h2>
            </div>
            
            <div class="bottomleft animate__animated animate__shakeY"><img src={ball} alt="balling"/></div>
            <div class="bottomright animate__animated animate__shakeY"><img src={ball} alt="balling"/></div>
        </div>

    );
}

export default AppWorkPlayBanner;
