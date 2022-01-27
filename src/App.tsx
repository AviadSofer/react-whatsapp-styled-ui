import React from 'react'
import { StyledApp } from './components/styles/App.styled'
import WhatsappUi from './components/WhatsappUi'

const App: React.FC = () => {
  return (
    <StyledApp>
      <WhatsappUi message={''} size={70} phoneNumber={'9765555555555'}/>
    </StyledApp>
  )
}

export default App
