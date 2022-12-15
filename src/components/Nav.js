import { Link } from "react-router-dom";
import { Wrapper, NavbarItems, Logo, } from "../style/nav.styled";
import React from "react";
import "../style/nav.css";
import logo from "../images/helios-logo-1.png";


const Nav = () => {


    return (

    <Wrapper className="sizing">
        <Logo src={logo} />
        <Link className="navBarLinks" to="/"><NavbarItems>Home</NavbarItems></Link>
        <Link className="navBarLinks" to="/collection"><NavbarItems>Collection</NavbarItems></Link>
        <Link className="navBarLinks" to="/contact"><NavbarItems>Contact</NavbarItems></Link>
    </Wrapper>
);
};

export default Nav;

