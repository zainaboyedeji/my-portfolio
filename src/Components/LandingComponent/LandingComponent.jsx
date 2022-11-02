import React from 'react'
import AppHero from "../AppHero/apphero";
import NavbarFooter from "..//NavbarFooter/NavbarFooter";
import "./LandingComponent.scss";


const LandingComponent = () => {
    return (
        <div className='landingComponent'>
            <AppHero />
            <NavbarFooter /></div>
    )
}

export default LandingComponent