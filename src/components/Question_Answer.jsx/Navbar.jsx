import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
function Navbar() {
  return (
    <>
      <Container>
      <Button variant="outline-primary" href='/html5'>HTML 5</Button>{' '}
      <Button variant="outline-secondary" href='/css'>CSS</Button>{' '}
      <Button variant="outline-success" href='/javascript'>JAVASCRIPT</Button>{' '}
      <Button variant="outline-warning" href='/react'>REACT</Button>{' '}
      <Button variant="outline-danger" href='/bootstrap'>BOOTSTRAP 5</Button>{' '}
      <Button variant="outline-info" href='/webapi'>WEB API</Button>{' '}
      <Button variant="outline-dark" href='/sql'>SQL</Button>
      </Container>
    </>
  );
}

export default Navbar;