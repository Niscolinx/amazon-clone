import React from 'react'

function Header() {
    return (
        <nav className='header'>
            {/* header logo */}
            <a href='/login'>
                <img
                    className='header__logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt='logo'
                />
            </a>
        </nav>
    )
}

export default Header
