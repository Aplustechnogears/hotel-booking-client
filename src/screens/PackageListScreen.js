import React,{  useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import { listProducts, deleteProduct, createProduct,  listPackages } from '../actions/productActions';
import  { PRODUCT_CREATE_RESET } from '../constants/productConstants';
import RoomSearchWithBackground from '../components/RoomSearchWithBackground';

const PackageListScreen = ({ history, match }) => {

    const pageNumber = match.params.pageNumber || 1
    const dispatch = useDispatch();

    const packageList = useSelector(state=> state.packageList)
    const { loading, error, products, pages, page } = packageList;

    const productDelete = useSelector(state=> state.productDelete)
    const { loading: loadingDelete, error:errorDelete, success: successDelete } = productDelete;

    const productCreate = useSelector(state=> state.productCreate)
    const { loading: loadingCreate, error:errorCreate, success: successCreate, product: createdProduct } = productCreate;

    const userLogin = useSelector(state=> state.userLogin)
    const {  userInfo } = userLogin;

    console.log('packageList',packageList);

    useEffect(()=>{
        dispatch({ type:PRODUCT_CREATE_RESET })
        
        if(!userInfo.isAdmin ){
            history.push('/login');
        }

        if(successCreate){
            history.push(`/admin/product/${createdProduct._id}/edit`)
        }else{
            dispatch( listPackages('',pageNumber) )
        }

    },[dispatch, history, userInfo, successDelete, successCreate, createdProduct, pageNumber   ])
 

    const deleteHandler= (id) =>{
        console.log('deleted usr',id);
        if( window.confirm('Are You Sure? ')){
            // dispatch( deleteUser(id) );
            dispatch( deleteProduct(id) );
        }
    }

    const createProductHandler = (product) => {
        dispatch( createProduct("Package") )
    }

    return<>
    <RoomSearchWithBackground
        showFilters={false}
        title="Rooms List"
        image="linear-gradient(0deg,rgba(0,0,0, 0.4), rgba(0,0,0,0.75)),url('/images/bg1.jpeg')" 
        height="50vh"
    />

     <Container> 
    <div>
        <Row className='align-items-center' >
            <Col>
                <h1>Packages List</h1>
            </Col>
            <Col className="text-right" >
                <Button className='my-3' onClick={createProductHandler} > Create Package</Button>
            </Col>
        </Row>
        { loadingDelete ? <Loader /> : errorDelete ? <Message variant="danger" >{errorDelete}</Message>:null }
        { loadingCreate ? <Loader /> : errorCreate ? <Message variant="danger" >{errorCreate}</Message>:null }
        { loading ? <Loader /> : error ? <Message variant="danger" >{error}</Message>
        : <><Table responsive hovered striped bordered className="table-sm" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { products.map((product)=> {
                    return <tr key={product._id} >
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td  >
                            <LinkContainer to={`/admin/product/${product._id}/edit`} className="my-3" style= {{margin:5}} >
                                <Button variant="dark"className="btn-sm"  > 
                                <i className="fa fa-edit"   ></i>
                                </Button>
                            </LinkContainer>
                            <Button variant="danger" className="btn-sm my-3"   onClick={()=> deleteHandler( product._id) } > <i className="fa fa-trash" ></i> </Button>
                        </td>
                    </tr>
                }) }
            </tbody>
        </Table>
        <Paginate pages={pages} page={page} isAdmin={true} />
        </> }
    </div>
    </Container>
    </>
}

export default PackageListScreen;