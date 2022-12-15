import styled from "styled-components";


export const ModalBackground = styled.div`
  position: fixed;
  opacity: 0.6;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  z-index: 5;
`

export const ModalBox = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background: white;
  width: 85%;
  height: 85%;
  border: 0.3rem solid black;
  border-radius: 0.5rem;
  top: 10%;
  left: 7.25%;
  z-index: 10;

  @media only screen and (min-device-width: 320px) and (max-device-width: 425px){
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;
    border: 0.3rem solid black;
    border-radius: 0.35rem;
    top: 5%;
    left: 2.75%;
  }

  @media (min-device-width: 600px){
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 75%;
    border: 0.3rem solid black;
    border-radius: 0.5rem;
    top: 12.5%;
    left: 2%;
  }

  @media (min-device-width: 768px){
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 90%;
    border: 0.3rem solid black;
    border-radius: 0.5rem;
    top: 5%;
    left: 2%;
  }

  @media (min-device-width: 1024px){
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 85%;
    border: 0.3rem solid black;
    border-radius: 0.5rem;
    top: 7.5%;
    left: 2%;
  }

  @media (min-device-width: 1440px){
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 85%;
    border: 0.3rem solid black;
    border-radius: 0.5rem;
    top: 7.5%;
    left: 5%;
  }

  @media (min-device-width: 1920px){
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 85%;
    height: 85%;
    border: 0.3rem solid black;
    border-radius: 0.5rem;
    top: 7.5%;
    left: 7.5%;
  }
`

export const PicBox = styled.div`
  display: flex;
  align-content: center;
  width: 50%;
  height: 100%;

  @media only screen and (min-device-width: 1366px) and (max-device-height: 1024px) and (-webkit-min-device-pixel-ratio: 2)  and (orientation: landscape){
    width: 50%;
    height: 100%;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 424px){
    width: 100%;
    height: 50%;
  }

  @media only screen and (min-device-width: 425px){
    width: 100%;
    height: 50%;
  }

  @media only screen and (min-device-width: 600px){
    width: 50%;
    height: 100%;
  }

  @media only screen and (min-device-width: 768px){
    width: 60%;
    height: 100%;
  }

  @media only screen and (min-device-width: 1024px){
    width: 65%;
    height: 100%;
  }

  @media only screen and (min-device-width: 1440px){
    width: 70%;
    height: 100%;
  }

  @media only screen and (min-device-width: 1920px){
    width: 70%;
    height: 100%;
  }
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  @media only screen and (min-device-width: 1366px) and (max-device-height: 1024px) and (-webkit-min-device-pixel-ratio: 2)  and (orientation: landscape){
    width: 50%;
    height: 100%;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 424px){
    width: 100%;
    height: 50%;
  }

  @media only screen and (min-device-width: 425px){
    width: 100%;
    height: 50%;
  }

  @media only screen and (min-device-width: 600px){
    width: 50%;
    height: 100%;
  }


  @media only screen and (min-device-width: 768px){
    width: 40%;
    height: 100%;
  }

  @media only screen and (min-device-width: 1024px){
    width: 35%;
    height: 100%;
  }

  @media only screen and (min-device-width: 1440px){
    width: 30%;
    height: 100%;
  }

  @media only screen and (min-device-width: 1920px){
    width: 30%;
    height: 100%;
  }
`


export const ModalButtons = styled.button`
  justify-content: center;
  height: 2rem;
  font-size: 15px;
  display: inline-block;
  background: black;
  border: none;
  color: white;
  font-weight: bold;
  width: 10rem;
  gap: 10px;
  margin: 3px;
  &:hover{
    cursor: pointer;
    color: red;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 424px){

  }

  @media (min-width: 425px){

  }

  @media (min-width: 550px){

  }

  @media (min-width: 650px){

  }

  @media (min-width: 768px){

  }

  @media (min-width: 838px){

  }

  @media (min-width: 950px){

  }

  @media (min-width: 1024px){

  }

  @media (min-width: 1200px){

  }

  @media (min-width: 1350px){

  }

  @media (min-width: 1440px){

  }

  @media (min-width: 1920px){

  }
`

export const RingDescription = styled.p`
  font-size: 30px;
  padding: 10px;
  font-weight: bold;
  width: 90%;

  @media only screen and (min-device-width: 320px) and (max-device-width: 424px){
    font-size: 18px;
  }

  @media only screen and (min-device-width: 425px){
    font-size: 20px;
  }

  @media only screen and (min-device-width: 600px){
    font-size: 20px;
  }


  @media only screen and (min-device-width: 768px){
    font-size: 20px;
  }

  @media only screen and (min-device-width: 1024px){
    font-size: 25px;
  }

  @media only screen and (min-device-width: 1440px){
    font-size: 25px;
  }

  @media only screen and (min-device-width: 1920px){
    font-size: 35px;
  }
`