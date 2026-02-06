import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ThemeProvider } from './context/ThemeContext';
import MainHeader from './components/common/MainHeader';
import MainFooter from './components/common/MainFooter';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <ThemeProvider>
            <Router>
              <div className="flex flex-col min-h-screen">
                <MainHeader />
                <main className='flex-1'>
                  <AppRoutes />
                </main>
                <MainFooter />
              </div>
            </Router>
          </ThemeProvider>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
