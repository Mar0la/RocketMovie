/* eslint-disable react-hooks/exhaustive-deps */
import { FiArrowLeft } from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import {api} from  '../../services/api'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Container, Form } from './style'

export function EditNote() {
  const { id } = useParams();
 
  const [editName, setEditName] = useState(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")

  const [tags, setTags] = useState([])
  const [newTags, setNewTags] = useState("")

  const navigate = useNavigate()
  function handleAddTag() {
    setTags(prevState => [...prevState, newTags])
    setNewTags("")
  }

  function handleRemoveTag(tagDeleted) {
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted))
  }

  async function handleUpdateNote() {
    if (!title) {
      return alert("Escreva um título!");
    }
    if (!rating) {
      return alert("De uma nota para o filme.");
    }
  
    if (rating > 5) {
      return alert("Somente de 0 a 5");
    }
  
    if (!description) {
      return alert("Escreva uma descrição para o filme.");
    }
  
    if (tags.length === 0) {
      return alert("Adicione ao menos 1 tag");
    }
  
    if (newTags !== "") {
      return alert("Você deixou uma tag no campo, mas não clicou em adicionar, deixe vazio ou adicione!");
    }
  
    const updatedNote = {
      title,
      rating,
      description,
      tags,
    };
  
    await api.put(`/notes/${id}`, updatedNote)
  
    alert("Nota atualizada com sucesso!");
    navigate("/")
  }
  

  async function handleRemoveNote() {
    const confirm = window.confirm("Deseja realmente remover a nota")
    if(confirm){
      await api.delete(`/notes/${id}`)
      alert("Nota Excluída com sucesso!")
      navigate("/")
      return
    } 
  }
 
  useEffect(() => {
    async function fetchNoteDetails(){
      const response = await api.get(`/notes/${id}`)
      console.log(response.data)
      setEditName(response.data[0].title)
    }
    fetchNoteDetails();
  }, []);
  return (
    <Container>
      <Header />

      <main>
          <div>
            <Link className='link' to="/">
              <FiArrowLeft/>
              Voltar
            </Link>
            <p className='link'>Editando: {editName}</p>
          </div>
        
        <Form>
          <header>
            <h1>Editar Filme</h1>
          </header>

          <div>
            <Input 
            placeholder="Título"
            onChange={event => setTitle(event.target.value)} />
            
            <Input 
            placeholder="Sua nota de 0 a 5" 
            onChange={event => setRating(event.target.value)}/>
          </div>

          <TextArea 
          placeholder="Observações"
          onChange={event => setDescription(event.target.value)}
           />

          <Section title="Marcadores">
            <div className="tags">
              {
               tags.map((tag, index) => (
                <NoteItem
                key={String(index)}
                value={tag}
                onClick={() => {handleRemoveTag(tag)}}
                />
                ))
              }
              <NoteItem isNew 
              placeholder="Novo Marcador" 
              onChange={event => setNewTags(event.target.value)}
              value={newTags}
              onClick={handleAddTag}/>
            </div>
          </Section>
          <div>
            <Button isNew title="Excluir Filme"
            onClick={handleRemoveNote}
           />
            <Button title="Atualizar dados"
            onClick={handleUpdateNote}/>
          </div>
        </Form>
      </main>
    </Container>
  )
}