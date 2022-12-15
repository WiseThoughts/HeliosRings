
import { Link } from 'react-router-dom';
import { ModalBackground, ModalButtons, ModalBox, TextBox, PicBox, RingDescription } from './Modal.styling'
import ModalSlides from './ModalSlides';



const Modal = ({Modal, SetModal, RingImage, RingImage2, RingImage3, RingImage4, RingDes, ringArray}) => {


    function scroll(){
        document.body.style.overflow="";
    }

    const ringPicArray =[
        {Img: RingImage},
        {Img: RingImage2},
        {Img: RingImage3},
        {Img: RingImage4},
    ]

    return Modal ? (
    <div>
        <ModalBackground />
            <ModalBox>
                <PicBox>
                    <ModalSlides {...{ringPicArray}} />
                </PicBox>
                <TextBox>
                    <RingDescription>{RingDes}</RingDescription>
                    <ModalButtons><Link to={{pathname: '/contact'}}>Contact Me</Link></ModalButtons>
                    <ModalButtons>Shop</ModalButtons>
                    <ModalButtons onClick={()=>{SetModal(false); scroll()}}>Close</ModalButtons>
                </TextBox>
            </ModalBox>

    </div>

) :null;
}

export default Modal


