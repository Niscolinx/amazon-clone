import React from 'react'

function Slider() {

    const getWidth = () => window.innerWidth
    interface myStyles {
        transform: string;
        transition: string;
    }

    const customStyles: myStyles = {
        transform: 'translateX(-432px)',
        transition: 'all ease-in 4s'
    }

    console.log('the inner width is ', getWidth())

    const images = [
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg',
    ]

    return (
        <div className='slider' style={customStyles}>
            hello world
        </div>
    )
}

export default Slider
