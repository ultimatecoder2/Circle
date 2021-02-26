import React,{Component} from 'react';
import styles from '../styles/css/styles.css';
import Logo from '../styles/img/circle.png'
import {Image, Navbar,Nav} from 'react-bootstrap';
class header extends Component{
    render(){
        return(
        <div>

            <header>
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
                    <Navbar.Brand href="#" className="NavLinks">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" sticky="top"> 
                        <Nav className="mr-auto">                
                            <Nav.Link href="#" className="NavLinks">Link 1</Nav.Link>
                            <Nav.Link href="#" className="NavLinks">Link 2</Nav.Link>
                            
                        </Nav>
                        <Image src={Logo} className="navbar__logo"/>
                        <Nav className="ml-auto">
                        <Nav.Link href="#" className="NavLinks">Link 3</Nav.Link>
                            <Nav.Link href="#" className="NavLinks">Login</Nav.Link>
                            <Nav.Link href="#" className="NavLinks">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </header>
        </div>
        );
    }
}
export default header;