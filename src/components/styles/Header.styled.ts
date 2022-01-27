import styled from "styled-components";

export const StyledHeader = styled.header`
background-color: #128C7E;
`

export const StatusBar = styled.div`
background-color: #075E54;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Clock = styled.span`
flex: 1;
text-align: left;
color: white;
font-size: ${({ theme }) => theme.size * 0.025 + 'vh' || '2.3vh'};
margin: 4px;
`

export const StatusBarIcon = styled.img`
width: 4%;
margin-left: 3px;
object-fit: cover;
margin: 2px;
`

export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
margin: 10px 0px 10px 0px;
`

export const ArrowBack = styled.img`
width: 8%;
`

export const Profile = styled.img`
width: 13%;
`

export const VideoIcon = styled.img`
width: 7%;
`

export const PhoneIcon = styled.img`
width: 7%;
`

export const MoreIcon = styled.img`
width: 7%;
`