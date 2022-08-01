import styled from 'styled-components'
import HomeIllustration from '../../assets/home-illustration.svg'
import colors from '../../utils/style/color'
import { StyledLink } from '../../utils/style/Atoms'

const StyledContainer = styled.div`
  display: flex;
  padding: 80px;
  background-color: ${colors.backgroundLight};
`

const StyledTitle = styled.h1`
  width: 65%;
  font-size: 2.8em;
  line-height: 1.8em;
`

function Home() {
  return (
    <StyledContainer>
      <div>
        <StyledTitle>
          Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
        </StyledTitle>
        <StyledLink to='/survey/1' $isFullLink>
          Faire le test
        </StyledLink>
      </div>
      <div>
        <img src={HomeIllustration} alt='img accueil' />
      </div>
    </StyledContainer>
  )
}

export default Home
