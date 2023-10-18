/* eslint-disable react/prop-types */
import { Container } from "./style";


export function TextArea({value,...rest}) {

    return(
      <Container{...rest}>
        {value}
      </Container>
    )
}