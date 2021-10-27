import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
      <Link to="/">
        <img 
          src= "http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
          className="header-logo" 
          alt="header-logo"
        />
      </Link>
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        {/* <SearchIcon  className="header-searchIcon" /> */}
        {/* arrumar o searchIcon do material icon */}
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Hello Guest</span>
          <span className="header-optionLineTwo">Sign In</span>
        </div>
        
        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>
        
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header-optionBasket">
            {/* <ShoppingBasketIcon /> */}
            <span className="header-optionLineTwo header-basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header