import { Navbar,Container,Nav } from 'react-bootstrap';

const NavBar=()=>{
    return(
        <div>
              <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">YEs</Nav.Link>
                    <Nav.Link href="#features">NO</Nav.Link>
                    <Nav.Link href="#pricing">YES</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
        </div>
    )
}

export default NavBar