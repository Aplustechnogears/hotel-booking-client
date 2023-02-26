import React,{  useEffect } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { LinkContainer } from 'react-router-bootstrap';
import { listOrders } from '../actions/orderActions';
import RoomSearchWithBackground from '../components/RoomSearchWithBackground';

const OrderListScreen = ({ history }) => {

    const dispatch = useDispatch();

    const orderList = useSelector(state=> state.orderList)
    const { loading, error, orders } = orderList;

    const userLogin = useSelector(state=> state.userLogin)
    const {  userInfo } = userLogin;

    useEffect(()=>{
        if(userInfo && userInfo.isAdmin){
        dispatch(listOrders() )
        }else{
            history.push('/login');
        }
    },[dispatch, history, userInfo])
 


    return <div>

        <RoomSearchWithBackground
            showFilters={false}
            title="Recent Orders"
            image="linear-gradient(0deg,rgba(0,0,0, 0.4), rgba(0,0,0,0.75)),url('/images/bg1.jpeg')" 
            height="50vh"
        />

        <Container>
        <h1>Orders </h1>
        { loading ? <Loader /> : error ? <Message variant="danger" >{error}</Message>
        : <Table responsive hovered striped bordered className="table-sm" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Date</th>
                    <th>Total Price </th>
                    <th>Paid</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { orders.map((order)=> {
                    return <tr key={order._id} >
                        <td>{order._id}</td>
                        <td>{order.user ? order.user.name:null}</td>
                        <td>{order.createdAt.substring(0,10) }</td>
                        <td>{order.totalPrice }$ </td>
                        <td>{order.isPaid ? "Paid" : "Not Paid"}</td>
                        <td>
                            <LinkContainer to={`/order/${order._id}`} >
                                <Button className="btn-sm" variant="dark" > Details </Button>
                            </LinkContainer>
                        </td>
                    </tr>
                }) }
            </tbody>
        </Table> }

        </Container>
    </div>
}

export default OrderListScreen;