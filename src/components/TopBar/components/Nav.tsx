import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { getDocUrl } from '../../../views/Home/Home'

const Nav: React.FC = () => {
  const { t, i18n } = useTranslation()
  return (
    <StyledNav>
      <StyledLink target="_blank" href={getDocUrl(i18n)}>
        {t('nav.docs')}
      </StyledLink> 
      <StyledLink target="_blank" href="https://medium.com/@wenwenprotocol">
        {t('nav.blog')}
      </StyledLink>      
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 100px;
`

const StyledLink = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #A8B0C1;
  padding-right: 60px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[100]};
  }
`

export default Nav
