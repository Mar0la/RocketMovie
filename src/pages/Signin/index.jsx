import { Container, Form, Background } from "./style";
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function Signin() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Faça seu Login</h2>
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="senha"
          type="password"
          icon={FiLock}
        />
        <Button title="Entrar"/>
        <Link to="/register">
          Criar Conta
        </Link>
      </Form>
      <Background/>
    </Container>
  )
}