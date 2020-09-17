import React, { useState } from 'react'

function Layout() {
    let [count, setCount] = useState(0)
    const [initialNumber, setInitialNumber] = useState(0)

    const images = [
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg',
    ]

    const carousel = (c: number) => {
        console.log('the inner count', c)
        if (c >= images.length) {
            c = 0
        }
        if (c < 0) {
            c = images.length - 1
        }

        return images[c]
    }

    let num: number = 0
    setInterval(() => {
        num++
        
        if(num >= images.length){
            num = 0
        }
        console.log('setinterval', num)

        setInitialNumber(num)
       // setCount(num)
    }, 5000)

    console.log('the image display num', initialNumber)
    return (
        <div>
            <img src={carousel(count)} alt='hero' />
            <button onClick={() => setCount(count - 1)}>prev</button>
            <button onClick={() => setCount(count + 1)}>next</button>
        </div>
    )
}

export default Layout
