import React from 'react'
import PageTitle from 'components/PageTitle';
import PageNav from 'components/PageNav';
import { StyledTopBar } from './styles'

const TopBar = () => {
  return (
    <StyledTopBar>
      <PageNav></PageNav>
      <PageTitle></PageTitle>
    </StyledTopBar>
  )
}

export default TopBar
