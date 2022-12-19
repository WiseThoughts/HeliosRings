import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding: 30px;
    width: auto;
    position: relative;
    z-index: 0;
    border-bottom: 10px double white;
    border-top: 10px double white;


    @media (max-device-width: 550px){
        flex-direction: column;
        width: auto;
    }

`;

export const NavbarItems = styled.a`
    font-size: 25px;
    margin-right: 15px;
    margin-left: 15px;
    color: white;
    padding: 15px;
    &:hover {
        cursor: pointer;
        background: white;
        color: black;
        padding: 13px;
        border: 2px solid grey;
    }

    @media (max-device-width: 320px){
        display: felx;
        flex-direction: coloumn;
    }

    @media (max-device-width: 550px){
        margin: 0px;
        padding: 0px;
    &hover {
        padding: 0px;
        border: none;
        background: black;
        colour: white;
    }

    }
`;


export const Logo = styled.img`
    display: flex;
    height: 40px;
    outline: 2px solid white;
    border-radius: 50%;

`

