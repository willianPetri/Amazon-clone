import React from 'react';
import './style.css';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }

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
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header-option">
            <span className="header-optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header-optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
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
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
