import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/index";
import Layout from './components/Hoc/Layout'
import RegisterLogin from './components/register_login';
import Register from "./components/register_login/register";
import userDashboard from './components/user';
import Auth from './components/Hoc/auth';
import Shop from './components/Shop'
import Addproducts from './components/user/Addproducts'
import ManageCategories from './components/user/manage_categories'
import Product from './components/Product'
import Cart from "./components/user/Cart";
import UpdateProfile from "./components/user/update_profile";
import ManageSite from './components/user/manage_site'

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/admin/site_info' exact component={Auth(ManageSite)} />
        <Route path='/user/cart' exact component ={Auth(Cart)} />
        <Route path='/product_detail/:id' exact component={Auth(Product, null)} />
        <Route path='/add_products' exact component={Auth(Addproducts)} />
        <Route path='/user/user_profile' exact component={Auth(UpdateProfile)} />
        <Route path='/manage_categories' exact component={Auth(ManageCategories)} />
        <Route path="/user/dashboard" exact component={Auth(userDashboard, false)} />
        <Route path="/shop" exact component={Auth(Shop, false)} />
        <Route path="/register_login" exact component={Auth(RegisterLogin)} />
        <Route path="/register" exact component={Auth(Register)} />
        <Route path="/" exact component={Auth(Home)} />
      </Switch>
    </Layout>
  );
};

export default Routes;