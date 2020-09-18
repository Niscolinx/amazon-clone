import React from 'react'
import Slider from '../components/Slider/Slider'

function Layout(props: any) {

    return (
        <>
            <Slider />
            <div>
                <main className='content'>{props.children}</main>
            </div>
        </>
    )
}

export default Layout
