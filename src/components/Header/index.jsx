import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import DarkLogo from '../../assets/dark-logo.png'

const StyledLogo = styled.img`
  height: 60px;
  width: 150px;
`

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
`

function Header() {
  return (
    <NavContainer>
      <div>
        <Link to='/'>
          <StyledLogo src={DarkLogo} />
        </Link>
      </div>
      <div>
        <StyledLink to='/'>Accueil</StyledLink>
        <StyledLink to='/freelances'>Profils</StyledLink>
        <StyledLink to='/survey/1' $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  )
}


export default Header
