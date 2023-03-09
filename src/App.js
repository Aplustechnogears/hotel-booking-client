import React from 'react';
// import Header from './components/Header';
import Footer from './components/Footer';
// import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen  from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import VerifyScreen from './screens/VerifyScreen';

import {  Route, HashRouter as Router } from 'react-router-dom';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import RoomsScreen from './screens/RoomsScreen';
import PackagesScreen from './screens/PackagesScreen';
import PackageListScreen from './screens/PackageListScreen';
import PackageScreen from './screens/PackageScreen';
import ForgotPassswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';

function App() {
  return (
    <Router>
    {/* <Header /> */}
    <main >
      {/* <Container> */}
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/verifyAccount" component={VerifyScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component = {PlaceOrderScreen} />
        <Route path="/login" component ={LoginScreen} />
        <Route path="/forgot-password" component ={ForgotPassswordScreen} />
        <Route path="/resetPassword/:id" component ={ResetPasswordScreen} />
        <Route path="/register" component ={RegisterScreen} />
        <Route path="/profile" component ={ProfileScreen} />
        <Route path="/product/:id" component ={ProductScreen} />
        <Route path="/package/:id" component ={PackageScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/admin/userlist" component={UserListScreen} />
        <Route path="/admin/productlist" component={ProductListScreen} exact/>
        <Route path="/admin/productlist/:pageNumber" component={ProductListScreen} exact />
        <Route path="/admin/packageslist" component={PackageListScreen} exact/>
        <Route path="/admin/packageslist/:pageNumber" component={PackageListScreen} exact />
        <Route path="/admin/orderlist" component={OrderListScreen} />
        <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
        <Route path="/page/:pageNumber" component ={HomeScreen} exact />
        <Route path="/about" component ={AboutScreen} exact />
        <Route path="/contact" component ={ContactScreen} exact />
        <Route path="/rooms" component ={RoomsScreen} exact />
        <Route path="/rooms/:pageNumber" component ={RoomsScreen} exact />
        <Route path="/packages" component ={PackagesScreen} exact />
        <Route path="/packages/:pageNumber" component ={PackagesScreen} exact />

        <Route path="/" component ={HomeScreen} exact />

      {/* </Container> */}
    </main>
    <Footer />
    </Router>
  );
}

export default App;
