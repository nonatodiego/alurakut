import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(props) {
  return (
    <Box as="aside">
      <img
        src={`https://github.com/${props.githubUser}.png`}
        style={{ borderRadius: '8px' }}
      />
      <hr />
      <p>
        <a className="boxLink" href="https://github.com/${props.githubUser}">
          @
          {props.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  // useState
  const [comunidades, setComunidades] = React.useState([{
    id: new Date().toISOString,
    title: 'Eu odeio acordar cedo',
    image: 'https://img10.orkut.br.com/community/52cc4290facd7fa700b897d8a1dc80aa.jpg'
  }]);


  // definindo usuario da foto por meio de props
  const githubUser = 'nonatodiego';
  const myName = 'Diego Nonato';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'marcobrunodev',
    'felipefialho',
    'peas',
    'rafaballerini',
  ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>

        {/* PROFILE AREA */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>

        {/* WELCOME AREA */}
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box className="title">
            <h1 className="subTitle">Dev por: {myName}</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCreateCommunity(e){
              // Previne o recarregamento da página
              e.preventDefault();

              const dadosDoForm = new FormData(e.target);              

              // add os dados da comunidades do forma
              const comunidade = {
                titulo: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              }

              // atualizando comunidades c/ react.useState
              const comunidadesAtualizadas = [...comunidades, comunidade]
              setComunidades(comunidadesAtualizadas)
            }}>
              <div>
                <input
                  name="title"
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div> 
                <input
                  name="image"
                  placeholder="Coloque uma URL"
                  aria-label="Coloque uma URL"
                  type="text"
                />
              </div>

              <button>
                Criar comunidade
              </button>
              </form>
          </Box>
        </div>

        {/* PROFILE RELATION AREA */}
        <div className="profileRelationArea" style={{ gridArea: 'profileRelationArea' }}>
          <ProfileRelationsBoxWrapper>

            {/* COMUNIDADE */}
            <h2 className="smallTitle">Comunidades ( )</h2>
            <ul>
              {comunidades.map((item) => (
                <li key={item.id}>
                  <a href="/users/${item}" key={item.title}>
                    <img src={item.image} />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>

          {/* PESSOAS DA COMUNIDADE */}
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade Dev (
              {pessoasFavoritas.length}
              )
            </h2>
            <ul>
              {pessoasFavoritas.map((item) => (
                <li key={item}>
                  <a href="/users/${item}" key={item}>
                    <img src={`https://github.com/${item}.png`} />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
