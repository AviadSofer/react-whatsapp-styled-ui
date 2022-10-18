import React from 'react';
import { useState,useEffect } from 'react';
import { StyledMessage } from './styles/Message.styled';

interface Props {
  message: string
}

const Message: React.FC<Props> = (props) => {
  const { message } = props;
  const [color, setColor] = useState('grey');
  useEffect(() => {
    if (message.length > 0) {
      setColor('black');
    } else {
      setColor('grey')
    };
  })
  return (
    <StyledMessage messageFontColor={color}>{message || 'Type a message'}</StyledMessage>
  )
}

export default Message;
