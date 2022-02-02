import React from 'react';
import { MessageContainer, Send, StyledFooter } from './styles/Footer.styled';
import Message from './Message';
import emojiIcon from '../assets/img/emo.png';
import addFileIcon from '../assets/img/add.png';
import cameraIcon from '../assets/img/camera.png';
import sendIcon from '../assets/img/send.png';
import { Icon } from './styles/Icon.styled';

interface Props {
  phoneNumber: string,
  message: string
}

const Footer: React.FC<Props> = (props) => {
  const { phoneNumber, message } = props;

  function createLink () {
    const link = `https://wa.me/${phoneNumber}}?text=${message}`;
    window.open(link, "_blank");
  }
  
  return (
    <StyledFooter>
      <MessageContainer>
        <Icon width='10%' src={emojiIcon}/>
        <Message {...props}/>
        <Icon width='10%' src={addFileIcon}/>
        <Icon width='10%' src={cameraIcon}/>
      </MessageContainer>
      <Send src={sendIcon} onClick={createLink}/>
    </StyledFooter>
  )
}

export default Footer;
