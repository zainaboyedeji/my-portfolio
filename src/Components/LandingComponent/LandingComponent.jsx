import React from 'react'
import AppHero from "../AppHero/apphero";
import NavbarFooter from "..//NavbarFooter/NavbarFooter";
import AppNavbar from "../AppNavbar/appnavbar";
import "./LandingComponent.scss";


const LandingComponent = () => {
    return (
        <div className='landingComponent'>
            <AppNavbar />
            <AppHero />
            <NavbarFooter />
        </div>
    )
}

export default LandingComponent