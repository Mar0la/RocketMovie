/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content } from "./style.js";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";



export function Details() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [tags, setTags] = useState([]);

  const { user } = useAuth();
  
 
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`notes/${id}`);
      setTags(response.data.tags)
      setData(response.data[0])
    }
    fetchNote();
  }, [id]);

  return (
    <Container>
      <Header />
      <Content>
        <div>
          <Link className="link" to="/">
            <FiArrowLeft />
            Voltar
          </Link>
          <Link className="link" to={`/editNote/${id}`}>
            Editar Nota
          </Link>
        </div>
        <Section>
          <Note
            isDetails
            data={{
              data: data.created_at,
              user: user.name,
              title: data.title,
              description: data.description,
              tags: tags,
            }}
          />
        </Section>
      </Content>
    </Container>
  );
}
