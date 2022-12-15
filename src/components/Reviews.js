import { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { Backward, Forward, ReviewBackground, ReviewImage, ReviewContent, ReviewText, ReviewName, ReviewHeader, ReviewDirect, ReviewButtons, RightReview, LeftReview, SplitReview, FBArrows, } from "../style/Reviews.styled";


function Reviews({ReviewArray}) {

    const [currentSlide, setCurrentSlide] = useState(0);


    const back = ()=>{
        const firstSlide = currentSlide === 0;
        const newSlide = firstSlide ? ReviewArray.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    };
    const forward = ()=>{
        const lastSlide = currentSlide === ReviewArray.length - 1;
        const newSlide = lastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    }

    return (
    <div>

    <ReviewBackground>
        <div>
            <ReviewHeader>Have a look at what customers are saying...</ReviewHeader>
        </div>

        <SplitReview>
        <LeftReview>
            <ReviewImage src={ReviewArray[currentSlide].productImg}></ReviewImage>
        </LeftReview>



        <RightReview>
        <ReviewContent>
        <div>
            <ReviewText>{ReviewArray[currentSlide].review}</ReviewText>
            <ReviewName>{ReviewArray[currentSlide].name}</ReviewName>
        </div>

        <div>
            <ReviewDirect>For custom quotes or any other questions please contact me</ReviewDirect>
            <ReviewButtons><Link to={{pathname: "/contact"}}> Contact Me</Link></ReviewButtons>
        </div>
        <div>
            <ReviewDirect>Or to browse though my past rings</ReviewDirect>
            <ReviewButtons><Link to={{pathname: "/collection"}}> View the Collection</Link></ReviewButtons>
        </div>

        <FBArrows>

            <Backward onClick={back}><IoChevronBackSharp /></Backward>

            <Forward onClick={forward}><IoChevronForwardSharp/></Forward>

        </FBArrows>

        </ReviewContent>
        </RightReview>
        </SplitReview>


        </ReviewBackground>

    </div>
    );
}

export default Reviews;
