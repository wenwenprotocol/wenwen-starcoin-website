import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import priceImg from '../../../assets/img/price.svg'

const Stability: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Title>{t('home.stability')}</Title>
      <Wrapper>
        <PriceImg src={priceImg} alt={t('home.stability')} />
        <Content>
          <ContentItem>
            <ContentTitle>{t('home.above_peg')}</ContentTitle>
            <Desc>{t('home.above_odd')}</Desc>
            <Desc>{t('home.above_even')}</Desc>
          </ContentItem>
          <ContentItem>
            <ContentTitle>{t('home.below_peg')}</ContentTitle>
            <Desc>{t('home.below_odd')}</Desc>
            <Desc>{t('home.below_even')}</Desc>             
          </ContentItem>       
        </Content>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    flex-direction: column;
    align-items: center;
  }
`

const Title = styled.h2`
  color: #ffffff;
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 70px;
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    font-size: 28px;
    line-height: 40px;
  }
`

const Content = styled.div`
  padding-left: 60px;
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    padding: 0 20px;
    margin-top: 60px;
    text-align: center;
  }
`

const ContentItem = styled.div`
  &:first-child {
    margin-bottom: 60px;
  }
`

const ContentTitle = styled.h3`
  color: #ffffff;
  font-weight: 600;
  font-size: 24px;
  margin: 0 auto;
  margin-bottom: 20px;
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    font-size: 18px;
  }
`

const Desc = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #A8B0C1;
  text-align: left;
`

const PriceImg = styled.img`
  margin-bottom: 30px;
  padding: 0 100px;
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: 50%;
    padding: 0;
  }
`

export default Stability