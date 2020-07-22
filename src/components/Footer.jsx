import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();
    return <div >
        <footer>
        <p>
            Copyright © {currentYear} @ajlan-kp
        </p>
        </footer>
        
    </div>
}
export default Footer;