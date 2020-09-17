import React from 'react'
import Slider from '../components/Slider/Slider'

function Layout(props: any) {
    // let [count, setCount] = useState(0)
    // const [initialNumber, setInitialNumber] = useState(0)

    // const carousel = (c: number) => {
    //     console.log('the inner count', c)
    //     if (c >= images.length) {
    //         c = 0
    //     }
    //     if (c < 0) {
    //         c = images.length - 1
    //     }

    //     return images[c]
    // }

    // let num: number = 0
    // setInterval(() => {
    //     num++

    //     if(num >= images.length){
    //         num = 0
    //     }
    //     console.log('setinterval', num)

    //     setInitialNumber(num)
    //    // setCount(num)
    // }, 5000)

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
