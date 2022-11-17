import React,{useState} from 'react';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import AppSwitch from '../AppSwitch/AppSwitch';
import "./NavbarFooter.scss"

const NavbarFooter = () => {
    const [value, setValue] = useState(false);
    return (
        <div className='d-flex w-100 justify-content-between navbarFooter'>
            <div className="switchDiv">
                <AppSwitch
                    isOn={value}
                    onColor="#EF476F"
                    handleToggle={() => setValue(!value)}
                />
            </div>
            <div className="heroIcons">
                <a href="https://www.linkedin.com/in/zainab-oyedeji/" target="_blank" rel="noreferrer"><BsGithub /></a>
                <a href="https://github.com/zainaboyedeji" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            </div>
        </div>
    )
}

export default NavbarFooter