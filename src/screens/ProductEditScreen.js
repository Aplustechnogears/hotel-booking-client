import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button , Container, Form} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';
import FormContainer from '../components/FormContainer';
import {listProductDetails, updateProduct} from '../actions/productActions';
import firebase from '../firebase';


const ProductEditScreen = ({ match, history }) => {

    const productId = match.params.id
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState(0);
    const [description, setDescription] = useState('');
    const [uploading, setUploading]= useState(false);

    const dispatch = useDispatch();

    const productDetails = useSelector(state=> state.productDetails);
    const { loading, error, product } = productDetails;

    const productUpdate = useSelector(state=> state.productUpdate);
    const { loading:loadingUpdate, error:errorUpdate, success: successUpdate } = productUpdate;

    useEffect(()=>{
        if(successUpdate){
            dispatch( { type:PRODUCT_UPDATE_RESET } );
            history.push('/admin/productlist');
        }else{
        if(!product.name || product._id !== productId   ){
            dispatch( listProductDetails(productId) );
        }else{
            setName(product.name);
            setPrice(product.price);
            setImage(product.image);
            setBrand(product.brand);
            setCategory(product.category);
            setCountInStock(product.countInStock);
            setDescription(product.description);
        }
    }
    },[ dispatch, history, productId, product, successUpdate ]);

    const submitHandler = (e) => {
        e.preventDefault();
        //Update Product
        dispatch( updateProduct({ _id: productId, name, price, brand, category, image, description, countInStock }) )
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        console.log('file', file);
        setUploading(true);


            // const { data } = await axios.post('https://hotel-server-nbih.onrender.com/api/upload', formData, config);


            // setImage(data);
            // console.log('now it should work', data);
            const image = `image-${Date.now()}`
            var uploadTask = firebase.storage().ref((`/images/${image}`)).put(file);
            uploadTask.on('state_changed', (snapshot)=>{
                console.log('live status of image upload', snapshot);
            },(err)=>{
                console.log('error while uploading image',err);
            },()=>{
                firebase.storage().ref(`/images/${image}`).getDownloadURL().then((imageUrl)=>{
                    console.log('this thing is only worth', imageUrl);
                    setImage(imageUrl);
                    setUploading(false);
                }).catch((err)=>{
                    console.log('nothing to see',err);
                    setUploading(false);

                })
            })
            

            // setUploading(false);
        }
    

    return <Container> 
    <div>
        <Link to='/admin/productlist' className="btn btn-light my-3" >
            Go Back
        </Link>
        <FormContainer>
            <h1>Edit Product</h1>
            { errorUpdate ? <Message variant="danger" >{errorUpdate}</Message> : null }

            { loading ? <Loader /> : error ? <Message variant="danger" >{error}</Message> 
            : <Form onSubmit={submitHandler} >
            <Form.Group controlId='name' >
                <Form.Label>Name</Form.Label>
                <Form.Control type='name' placeholder="Product Name" value={name} onChange={e=> setName( e.target.value ) } >
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='price' >
                <Form.Label>Price</Form.Label>
                <Form.Control type='number' placeholder="Product Price" value={price} onChange={e=> setPrice( e.target.value ) } >
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='image' >
                <Form.Label>Image</Form.Label>
                <Form.Control type='text' placeholder="Enter Image Url" value={image} onChange={e=> setImage( e.target.value ) } >
                </Form.Control>
                <Form.File id='image-file' label="Choose Image" custom onChange={uploadFileHandler} >
                </Form.File>
                { uploading ? <Loader /> : null }
            </Form.Group>
            <Form.Group controlId='brand' >
                <Form.Label>Brand</Form.Label>
                <Form.Control type='text' placeholder="Product brand" value={brand} onChange={e=> setBrand( e.target.value ) } >
                </Form.Control>
            </Form.Group>
            
            <Form.Group controlId='countInStock' >
                <Form.Label>CountInStock</Form.Label>
                <Form.Control type='number' placeholder="Product countInStock" value={countInStock} onChange={e=> setCountInStock( e.target.value ) } >
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='category' >
                <Form.Label>Category</Form.Label>
                <Form.Control type='text' placeholder="Product Category" value={category} onChange={e=> setCategory( e.target.value ) } >
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='description' >
                <Form.Label>Description</Form.Label>
                <Form.Control type='text' placeholder="Product Description" value={description} onChange={e=> setDescription( e.target.value ) } >
                </Form.Control>
            </Form.Group>
            { loadingUpdate ? <Loader /> : null }

            <Button type='submit' variant="primary" >Update</Button>
        </Form>}
        </FormContainer>

    </div>
    </Container>
}

export default ProductEditScreen;