import React, { useState } from 'react';
import '../styles/Navigation.css'
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function Navigation() {

  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavigation = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2017_26/2053956/170627-better-grocery-store-main-se-539p.jpg" alt="image not found" />
        <div className='hiddenLinks'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/Login">Login </Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Login">Login </Link>
        <Link to="/contact">Contact</Link>&nbsp;&nbsp;
        <span className='icon'><ShoppingCartIcon /></span>
        <button onClick={toggleNavigation}><ReorderIcon /></button>
      </div>

    </div>

  );
}

export default Navigation;
