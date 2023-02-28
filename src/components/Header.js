import React, { useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { useDispatch , useSelector} from 'react-redux';
import { logout } from '../actions/userActions';

const Header = () =>{

    const dispatch = useDispatch();
    const userLogin = useSelector(state=> state.userLogin );
    const { userInfo } = userLogin;

    const location= window.location.pathname;

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[location]);

    const logoutHandler=() => {
        dispatch(logout());
    }
    return <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect >
        <Container>
            <LinkContainer to="/" >
                <Navbar.Brand> Ganga Radisson </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <LinkContainer to="/cart" >
                    <Nav.Link > <i className="fa fa-shopping-cart" ></i> Reservations</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about"  >
                    <Nav.Link style={{color:'red'}} > <i className="fa fa-shopping-cart" ></i> About</Nav.Link>
                </LinkContainer> 
                <LinkContainer to="/contact" >
                    <Nav.Link > <i className="fa fa-shopping-cart" ></i> Contact Us</Nav.Link>
                </LinkContainer>

                { userInfo ? <NavDropdown title={userInfo.name} id='username'  >
                    <LinkContainer to='/profile' >
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler} >Sign Out</NavDropdown.Item>

                </NavDropdown> 
                : <LinkContainer to="/login" >
                    <Nav.Link > <i className="fa fa-user" ></i>Sign In</Nav.Link>
                </LinkContainer>}
                { (userInfo && userInfo.isAdmin ) ?  <NavDropdown title='Admin' id='adminMenu'  >
                    {/* <LinkContainer to='/admin/userlist' >
                        <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer> */}
                    <LinkContainer to='/admin/packageslist' >
                        <NavDropdown.Item>Packages</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to='/admin/productlist' >
                        <NavDropdown.Item>Rooms</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist' >
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>

                </NavDropdown> :null }
                </Nav>
                
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
}

export default Header;
