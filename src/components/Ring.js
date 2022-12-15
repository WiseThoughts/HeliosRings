import { Link } from "react-router-dom";
import { RingDisplayImage } from "../style/Ring.styled";

import Nav from "./Nav";


function Rings({RingImage, RingDes}) {

    return (
    <div>

    <Nav />

    <div>
        <RingDisplayImage src={RingImage} alt="ring" />
        <div>
            <p>{RingDes}</p>
            <button><Link to={{pathname: '/contact'}}>Contact Me</Link></button>
            <button>Shop</button>
        </div>
    </div>
    


    </div>);
}

export default Rings;