import React from 'react'
import {FooterContainer, FooterLinksItems, FooterLinkTitle, FooterLink } from '../style/Footer.styled'

const Footer = () => {
    
    return (
    <FooterContainer className="sizing">
        <FooterLinksItems>
            <FooterLinkTitle>SilverDale Rings</FooterLinkTitle>
            <FooterLink to='/contact'>Contact</FooterLink>
            <FooterLink to='/TermsConditions'>Terms & Conditions</FooterLink>
            <FooterLink to='/Returns Policy'>Returns Policy</FooterLink>
        </FooterLinksItems>
    </FooterContainer>
    )
}

export default Footer