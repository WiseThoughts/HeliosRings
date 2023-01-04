import { Link } from "react-router-dom";
import { Wrapper, Wrapper2, NavbarItems, Logo, } from "../style/nav.styled";
import React from "react";
import "../style/nav.css";
import logo from "../images/helios-logo-1.png";
import InstaLogov3 from "../images/instagramlogoblackwhite.png";


const Nav = () => {


    return (

    <Wrapper className="sizing">
        <Link to="/"><Logo src={logo} /></Link>
        <Wrapper2>
        <Link className="navBarLinks" to="/"><NavbarItems>Home</NavbarItems></Link>
        <Link className="navBarLinks" to="/collection"><NavbarItems>Collection</NavbarItems></Link>
        <a className="navBarLinks" href="https://www.etsy.com/uk/shop/HeliosRingsLTD?ref=profile_header"><NavbarItems>Store</NavbarItems></a>
        <Link className="navBarLinks" to="/contact"><NavbarItems>Contact</NavbarItems></Link>
        </Wrapper2>
        <a href="https://www.instagram.com/helios_rings/"><Logo src={InstaLogov3} /></a>
    </Wrapper>
);
};

export default Nav;

//safe keeping: <Link className="navBarLinks" to="/"><NavbarItems>Home</NavbarItems></Link>
// import InstaLogov1 from "../images/instagramlogowhite.png";
// import InstaLogov2 from "../images/instagramlogoblack.png";