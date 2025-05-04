// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '20px' }}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
