
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Wishlist from '../pages/Wishlist';
import Checkout from '../pages/Checkout';
import BlogList from '../pages/BlogList';
import BlogDetail from '../pages/BlogDetail';
import About from '../pages/About';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import NotFound from '../pages/NotFound';

import SignIn from '../pages/auth/SignIn';
import Register from '../pages/auth/Register';

import Dashboard from '../pages/user/Dashboard';
import OrderHistory from '../pages/user/OrderHistory';
import OrderDetail from '../pages/user/OrderDetail';
import Settings from '../pages/user/Settings';

import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route element={<PublicRoute />}>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/user/orders" element={<OrderHistory />} />
                <Route path="/user/orders/:id" element={<OrderDetail />} />
                <Route path="/user/settings" element={<Settings />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
