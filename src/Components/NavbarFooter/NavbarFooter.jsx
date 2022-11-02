import React from 'react';
import { BsGithub, BsLinkedin } from "react-icons/bs";

const NavbarFooter = () => {
    return (
        <div> <div className="heroIcons">
            <a href="https://www.linkedin.com/in/zainab-oyedeji/" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href="https://github.com/zainaboyedeji" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        </div></div>
    )
}

export default NavbarFooter