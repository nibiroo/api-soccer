import React from "react";
import VersionProps from "../VersionProps";

const Footer = ()=> {
    return (
        <div>
            <footer className="main-footer">
                <strong>
                    Copyright © 2022 <a href="https://www.linkedin.com/in/guilhermedecarvalhomachado/">Guilherme Machado</a> e <a href="https://www.linkedin.com/in/agnaldo-pereira-da-silva-junior-2b08181a2/">Agnaldo Pereira</a>. 
                </strong>
                All rights reserved.
                <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b><VersionProps version="2022.02.01"/>
                </div>
            </footer>
        </div>
    );
}

export default Footer;