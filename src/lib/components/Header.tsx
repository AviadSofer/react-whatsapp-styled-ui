import React from 'react';
import { Clock, StatusBarIcon, Nav, StatusBar, StyledHeader } from './styles/Header.styled';
import { Icon } from './styles/Icon.styled';
import signelIcon from '../assets/img/signal.png';
import wifiIcon from '../assets/img/wifi.png';
import batteryIcon from '../assets/img/battery.png';
import arrowIcon from '../assets/img/arrow.png';
import videoIcon from '../assets/img/video.png';
import profileIcon from '../assets/img/profile.png';
import phoneIcon from '../assets/img/phone.png';
import moreIcon from '../assets/img/more.png';
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
        <StatusBarIcon src={signelIcon}/>
        <StatusBarIcon src={wifiIcon}/>
        <StatusBarIcon src={batteryIcon}/>
      </StatusBar>
      <Nav>
        <Icon width='8%' src={arrowIcon}/>
        <Icon width='13%' src={profileIcon}/>
        <PhoneNumber {...props}/>
        <Icon src={videoIcon}/>
        <Icon src={phoneIcon}/>
        <Icon src={moreIcon}/>
      </Nav>
    </StyledHeader>
  )
}

export default Header;
