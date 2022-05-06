import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/SideBar/Sidebar';
import AppRoutes from './routes/routes';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BrowserRouter>
      <Header onClick={() => setIsOpen(!isOpen)} />
      <div className="h-screen w-screen">
        <AppRoutes />
        <Sidebar isOpen={isOpen} />
      </div>
    </BrowserRouter>
  );
};

export default App;
