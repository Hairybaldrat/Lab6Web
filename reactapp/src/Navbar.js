import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarstore() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Rowans Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="Store">Store</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                          <Nav.Link href="Contact">Contact us</Nav.Link>
                      </Nav.Item>
            <Nav.Item>
              <Nav.Link href="About">About us</Nav.Link>
              </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarstore;