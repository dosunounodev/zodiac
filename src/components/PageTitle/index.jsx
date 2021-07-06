import React from 'react'
import { useGetLocation } from 'hooks/useGetLocation';
import {StyledTitle} from './styles'

const PageTitle = () => {

const location = useGetLocation()

  return (
    <StyledTitle>
      {location}
    </StyledTitle>
  )
}

export default PageTitle
