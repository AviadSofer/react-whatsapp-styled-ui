import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SmartphoneDesign, StyledWhatsapp } from './styles/WhatsappChatUi.styled.js';
import Footer from './Footer';
import Header from './Header';

interface Props {
  size: number,
  phoneNumber: string,
  message: string
}

const WhatsappUi: React.FC<Props> = (props) => {
  const { size } = props
  const theme = {
    size,
    bg: '#075E54'
  }
  
  return (
    <ThemeProvider theme={theme}>
      <SmartphoneDesign >
          <StyledWhatsapp>
            <Header {...props}/>
            <Footer {...props}/>
          </StyledWhatsapp>
      </SmartphoneDesign> 
    </ThemeProvider>
  )
}

export default WhatsappUi;
