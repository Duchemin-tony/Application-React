import styled from 'styled-components'
import error404 from '../../assets/404.svg'
import colors from '../../utils/style/color'

const StyledContainer = styled.div`
  padding: 80px;
  background-color: ${colors.backgroundLight};
  text-align: center;
`

function Error() {
  return (
    <StyledContainer>
      <p> Oups...</p>
      <img src={error404} alt='error404' />
      <h1>Il semblerait qu'il y ait un problème</h1>
    </StyledContainer>
  )
}

export default Error
