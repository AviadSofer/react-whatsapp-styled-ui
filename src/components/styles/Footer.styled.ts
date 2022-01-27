import styled from "styled-components";


export const StyledFooter = styled.footer`
display: flex;
justify-content: space-around;
align-items: flex-end;
margin-bottom: 5px;
`
export const MessageContainer = styled.div`
width: 80%;
background-color: white;
display: flex;
align-items: flex-end;
justify-content: space-around;
border-radius: 20px;
padding: 7px;
`

export const Emoji = styled.img`
width: 10%;
object-fit: cover;
`

export const AddFile = styled.img`
width: 10%;
object-fit: cover;
`

export const Camera = styled.img`
width: 10%;
object-fit: cover;
`

export const Send = styled.img`
width: 5%;
background-color: ${({ theme }) => theme.bg};
border-radius: 50%;
padding: 10px;
`
