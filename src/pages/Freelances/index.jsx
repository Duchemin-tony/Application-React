import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/color'

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
]

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

const TextContainer = styled.div`
  text-align: center;
  padding: 80px;
`

const TitleContainer = styled.h1`
  margin-bottom: 50px;
`
const SubTitleContainer = styled.p`
  color: ${colors.secondary};
  font-weight: 300;
`

function Freelances() {
  return (
    <div>
      <TextContainer>
        <TitleContainer>Trouvez votre prestataire</TitleContainer>
        <SubTitleContainer>
          Chez Shiny nous réunissons les meilleurs profils pour vous.
        </SubTitleContainer>
      </TextContainer>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card key={`${profile.name}-${index}`} label={profile.jobTitle} title={profile.name} />
        ))}
      </CardsContainer>
    </div>
  )
}

export default Freelances
