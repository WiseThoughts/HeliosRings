import styled from "styled-components";


export const SplitPage = styled.div`
    display: flex;

    @media only screen and (min-device-width: 320px) and (max-device-width: 888px){
        display: block;
        display: flex;
        flex-direction: column-reverse;
    }

    @media (min-device-width: 1440px){
        display: flex;
        flex-direction: row;
    }
`

export const LeftSide = styled.div`
    width: 50%;

    @media only screen and (min-device-width: 320px) and (max-device-width: 888px){
        width: 100%;
        text-align: center;
        padding-bottom: 20px;
    }

    @media (min-device-width: 1440px){
        width: 50%;
    }
`

export const RightSide = styled.div`
    width: 50%;
    text-align: center;
    padding-top: 270px;

    @media only screen and (min-device-width: 320px) and (max-device-width: 888px){
        width: 100%;
        margin: 0px;
        padding-top: 10px;
        padding-bottom: 20px;
    }

    @media (min-device-width: 1440px){
        width: 50%;
        text-align: center;
        align-self: center;
        padding: 0;
    }

    @media (min-device-width: 1920px){
        width: 50%;
        text-align: center;
        align-self: center;
        padding: 0;
    }
`

export const Splitimg = styled.img`
    height: 800px;
    width: 90%;
    margin: 5px;
    border: 15px double black; 
    object-fit: cover;

    @media only screen and (min-device-width: 320px) and (max-device-width: 888px){
        height: fit-content;
        margin: 0px;
        border: 8px double black;
    }

    @media (min-device-width: 1440px){
        height: 800px;
        width: 90%;
        margin: 5px;
        border: 15px double black; 
        object-fit: cover;
    }
`

export const HomeHeader = styled.h1`
    text-align: center;
    padding: 0px 0px 25px 0px;
    font-size: 65px;

    @media (min-device-width: 320px){
        font-size: 45px;
        padding: 0px 0px 10px 0px;
    }

    @media (min-device-width: 450px){
        font-size: 50px;
        padding: 0px 10px 15px 10px;
    }

    @media (min-width: 768px){

    }

    @media (min-width: 1024px){

    }

    @media (max-width: 1440px){
        
    }
`

export const HomeSubHeader = styled.h2`
    text-align: center;
    padding: 0px 0px 25px 0px;
    font-size: 35px;
    text-decoration: underline;

    @media (min-device-width: 320px){
        font-size: 25px;
        margin: 0px 20px;
        padding: 0px 0px 10px 0px;
    }

    @media (min-device-width: 450px){
        font-size: 25px;
        margin: 0px 20px;
        padding: 0px 0px 10px 0px;
    }

    @media (min-width: 768px){

    }

    @media (min-width: 1024px){

    }

    @media (max-width: 1440px){
        
    }
`

export const HomeDirect = styled.h5`
    text-align: center;
    padding: 10px 0px 10px 0px;
    font-size: 25px;

    @media (min-device-width: 320px){
        font-size: 20px;
        padding: 10px 10px 10px 10px;
    }

    @media (min-device-width: 450px){
        font-size: 20px;
        padding: 15px 15px 10px 15px;
    }

    @media (min-width: 768px){

    }

    @media (min-width: 1024px){

    }

    @media (max-width: 1440px){
        
    }
`

export const HomeButtons = styled.button`
    text-align: center;
    padding: 10px;
    font-size: 24px;
    background-color: black;
    color: white;
    border: 8px double white;

    @media (min-device-width: 320px){
        font-size: 20px;
        padding: 5px;
        border: 5px double white;
    }

    @media (min-device-width: 450px){
        font-size: 20px;
        padding: 5px;
        border: 5px double white;
    }

    @media (min-width: 768px){

    }

    @media (min-width: 1024px){

    }

    @media (max-width: 1440px){
        
    }
`
