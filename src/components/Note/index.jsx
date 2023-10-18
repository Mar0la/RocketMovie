import { BiTime } from 'react-icons/bi'
import { FiStar } from 'react-icons/fi'
import {BsFillStarFill} from 'react-icons/bs'
/* eslint-disable react/prop-types */
import { Container } from './style'
import { Tag } from '../Tag'

export function Note({ isDetails, data, ...rest }) {
  return (
    <Container $isDetails={isDetails} {...rest}>

      <div className='header'>
        <h1>{data.title}</h1>
        <BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><FiStar/>
      </div>

      <div className='created_at'>
        <img src="https://github.com/Mar0la.png" alt="Foto do usuário"/>
        <strong>Por {data.user}</strong>
        <BiTime/>
        <p>{data.data}</p>
      </div>
    
      <p>{data.description}</p>

      {
        data.tags &&
        <footer>
          {
            isDetails ?  data.tags.map(tag => <Tag isDetailsTag key={tag.id} title={tag.name}/>) : data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
     
    </Container>
  )
}