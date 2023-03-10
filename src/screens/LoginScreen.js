import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions';
import RoomSearchWithBackground from '../components/RoomSearchWithBackground';


const LoginScreen = ({ location, history }) => {

    const [email, setEmail]= useState('');
    const [password,setPassword] = useState('');
    const redirect = location.search ? location.search.split('=')[1] : '/';
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin )

    const { loading, error, userInfo } = userLogin;

    useEffect(()=>{
        if(userInfo){
            history.push(redirect);
        }
    },[history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('submit');
        dispatch(login(email, password))
    }

    return  <>
    <RoomSearchWithBackground
        showFilters={false}
        title="Sign In"
        image="linear-gradient(0deg,rgba(0,0,0, 0.4), rgba(0,0,0,0.75)),url('/images/bg1.jpeg')" 
        height="50vh"
    />
    <Container> 
    <FormContainer>
        <h1>Sign In </h1>
        { error ? <Message variant="danger" > {error} </Message>: null }
        {loading? <Loader /> : null}
        <Form onSubmit={submitHandler} >
            <Form.Group controlId="email" >
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    type="email" value={email}
                    placeholder="Email" onChange={e=> setEmail(e.target.value) } > 
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="password" >
                <Form.Label>password</Form.Label>
                <Form.Control 
                    type="password" value={password}
                    placeholder="password" onChange={e=> setPassword(e.target.value) } > 
                </Form.Control>
            </Form.Group>
            <Row className="py-3" >
                <Col>
                    <Link to={ '/forgot-password' } >Forgot Password</Link>
                </Col>
            </Row>
            <Button type="submit" variant="primary" > Sign In</Button>
        </Form>

        <Row className="py-3" >
            <Col>
            New User ? <Link to={ redirect?  `/register?redirect=${redirect}` : '/register' } >
             Register
            </Link>
            </Col>
        </Row>
    </FormContainer>
    </Container>
    </>

}

export default LoginScreen;