import React from 'react'
import Slide from './Slide'


interface myProps {
    transform: any
    width: any
    images: string[]
    transition: number | string
}

const SliderComponent = (props: myProps) => {

    const translate = `translateX(-${props.transform}px)`

    const customStyles = {
        transform: translate,
        width: props.width * props.images.length,
        transition: `transform ease-out ${props.transition}s`
    }

    const toSlide = props.images.map((img: string, i:number) => {
        return <Slide key={img + i} image={img} />
    })


    return (
        <div className='sliderComponent' style={customStyles}>
            {toSlide}
        </div>
    )
}

export default SliderComponent
