import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations';

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
    title: 'Queria sorvete, mas era feijão',
    image: 'https://img10.orkut.br.com/community/08d82085dab0b6ecb71cd49fd79d5a5c.jpeg',

  }]);
  console.log(comunidades)


  // definindo usuario da foto por meio de props
  const githubUser = 'nonatodiego';

  // nome inicial
  const myName = 'Diego Nonato';

  // array de pessoas da comunidade
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'marcobrunodev',
    'felipefialho',
    'peas',
    'rafaballerini',
    'nonatodiego',
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
            <h1 className="subTitle">Bem-vindo(a), {myName}</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCreateCommunity(e){
              // Previne o recarregamento da página
              e.preventDefault();

              const dadosDoForm = new FormData(e.target);              

              // add os dados da comunidades do form
              const comunidade = {
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
                link: dadosDoForm.get('link'),
              }

              // atualizando comunidades c/ react.useState
              const comunidadesAtualizadas = [...comunidades, comunidade]
              setComunidades(comunidadesAtualizadas)
            }}>
              <div>
                <input
                  name="title"
                  placeholder="Nome da comunidade"
                  aria-label="Nome da comunidade"
                  type="text"
                />
              </div>
              <div> 
                <input
                  name="image"
                  placeholder="Coloque uma URL para a imagem"
                  aria-label="Coloque uma URL"
                  type="text"
                />
              </div>
              <div>
                <input
                  name="link"
                  placeholder="Link para entrar na comunidade"
                  aria-label="Link para entrar na comunidade"
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
            <h2 className="smallTitle"> Comunidades ({comunidades.length})</h2>
            <ul>
              {comunidades.map((item) => (
                <li key={item.id}>
                  <a href={item.link} target="_blank" key={item.title}>
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
