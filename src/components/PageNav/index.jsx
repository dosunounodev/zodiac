import React from 'react'
import { useHistory } from 'react-router-dom';
import { useGetLocation } from 'hooks/useGetLocation';
import {StyledIcon} from './styles'


const PageNav = () => {
  const location = useGetLocation()
  const history = useHistory()

  return (
    <>
      {location === 'Bienvenidx'
        ? <StyledIcon className="fas fa-home"></StyledIcon>
        : <StyledIcon className="fas fa-arrow-left" onClick={() => history.goBack()}></StyledIcon>}
    </>
  )
}

export default PageNav
