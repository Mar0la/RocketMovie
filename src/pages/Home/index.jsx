import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import {  Container, Content } from './style'

import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { Button } from '../../components/Button'

export function Home() {
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])
  const navigate = useNavigate()
  function childToParent(search) {
    setSearch(search);
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
    setNotes(response.data)
    }
    fetchNotes();
  }, [search]);
  

  return(
    <Container>
      <Header childToParent={childToParent}/>

      <Content>
     
        <header>
          <h1>Meus filmes</h1>
          <Link to="/new">
          <Button className="button-add" title="Adicionar Filme"/>
          </Link>
        </header>
        <main>
        <Section className="teste">
       { 
          notes.map(note => (
          <Note 
          key={String(note.id)}
          data={note}
          onClick={() => handleDetails(note.id)}/>
          ))
        }
       
        </Section>
      </main>
      
      </Content>

     
    </Container>
  )
}