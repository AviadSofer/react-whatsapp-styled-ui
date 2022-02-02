import styled from "styled-components";
import bg from '../../assets/img/bg.png'

export const SmartphoneDesign = styled.div`
width: ${({ theme }) => theme.size * 0.6 + 'vh' || '30vh'};
position: relative;
margin: auto;
border: 16px black solid;
border-top-width: 60px;
border-bottom-width: 60px;
border-radius: 36px;

*:before {
  content: '';
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 10px;
}

*:after {
  content: '';
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 50%;
}
`

export const StyledWhatsapp = styled.div`
direction: ltr;
height: ${({ theme }) => theme.size + 'vh' || '50vh'};
width: ${({ theme }) => theme.size * 0.6 + 'vh' || '30vh'};
background-image: url(${bg});
display: flex;
flex-direction: column;
justify-content: space-between;
`
