import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Container, Form, Avatar, ButtonLink } from './style'
import  { Input } from '../../components/Input'
import  { Button } from '../../components/Button'

export function Profile() {
  return(
    <Container>
      <header>
        <ButtonLink to="/">
          <FiArrowLeft/>
          Voltar
        </ButtonLink>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/Mar0la.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera/>
            <input id="avatar" type="text" />
          </label>
        </Avatar>
        <Input
          placeholder='Nome'
          type="text"
          icon={FiUser}
        />
        <Input
          placeholder='Email'
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder='Senha Atual'
          type="password"
          icon={FiLock}
        />
        <Input
          placeholder='Nova Senha'
          type="password"
          icon={FiLock}
        />
        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}