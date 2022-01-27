import { ArrowBack, Clock, StatusBarIcon, MoreIcon, Nav, PhoneIcon, Profile, StatusBar, StyledHeader, VideoIcon } from './styles/Header.styled';
import signelIcon from '../assets/img/signal.png';
import wifiIcon from '../assets/img/wifi.png';
import batteryIcon from '../assets/img/battery.png';
import arrowIcon from '../assets/img/arrow.png';
import videoIcon from '../assets/img/video.png';
import profileIcon from '../assets/img/profile.png';
import PhoneNumber from './PhoneNumber';
import phoneIcon from '../assets/img/phone.png';
import moreIcon from '../assets/img/more.png';

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
        <ArrowBack src={arrowIcon}/>
        <Profile src={profileIcon}/>
        <PhoneNumber {...props}/>
        <VideoIcon src={videoIcon}/>
        <PhoneIcon src={phoneIcon}/>
        <MoreIcon src={moreIcon}/>
      </Nav>
    </StyledHeader>
  )
}

export default Header;
