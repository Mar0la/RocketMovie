/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { useState } from "react";
import avatarPlaceHolder from "../../assets/avatarPlaceHolder.svg" 
import { Container, Profile, Logout } from "./style";
import { Input } from '../../components/Input'

// eslint-disable-next-line react/prop-types
export function Header({childToParent}) {
  const [search, setSearch] = useState("");
  const  { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  const navigate = useNavigate()
  function handleSignOut() {
    navigate("/")
    signOut()
  }
  return(
    <Container>
      <h2>rocketmovies</h2>
      <Input
        placeholder="Pesquisar Pelo Titulo"
        onChange={(event) => {
          const searchValue = event.target.value;
          setSearch(searchValue); 
          childToParent(searchValue); 
        }}
      />
      <Profile>
        <div>
          <strong>{user.name}</strong>
          <Logout onClick={ handleSignOut }>
            <span>Sair</span>
          </Logout>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt={user.name}/>
        </Link>
      </Profile>
    </Container>
  )
}