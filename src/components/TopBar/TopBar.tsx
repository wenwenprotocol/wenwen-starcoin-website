import React from 'react'
import styled from 'styled-components'
import { isBrowser } from 'react-device-detect'
import Logo from '../../components/Logo/Logo'
import Nav from './components/Nav'
import LangSwicher from '../LangSwicher'
import MenuIcon from '../icons/MenuIcon'
import Icon from '../Icon'
import Button from '../Button'
import { useTranslation } from 'react-i18next'

interface TopBarProps {
  onPresentMobileMenu: () => void
}

const TopBar: React.FC<TopBarProps> = ({ onPresentMobileMenu }) => {
  const { t } = useTranslation()

  return (
    <StyledTopBar>
      <StyledTopBarLeft>
        <Logo />
      </StyledTopBarLeft>
      {isBrowser ?<StyledTopBarRight>
        <StyledNavWrap><Nav /></StyledNavWrap>
        <StyledButtonWrapper><Button text={t('home.launch_app')} href="https://app.wenwen.money" size="sm" /></StyledButtonWrapper>
        <LangSwicher />
      </StyledTopBarRight>: null}
      <StyledMenuButton onClick={onPresentMobileMenu}>
          <Icon><MenuIcon /></Icon>
      </StyledMenuButton>
    </StyledTopBar>
  )
}

const StyledTopBar = styled.div`
  position: fixed;
  z-index: 15;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: 100px;
  backdrop-filter: blur(31px);
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    position: relative;
    justify-content: space-between;
    padding: 0 25px;
    height: 80px;
  }
`

const StyledTopBarLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: ${(props) => props.theme.siteWidth}px;
`

const StyledTopBarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const StyledNavWrap = styled.div`
  margin-left: 90px;  
`

const StyledButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  z-index: 15;
  margin-right: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    justify-content: center;
    margin: 0;
  }
`

const StyledMenuButton = styled.button`
  background: none;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
  display: none;
  color: ${props => props.theme.color.grey[400]};
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    align-items: center;
    display: flex;
    height: 36px;
    justify-content: center;
    width: 36px;
  }
`

export default TopBar
