import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <nav className='header'>
            <div className="header__menu">
                <MenuIcon className='hamburger'/>
            </div>
            <Link to='/login'>
                <img
                    className='header__logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt='logo'
                />
            </Link>

            <div className='header__searchBox'>
                <div className='header__selectBox'>
                    <label>
                        <select className='header__select'>
                            <option className='header__options' value='All'>
                                All
                            </option>
                            <option className='header__options'>
                                Option 1
                            </option>
                            <option className='header__options'>
                                Option 2
                            </option>
                            <option className='header__options'>
                                Last long option
                            </option>
                        </select>
                    </label>
                    <ArrowDropDownIcon />
                </div>
                <input type='text' className='header__searchBox--input' />
                <SearchIcon className='header__searchBox--icon' />
            </div>

            <div className='header__nav'>
                <NavLink to='/' className='header__link header__link--dropdown'>
                    <div className='header__options--dropdown'>
                        <div className='header__options'>
                            <span className='header__options-light'>
                                Hello, Sign in
                            </span>
                            <span className='header__options-bold'>
                                Acounts & Lists
                            </span>
                        </div>
                    </div>
                        <ArrowDropDownIcon className='header__dropdown' />
                </NavLink>

                <NavLink to='/' className='header__link'>
                    <div className='header__options'>
                        <span className='header__options-light'>Returns</span>
                        <span className='header__options-bold'>& Order</span>
                    </div>
                </NavLink>

                <NavLink to='/' className='header__link'>
                    <div className='header__options--cart'>
                        <ShoppingBasket />
                        <span className='header__options--cart-count'></span>
                        Cart
                    </div>
                </NavLink>
            </div>
        </nav>
    )
}

export default Header
