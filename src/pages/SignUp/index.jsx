import { Container, Form, Background } from "./style";
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'


import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function SignUp() {
  return(
    <Container>
      <Background/>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Crie sua Conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
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
        <Button title="Cadastrar"/>
        <Link to="/">
          <FiArrowLeft/>
          Voltar para o login
        </Link>
      </Form>
  
    </Container>
  )
}