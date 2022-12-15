import styled from "styled-components";
import {Link} from 'react-router-dom';


export const FooterContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: black;
    padding: 30px;
    width: auto;
    position: relative;
    z-index: 1;
    border-top: 3px solid white;
`

export const FooterLinksItems = styled.a`
    font-size: 25px;
    margin-right: 15px;
    color: white;
    padding: 0px 17px;

    @media (min-device-width: 320px){
        font-size: 20px;
    }

    @media (min-device-width: 450px){
        font-size: 20px;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 20px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color: white;
    text-decoration: none;
    padding-right: 10px; 
    margin-bottom: 0.5rem;
    font-size: 18px;
    &:hover {
        cursor: pointer;
    }
`

