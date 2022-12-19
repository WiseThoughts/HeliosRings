import { Link } from "react-router-dom";
import { Wrapper, NavbarItems, Logo, } from "../style/nav.styled";
import React from "react";
import "../style/nav.css";
import logo from "../images/helios-logo-1.png";
import InstaLogo from "../images/instagramlogowhite.png";


const Nav = () => {


    return (

    <Wrapper className="sizing">
        <Link to="/"><Logo src={logo} /></Link>
        <Link className="navBarLinks" to="/"><NavbarItems>Home</NavbarItems></Link>
        <Link className="navBarLinks" to="/collection"><NavbarItems>Collection</NavbarItems></Link>
        <Link className="navBarLinks" to="/contact"><NavbarItems>Contact</NavbarItems></Link>
        <Link className="navBarLinks" to={{ pathname: "https://www.etsy.com/uk/shop/HeliosRingsLTD?ref=profile_header"}} target="_blank"><NavbarItems>Store</NavbarItems></Link>
        <Link to={{ pathname: "https://www.instagram.com/helios_rings/"}}  target="_blank"><Logo src={InstaLogo} /></Link>
    </Wrapper>
);
};

export default Nav;

