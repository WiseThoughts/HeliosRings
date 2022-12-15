import "../style/Collection.styled"

import Nav from "./Nav";
import Ring2 from "../images/ringfive.jpg"
import Ring3 from "../images/ringfour.jpg"
import Ring4 from "../images/ringone.jpg"
import Ring5 from "../images/ringthree.jpg"
import Ring6 from "../images/ringtwo.jpg"
import Ring7 from "../images/ringone.jpg"
import RingModal from "./Modal/Modal";

import GreyRainbowMI from "../images/greyrainbowroyalblueMI.jpg";
import SnowFireBoxMI from "../images/snowfireboxMI.jpg";
import SnowFireFaceMI from "../images/snowfirefaceMI.jpg";
import SnowFireTopCloseMI from "../images/snowfiretopcloseMI.jpg";
import SnowFireTopMI from "../images/snowfiretopMI.jpg";
import StormtrooperFaceMI from "../images/stormtrooperfaceMI.jpg";
import StormtrooperTopCloseMI from "../images/stormtroopertopcloseMI.jpg";
import StormtrooperTopMI from "../images/stormtroopertopMI.jpg";

import GreyRainbowFace from "../images/greyrainbowface.jpg";
import GreyRainbowTop from "../images/greyraindbowtop.jpg"
import SnowFireBox from "../images/snowfirebox.jpg";
import SnowFireFace from "../images/snowfireface.jpg";
import SnowFireTopClose from "../images/snowfirefaceclose.jpg";
import SnowFireTop from "../images/snowfiretop.jpg";
import StormtrooperFace from "../images/stormtrooperface.jpg";
import StormtrooperTop from "../images/stormtroopertop.jpg";

import {Images, MappedItems, RImage } from '../style/Collection.styled'
import Footer from "./Footer";
import React, { useState } from "react";




const Collection = () => {


    const [RingImage, SetRingImage] = useState();
    const [RingImage2, SetRingImage2] = useState();
    const [RingImage3, SetRingImage3] = useState();
    const [RingImage4, SetRingImage4] = useState();
    const [RingDes, SetRingDes] = useState();
    const [Modal, SetModal] = useState(false);



    const ringArray =[
        {
        imgsrc: SnowFireBoxMI,
        Img2: SnowFireFaceMI,
        Img3: SnowFireTopMI,
        Img4: SnowFireTopCloseMI,
        ringdes: "This is a size 11 Tungsten Carbide ring with Snow & Fire opal inlay. One of my favourite desgins and comes out really well. MI phone version."
        },
        {
        imgsrc: SnowFireBox,
        Img2: SnowFireFace,
        Img3: SnowFireTop,
        Img4: SnowFireTopClose,
        ringdes: "This is a size 11 Tungsten Carbide ring with Snow & Fire opal inlay. One of my favourite desgins and comes out really well. Samsung S22 phone version."
        },
        {
        imgsrc: StormtrooperFaceMI,
        Img2: StormtrooperTopMI,
        Img3: StormtrooperTopCloseMI,
        ringdes: "This ring has a blaack ceramic size 11 core with a 3/4 lip, one side is matt black C-Tek and the top is white G10. I'm nicknaming it teh StormTrooper ring and I think the classic black and white combo really stands out. MI phone version."
        },
        {
        imgsrc: StormtrooperFace,
        Img2: StormtrooperTop,
        ringdes: "This ring has a blaack ceramic size 11 core with a 3/4 lip, one side is matt black C-Tek and the top is white G10. I'm nicknaming it teh StormTrooper ring and I think the classic black and white combo really stands out. Samsung S22 phone version."
        },
        {
        imgsrc: GreyRainbowMI,
        ringdes: "This is a size 11 grade 5 Titanium 3 layer core. The outer layers are Peacock Blue Opal and the center layer is Grey Rainbow Opal. MI phone version."
        },
        {
        imgsrc: GreyRainbowFace,
        Img2: GreyRainbowTop,
        ringdes: "This is a size 11 grade 5 Titanium 3 layer core. The outer layers are Peacock Blue Opal and the center layer is Grey Rainbow Opal. Samsung S22 phone version."
        },
        {
        imgsrc:Ring2,
        Img2: Ring3,
        Img3: Ring4,
        Img4: Ring5,
        ringdes:"This is a set of five example rings. They include; a 6mm size 11 tungsten ring with Blue opal, a 6mm size 11 tungsten ring with Orange opal, a 8mm size 11 white ceramic ring with spring-green opal & black fire #2 opal, a 8mm size 11 Black ceramic ring with abolone insert, a 8mm size 10.5 flamed Timascus ring with a carbon fiber liner."
        },
        {
        imgsrc:Ring3,
        ringdes:"trail"
        },
        {
        imgsrc:Ring4,
        ringdes:"trail"
        },
        {
        imgsrc:Ring5,
        ringdes:"trail"
        },
        {
        imgsrc:Ring6,
        ringdes:"trail"
        },
        {
        imgsrc:Ring7,
        ringdes:"trail"
        },
        {
        imgsrc:Ring2,
        ringdes:"trail"
        },
        {
        imgsrc:Ring3,
        ringdes:"trail"
        },
        {
        imgsrc:Ring6,
        ringdes:"trail"
        },
        {
        imgsrc:Ring7,
        ringdes:"trail"
        },
        {
        imgsrc:Ring2,
        ringdes:"trail"
        },
        {
        imgsrc:Ring3,
        ringdes:"trail"
        },
        {
        imgsrc:Ring2,
        ringdes:"trail: ring 2"
        },
        {
        imgsrc:Ring3,
        ringdes:"trail"
        },
        {
        imgsrc:Ring4,
        ringdes:"trail"
        },
    ]


    const callImage = (imgsrc, ringdes, Img2, Img3, Img4)=>{
        SetRingImage(imgsrc);
        SetRingDes(ringdes);
        SetRingImage2(Img2);
        SetRingImage3(Img3);
        SetRingImage4(Img4);
    }



    return ( 
    <div>
        <div>
            <Nav />
        </div>

        <div>
            <RingModal {...{RingImage, RingImage2, RingImage3, RingImage4, RingDes, Modal, SetModal, ringArray}} />
        </div>

        <Images >
            {ringArray.map((item, index) =>{
                return(
                <MappedItems key={index}>
                    <RImage src={item.imgsrc} onClick={() => {callImage(item.imgsrc, item.ringdes, item.Img2, item.Img3, item.Img4); SetModal(true)}} />
                </MappedItems>
                )
            })}
        </Images>



    <div>
        <Footer />
    </div>

    </div>
    );
}


export default Collection;

