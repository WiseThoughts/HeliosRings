import Nav from "./Nav";
import Reviews from "./Reviews";
import Footer from "./Footer";
import Placeholder from "../images/ringplaceholder.jpg"
import {SplitPage, Splitimg, LeftSide, RightSide, HomeHeader, HomeSubHeader, HomeDirect, HomeButtons } from '../style/Home.styled'
import { Link } from "react-router-dom";

import Ring2 from "../images/ringfive.jpg"
import Ring3 from "../images/ringfour.jpg"
import Ring4 from "../images/ringone.jpg"
import Ring5 from "../images/ringthree.jpg"
import Ring6 from "../images/ringtwo.jpg"


function Home() {

    const ReviewArray =[
        { productImg: Ring2, review: "- Delighted with the ring, will be ordering many more -", name: "- Jasmin F -"},
        { productImg: Ring3, review: "- lovely piece -", name: "- Becky B -"},
        { productImg: Ring4, review: "- Fantastic craftmenship -", name: "- James N -"},
        { productImg: Ring5, review: "- Can't be beaten -", name: "- Alex D -"},
        { productImg: Ring6, review: "- My new EDC ring -", name: "- Benny Y -"},
    ];

    return (
        <div>


        <div>
            <Nav />
        </div>

        <SplitPage>
        <LeftSide>
        <Splitimg src={Placeholder} alt="ring placeholder" />
        </LeftSide>
        <RightSide>
        <div>
            <HomeHeader>Welcome to Helios Rings!</HomeHeader>
            <HomeSubHeader>You're One stop shop for Custom one of a kind rings</HomeSubHeader>
        </div>

        <div>
                <div>
                    <HomeDirect>For custom quotes or any questions please contact me</HomeDirect>
                    <HomeButtons><Link to={{pathname: "/contact"}}> Contact Me</Link></HomeButtons>
                </div>
                <div>
                    <HomeDirect>Or to browse though my past rings</HomeDirect>
                    <HomeButtons><Link to={{pathname: "/collection"}}> View the Collection</Link></HomeButtons>
                </div>
            </div>
            </RightSide>
            </SplitPage>


        <div>
            <div>
                <Reviews ReviewArray={ReviewArray} />
            </div>
        </div>


        <Footer />

        </div>
    );
}

export default Home;
