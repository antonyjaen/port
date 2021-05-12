import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useContext } from 'react';
import Context from './Context/Context';
import Link from 'next/link'

const NavbarP = () => {
  const MyContext = useContext(Context)
  const eng = ()=>{
    MyContext.toggleState(true)
    console.log(MyContext.english);
  }
  const esp = ()=> {
    MyContext.toggleState(false)
    console.log(MyContext.english);
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand >
        { MyContext.english ?<div> Portfolio</div>: <div>Portafolio</div>}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Link href="/">
          
            <a className="link"> { MyContext.english ?<div>About Me</div>: <div>Sobre mi</div>}</a>
        </Link>
        <Link href="/Skills">
            <a className="link "> { MyContext.english ?<div> Projects</div>: <div>Proyectos</div>}</a>
        </Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={esp}>Español</Nav.Link>
          <Nav.Link onClick={eng} > English </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarP
