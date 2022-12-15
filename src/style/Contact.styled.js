import styled from "styled-components";

export const ContactDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media only screen and (min-device-width: 320px) and (max-device-width: 424px){
        display: flex;
        flex-direction: column;
    }

    @media (min-device-width: 425px){
        display: flex;
        flex-direction: column;
    }

    @media (min-device-width: 768px){
        display: flex;
        flex-direction: row;
    }

    @media (min-device-width: 1440px){
        display: flex;
        flex-direction: row;
    }
`

export const FormDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 50%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    margin-top: 10%;
    margin-bottom: 20%;

    @media only screen and (min-device-width: 320px) and (max-device-width: 374px){
        margin-left: 10%;
    }

    @media (min-device-width: 375px){
        margin-left: 20%;
    }

    @media (min-device-width: 425px){
        margin-left: 25%;
    }

    @media (min-device-width: 768px){
        margin-left: 15%;
    }

    @media (min-device-width: 1024px){
        margin-left: 25%;
    }

    @media (min-device-width: 1440px){
        margin-left: 25%;
    }
`

export const Name = styled.input`
    width: max-content;
    height: 40px;
    font-size: 20px;
    padding: 5px;
    margin: 3px;
    margin-bottom: 20px;
    background: white;

    @media only screen and (min-device-width: 320px) and (max-device-width: 374px){
        font-size: 20px;
        padding: 3px;
        margin-bottom: 15px;
    }

    @media (min-device-width: 375px){
        font-size: 20px;
        padding: 3px;
        margin-bottom: 15px;
    }

    @media (min-device-width: 425px){
        font-size: 20px;
        padding: 3px;
        margin-bottom: 15px;
    }

    @media (min-device-width: 768px){
        font-size: 25px;
        padding: 5px;
        margin-bottom: 20px;
    }

    @media (min-device-width: 1024px){
        font-size: 25px;
        padding: 5px;
        margin-bottom: 20px;
    }

    @media (min-device-width: 1440px){
        font-size: 25px;
        padding: 5px;
        margin-bottom: 20px;
    }
`

export const Email = styled.input`
    width: max-content;
    height: 40px;
    font-size: 20px;
    padding: 5px;
    margin: 3px;
    margin-bottom: 20px;
    background: white;

    @media only screen and (min-device-width: 320px) and (max-device-width: 374px){
        font-size: 20px;
        padding: 3px;
        margin-bottom: 15px;
    }

    @media (min-device-width: 375px){
        font-size: 20px;
        padding: 3px;
        margin-bottom: 15px;
    }

    @media (min-device-width: 425px){
        font-size: 20px;
        padding: 3px;
        margin-bottom: 15px;
    }

    @media (min-device-width: 768px){
        font-size: 25px;
        padding: 5px;
        margin-bottom: 20px;
    }

    @media (min-device-width: 1024px){
        font-size: 25px;
        padding: 5px;
        margin-bottom: 20px;
    }

    @media (min-device-width: 1440px){
        font-size: 25px;
        padding: 5px;
        margin-bottom: 20px;
    }
`

export const Message = styled.textarea`
    width: 95%;
    height: 250px;
    font-size: 20px;
    padding: 5px;
    margin: 3px;
    margin-bottom: 20px;
    background: white;

    @media only screen and (min-device-width: 320px) and (max-device-width: 374px){
        font-size: 20px;
        padding: 3px;
        margin-bottom: 15px;
    }

    @media (min-device-width: 375px){
        font-size: 20px;
        padding: 3px;
        margin-bottom: 15px;
    }

    @media (min-device-width: 425px){
        font-size: 20px;
        padding: 3px;
        margin-bottom: 15px;
    }

    @media (min-device-width: 768px){
        font-size: 25px;
        padding: 5px;
        margin-bottom: 20px;
    }

    @media (min-device-width: 1024px){
        font-size: 25px;
        padding: 5px;
        margin-bottom: 20px;
    }

    @media (min-device-width: 1440px){
        font-size: 25px;
        padding: 5px;
        margin-bottom: 20px;
    }
`

export const Label = styled.label`
    font-size: 30px;
    color: white;
`

export const Send = styled.input`
    width: fit-content;
    font-size: 35px;
    padding: 10px 15px;
    border: 5px solid black;
    &:hover{
        cursor: pointer;
        border: 5px solid white;
        color: white;
        background-color: black;
    }
`



export const ConatctOuter = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    width: 50%;

    @media only screen and (min-device-width: 320px) and (max-device-width: 767px){
        font-size: 20px;
        width: fit-content;
        justify-content: flex-start;
    }

    @media (min-device-width: 768px){
        width: 50%;
    }
`

export const ContactBox = styled.div`
    background: rgba(0, 0, 0, 0.9);
    font-size: 35px;
    color: white;
    padding: 10px;
    width: 450px;
    height: min-content;
    border: 12px double white;

    @media only screen and (min-device-width: 320px) and (max-device-width: 374px){
        font-size: 20px;
        width: 100%;
    }

    @media (min-device-width: 375px){
        font-size: 25px;
        width: 100%;
    }

    @media (min-device-width: 425px){
        font-size: 30px;
        width: 100%;
    }

    @media (min-device-width: 768px){
        font-size: 25px;
        width: 75%;
        margin-left: 10%;
    }

    @media (min-device-width: 830px){
        font-size: 25px;
        width: 75%;
        margin-left: 0;
    }

    @media (min-device-width: 1024px){
        font-size: 33px;
        width: 75%;
        margin-left: 0;
    }

    @media (min-device-width: 1440px){
        font-size: 40px;
        width: 75%;
        margin-left: -30%;
    }
`