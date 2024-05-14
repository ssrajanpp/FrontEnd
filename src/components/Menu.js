
import React, {useState} from "react";
import Logo from '../assets/img/logo.png';

export default function Menu (){
    const [submenu, setSubmenu] = useState(true);
        return(
            
            <header className="fd-menu">
                <a  href="https://rajanui.000webhostapp.com/" >
                    <img src={Logo} alt="logo" className="fd-site-logo"/>
                </a>
                { submenu && (
                    <a className="fd-suumenu">discover more</a>
                )}
                
            </header>
        )
    
}