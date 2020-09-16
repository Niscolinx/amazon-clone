import React from 'react'

function Layout() {
    const images = [
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg',
    ]
    let imageToDisplay = images[0]

    const carousel = () => {
        images.forEach((img, i) => {
            console.log('the images', img, i)
        })
    }

    setTimeout(() =>{
        carousel()
    }, 2000)

    return (
        <div>
            <img src={imageToDisplay} alt='hero' />
        </div>
    )
}

export default Layout