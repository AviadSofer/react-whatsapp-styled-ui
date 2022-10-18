import React from 'react';
import { Clock, StatusBarIcon, Nav, StatusBar, StyledHeader } from './styles/Header.styled';
import { Icon } from './styles/Icon.styled';
import PhoneNumber from './PhoneNumber';

interface Props {
  phoneNumber: string
}

const Header: React.FC<Props> = (props) => {
  const date = new Date();
  return (
    <StyledHeader>
      <StatusBar>
        <Clock>{date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}</Clock>
        <StatusBarIcon src={'https://res.cloudinary.com/dmjmaixrd/image/upload/v1645302906/signal_yyclk0.png'}/>
        <StatusBarIcon src={'https://res.cloudinary.com/dmjmaixrd/image/upload/v1645302907/wifi_wwtrkn.png'}/>
        <StatusBarIcon src={'https://res.cloudinary.com/dmjmaixrd/image/upload/v1645302903/battery_iudfyf.png'}/>
      </StatusBar>
      <Nav>
        <Icon width='8%' flipHorizontally={true} src={'https://res.cloudinary.com/dmjmaixrd/image/upload/v1645302903/arrow_hbega1.png'}/>
        <Icon width='13%' src={'https://res.cloudinary.com/dmjmaixrd/image/upload/v1645302908/profile_mo2pz9.png'}/>
        <PhoneNumber {...props}/>
        <Icon src={'https://res.cloudinary.com/dmjmaixrd/image/upload/v1645302906/video_d5lurg.png'}/>
        <Icon src={'https://res.cloudinary.com/dmjmaixrd/image/upload/v1645302909/phone_bqzgoj.png'}/>
        <Icon src={'https://res.cloudinary.com/dmjmaixrd/image/upload/v1645302905/more_dqid8s.png'}/>
      </Nav>
    </StyledHeader>
  )
}

export default Header;
