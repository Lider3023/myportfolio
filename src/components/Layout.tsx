import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import Loader from './Loader/Loader';
import BurgerMenu from './Burger/BurgerMenu';
import "../scss/Layout/Layout.scss";
import ContactModal from './Modal/ContactModal';
const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }; 
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2200); 
  }, []);
return (
    <div className='main_bg'>
      {loading ? <Loader /> : 
 <div>
    <header>
      <nav className="nav container">
           <BurgerMenu/>
           <div className="nav__btns">
            <button className='nav__btns-btn' onClick={openModal}>Hire me</button>
            <ThemeToggle />
           </div>
      
      </nav>
   
    </header>
    <main>
      <Outlet />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  </div>
  }
    </div>
  );
}

export default Layout