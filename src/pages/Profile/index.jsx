import { useState } from 'react'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'
import avatarPlaceHolder from "../../assets/avatarPlaceHolder.svg"

import { Container, Form, Avatar, ButtonLink } from './style'
import  { Input } from '../../components/Input'
import  { Button } from '../../components/Button'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [ name, setName ] = useState(user.name)
  const [ email, setEmail ] = useState(user.email)
  const [ passwordOld, setPasswordOld ] = useState()
  const [ passwordNew, setPasswordNew ] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
  
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);


  async function handleUpdate() {
    const userData = {
      name,
      email,
      avatar: user.avatar,
      old_password: passwordOld,
      password: passwordNew
    }

    await updateProfile({user: userData, avatarFile});
  }


  function handleAvatarChange(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

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
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera/>
            <input id="avatar" type="file" onChange={handleAvatarChange}/>
          </label>
        </Avatar>
        <Input
          placeholder='Nome'
          type="text"
          icon={FiUser}
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <Input
          placeholder='Email'
          type="text"
          icon={FiMail}
          value={email}
          onChange={event => setEmail(event.target.value)}

        />
        <Input
          placeholder='Senha Atual'
          type="password"
          icon={FiLock}
          onChange={event => setPasswordOld(event.target.value)}
        />
        <Input
          placeholder='Nova Senha'
          type="password"
          icon={FiLock}
          onChange={event => setPasswordNew(event.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>
    </Container>
  )
}