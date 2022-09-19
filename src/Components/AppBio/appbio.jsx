import zeinabHero from "../../Image/zeinabHero.svg"
import "./appbio.scss"

function AppHero() {
    return (
        <div className="appBio d-flex w-100">
            <div className="zeinabHero">
            <img src={zeinabHero} alt="zeinabHero" />
            </div>
            <div className="zeinabBio">
                <h3><span>Specialist</span> in creative digital products </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nobis fugiat numquam vero odio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro nam ipsum magnam. Obcaecati minima necessitatibus quas? Eaque omnis neque expedita eum adipisci itaque consequuntur quo debitis laboriosam mollitia, possimus fuga!</p>
            </div>
        </div>
    );
}

export default AppHero;
