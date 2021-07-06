import React from 'react'
import {StyledMain} from './styles'

const PageWrapper = ({children}) => {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  )
}

export default PageWrapper
