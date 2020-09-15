import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'

function Header() {
    return (
        <nav className='header'>
            <Link to='/login'>
                <img
                    className='header__logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt='logo'
                />
            </Link>

            <div className='header__searchBox'>
                <input type='text' className='header__searchInput'/>
                <SearchIcon />
            </div>

            <div className="header__nav">

                <NavLink to='/'>
                    <div className="header__nav--options">
                        <span>Hello, sign in</span>
                        <span>Acounts & Lists</span> 
                    </div>
                </NavLink>

                <NavLink to='/'>
                    <div className="header__nav--options">
                        <span>Returns</span>
                        <span>& Order</span> 
                    </div>
                </NavLink>
                
                <NavLink to='/'>
                    <div className="header__nav--options">
                        <span>cart logo</span>
                        <span>Cart</span> 
                    </div>
                </NavLink>
            </div>
        </nav>
    )
}

export default Header
