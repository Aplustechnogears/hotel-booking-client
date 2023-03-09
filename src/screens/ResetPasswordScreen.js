import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import RoomSearchWithBackground from '../components/RoomSearchWithBackground';
import axios from 'axios'


const ResetPasswordScreen = ({ location, history, match }) => {

    const [email, setEmail]= useState('');
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [variant, setVariant] = useState('danger');
    const redirect = location.search ? location.search.split('=')[1] : '/';
    const userLogin = useSelector(state => state.userLogin )

    const { userInfo } = userLogin;

    useEffect(()=>{
        if(userInfo){
            history.push(redirect);
        }

        ( async () =>{
            try {
                const token= match.params.id
                const response = await axios.post('https://cyan-tough-raven.cyclic.app/api/users/validate-reset-link',{token: token});
                console.log('response', response);
                setEmail(response?.data?.email);
            } catch (error) {
                console.log('error',error);
                history.push('/forgot-password');
            }
        })();

    },[history])

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post('https://cyan-tough-raven.cyclic.app/api/users/reset-password', {email, password});
            setVariant('success');
            setError(response?.data?.message );
            console.log('response',response);

        } catch (error) {
            setError(error?.response?.data?.message || "Something went wrong");
            setVariant("danger");
        }finally{
            setLoading(false);
        }
        // dispatch(login(email, password))
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
        <h1>Reset Password </h1>
        { error ? <Message variant="success" > {error} </Message>: null }
        {loading? <Loader /> : null}
        <Form onSubmit={submitHandler} >
            <Form.Group controlId="email" >
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    type="email" value={email}
                    disabled={true}
                    placeholder="Email" onChange={e=> setEmail(e.target.value) } > 
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="password" >
                <Form.Label>New Password</Form.Label>
                <Form.Control 
                    type="password" value={password}
                    placeholder="Password" onChange={e=> setPassword(e.target.value) } > 
                </Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary" > Reset Password</Button>
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

export default ResetPasswordScreen;