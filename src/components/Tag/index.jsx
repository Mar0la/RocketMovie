import { Container } from "./style";

// eslint-disable-next-line react/prop-types
export function Tag({isDetailsTag, title, ...rest}) {
  return(
    <Container $isDetailsTag={isDetailsTag} {...rest}>
      {title}
    </Container>
    
    
  )
}