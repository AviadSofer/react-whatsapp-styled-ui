import React from 'react'
import { StyledApp } from './lib/components/styles/App.styled'
import WhatsappUi from './lib/components/WhatsappUi'

const App: React.FC = () => {
  return (
    <StyledApp>
      <WhatsappUi message={''} size={60} phoneNumber={'9765555555555'}/>
    </StyledApp>
  )
}

export default App
