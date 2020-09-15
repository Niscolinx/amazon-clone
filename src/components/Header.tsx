import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <nav className='header'>
            {/* header logo */}
            <Link to='/login'>
                <img
                    className='header__logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt='logo'
                />
            </Link>
        </nav>
    )
}

export default Header
