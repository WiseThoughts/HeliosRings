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
    &:hover{
    }

    @media (max-device-width: 320px){
        display: felx;
        flex-direction: coloumn;
        width: auto;
    }

    @media (max-device-width: 375px){
        display: felx;
        flex-direction: coloumn;
        width: auto;
    }

    @media (max-device-width: 450px){
        display: felx;
        flex-direction: coloumn;
        width: auto;
    }

`;

export const NavbarItems = styled.a`
    font-size: 25px;
    margin-right: 15px;
    color: white;
    padding: 15px;
    &:hover {
        cursor: pointer;
        background: white;
        color: black;
        padding: 13px;
        border: 2px solid grey;
        transtion: 0.5s;
    }

    @media (max-device-width: 320px){
        display: felx;
        flex-direction: coloumn;
    }

    @media (max-device-width: 450px){
        display: felx;
        flex-direction: coloumn;
    }
`;


export const Logo = styled.img`
    display: flex;
    height: 40px;
    border: 2px solid white;
    border-radius: 50%;
`

