import { useState } from 'react'
import { Container, Form, Background } from "./style";
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function Signin() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const { signIn } = useAuth()

  function handleSignIn(){
    signIn({email, password})
  }

  return(
    <Container>
      <Form>
        <h1>rocketmovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Faça seu Login</h2>
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={event => setEmail(event.target.value)}
        />
        <Input
          placeholder="senha"
          type="password"
          icon={FiLock}
          onChange={event => setPassword(event.target.value)}
        />
        <Button title="Entrar" onClick={handleSignIn}/>
        <Link to="/register">
          Criar Conta
        </Link>
      </Form>
      <Background/>
    </Container>
  )
}