import React from 'react';
import { MessageContainer, Send, StyledFooter } from './styles/Footer.styled';
import Message from './Message';
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
        <Icon width='10%' src={'https://res.cloudinary.com/dmjmaixrd/image/upload/v1645302905/emo_iq9k1m.png'}/>
        <Message {...props}/>
        <Icon width='10%' src={'https://res.cloudinary.com/dmjmaixrd/image/upload/v1645302903/add_rxbws3.png'}/>
        <Icon width='10%' src={'https://res.cloudinary.com/dmjmaixrd/image/upload/v1645302903/camera_mxoofa.png'}/>
      </MessageContainer>
      <Send src={'https://res.cloudinary.com/dmjmaixrd/image/upload/v1645302948/send_eia4sd.png'} onClick={createLink}/>
    </StyledFooter>
  )
}

export default Footer;
