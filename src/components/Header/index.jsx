import { Container, Profile } from "./style";
import { Input } from '../../components/Input'

export function Header() {
  return(
    <Container>
      <h2>RocketMovies</h2>
      <Input placeholder="Pesquisar Pelo Titulo"/>
      <Profile to="/profile">
        <div>
          <strong>Matheus Marins</strong>
          <span>Sair</span>
        </div>
        <img src="https://github.com/Mar0la.png" alt="Foto do usuário"/>
      </Profile>
    </Container>
  )
}