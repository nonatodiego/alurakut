import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';


function ProfileSidebar(props) {
  return (
    <Box>
       <img 
        src={`https://github.com/${props.githubUser}.png` }
        style={{ borderRadius: '8px' }}         
       />
    </Box>
  )
}

export default function Home() {
  
  // definindo usuario da foto por meio de props
  const githubUser = 'nonatodiego';
  const pessoasFavoritas = [
    'juunegreiros', 
    'omariosouto', 
    'marcobrunodev',
    'felipefialho',
    'peas',
    'rafaballerini'
  ]


  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser}/>
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea' }}>    
        <Box className="title">
          <h1>Bem-vindo(a)</h1>
          <OrkutNostalgicIconSet />
        </Box>
        </div>
        <div className='profileRelationArea' style={{gridArea: 'profileRelationArea' }}>    
        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
            Pessoas da comunidade Dev ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((item) => {
                return (
                  <li>
                    <a href={'/users/${item}'} key={item}>
                      <img src={`https://github.com/${item}.png`} />
                      <span>{item}</span>
                    </a>
                  </li>
                )
              })}
           </ul>
          </ProfileRelationsBoxWrapper>       
        </div>
      </MainGrid>
    </>
  )
}
