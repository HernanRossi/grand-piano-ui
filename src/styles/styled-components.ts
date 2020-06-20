import styled, { keyframes } from 'styled-components'
import Logo from  '../assets/Logo-red-whitebg.png'

const logoAnimation = keyframes`
  0% {
    width: 125px;
    height:95px;
    opacity: 0;
  }
  50% {
    width: 250px;
    height: 190px;
    opacity: 0.85;
  }
  100% {
    width: 125px;
    height:95px;
    opacity: 0;
  }
}`

export const LogoLoading = styled.div`
  background-size: 100% 100%;
  background-image: url(${Logo});
  width: 250px;
  height: 190px;
  -webkit-animation: ${logoAnimation} 4s cubic-bezier(.85,.12,.31,.98) infinite;
  animation: ${logoAnimation}  4s cubic-bezier(.85,.12,.31,.98) infinite;
  margin: auto;
  margin-top: 125px;
`
export const LogoDiv = styled.div`
  background-size: 100% 100%;
  background-image: url(${Logo});
  width: 62px;
  height: 47px;
  margin: auto;
`
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 125px;
`