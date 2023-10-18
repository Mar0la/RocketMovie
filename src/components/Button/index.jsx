import { FiPlus } from 'react-icons/fi'

import { Container } from './style'

// eslint-disable-next-line react/prop-types
export function Button({ className,isNew, title, loading = false, ...rest }) {
  return (
    <Container isNew={isNew}
      type="button"
      disabled={loading}
      {...rest}
    >
      {className === "button-add" ? <FiPlus /> : ''}
      {loading ? 'Carregando...' : title}
    </Container >
  )
}