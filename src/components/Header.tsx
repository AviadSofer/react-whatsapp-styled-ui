import { ArrowBack, MoreIcon, Nav, PhoneIcon, Profile, StyledHeader, VideoIcon } from './styles/Header.styled';
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
  return (
    <StyledHeader>
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
