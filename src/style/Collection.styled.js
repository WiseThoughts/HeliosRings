import styled from "styled-components";

export const Images = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
    max-width: 100%;
    justify-content: center;

    
    @media only screen and (min-device-width: 320px) and (max-device-width: 768px){
        width: auto;
    }

    @media (min-width: 769px){

    }

    @media (min-width: 1440px){

    }

    @media (min-width: 1920px){

    }
`

export const MappedItems = styled.div`
    display: flex;
    flex-direction: column;
`

export const RImage = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    border: 5px solid black;
    margin: 3px;
    &:hover{
        cursor: pointer;
        border: 5px solid red;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 424px){
        width: 300px;
        height: 300px;
    }

    @media (min-device-width: 425px){
        width: 370px;
        height: 370px;
    }

    @media (min-device-width: 550px){
        width: 440px;
        height: 440px;
    }

    @media (min-device-width: 650px){
        width: 285px;
        height: 285px;
    }

    @media (min-device-width: 768px){
        width: 345px;
        height: 345px;
    }

    @media (min-device-width: 838px){
        width: 250px;
        height: 250px;
    }

    @media (min-device-width: 950px){
        width: 290px;
        height: 290px;
    }

    @media (min-device-width: 1024px){
        width: 310px;
        height: 310px;
    }

    @media (min-device-width: 1200px){
        width: 370px;
        height: 370px;
    }

    @media (min-device-width: 1350px){
        width: 420px;
        height: 420px;
    }

    @media (min-device-width: 1440px){
        width: 325px;
        height: 325px;
    }

    @media (min-device-width: 1920px){
        width: 440px;
        height: 440px;
    }

    @media (min-device-width: 2200px){
        width: 520px;
        height: 520px;
    }

    @media (min-device-width: 2400px){
        width: 570px;
        height: 570px;
    }

    @media (min-device-width: 2560px){
        width: 600px;
        height: 600px;
    }

    @media (min-device-width: 2700px){
        width: 640px;
        height: 640px;
    }

    @media (min-device-width: 3000px){
        width: 700px;
        height: 700px;
    }
`
