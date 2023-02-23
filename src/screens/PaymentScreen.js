import React,{ useState } from 'react';
import {  Form, Button, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../actions/cartActions';
import RoomSearchWithBackground from '../components/RoomSearchWithBackground';

const PaymentScreen = ({ history }) => {

    const dispatch = useDispatch();

    const cart = useSelector(state=> state.cart )
    const { shippingAddress } = cart

    if(!shippingAddress){
        history.push('/shipping');
    }


    const [paymentMethod, setPaymentMethod] = useState('PayPal');



    const submitHandler = (e) => {
        e.preventDefault();
        dispatch( savePaymentMethod(paymentMethod) )
        history.push('/placeorder');
    }

    return <>
    <RoomSearchWithBackground
        showFilters={false}
        title="Reservations"
        image="linear-gradient(0deg,rgba(0,0,0, 0.4), rgba(0,0,0,0.75)),url('/images/bg1.jpeg')" 
        height="50vh"
    />
    <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method </h1>
        <Form onSubmit={ submitHandler } >
            <Form.Group>
                <Form.Label as="legend" >Select payment method</Form.Label>
                <Col>
                    <Form.Check type="radio" label="Paytm" name="paymentMethod" value="PayPal" checked id="PayPal"
                    onChange={(e)=> setPaymentMethod(e.target.value) } >
                    </Form.Check>
                    
                </Col>
            </Form.Group>

            <Button variant="primary" onClick={submitHandler} > Continue </Button>
        </Form>
    </FormContainer>
    </>
}

export default PaymentScreen