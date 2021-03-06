import React from 'react'
import Slider from '../components/Slider/Slider'
import Chalkboard from '../images/chalkboard.jpg'
import Computer from '../images/computer.jpg'
import Concert from '../images/concert.jpg'
import Banjo from '../images/banjo.jpg'
import About from '../images/About.jpg'
import download from '../images/download.jpg'
import Categories from '../components/Catogories'

function Layout(props: any) {
    // const images = [Chalkboard, Computer, Concert, download, Banjo, About]
    const images = [
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg',
    ]

    return (
        <div className='layout'>
            <Slider images={images} />
            <div className='content'>
                <Categories/>
            </div>
        </div>
    )
}

export default Layout
