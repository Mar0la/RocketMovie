import { FiArrowLeft } from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { Container, Form } from './style'

export function New() {
  return (
    <Container>
      <Header />

      <main>
          <Link className='link' to="/">
            <FiArrowLeft/>
            Voltar
          </Link>
        
        <Form>
          <header>
            <h1>Novo Filme</h1>
          </header>

          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota de 0 a 5" />
          </div>
          <TextArea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react"/>
              <NoteItem isNew placeholder="Novo Marcador" />
            </div>
          </Section>
          <div>
            <Button isNew title="Excluir Filme"/>
            <Button title="Salvar"/>
          </div>
        </Form>
      </main>
    </Container>
  )
}