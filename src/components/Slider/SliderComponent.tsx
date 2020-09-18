import React from 'react'
import Slide from './Slide'

function SliderComponent(props: any) {
    interface myProps {
        transform: any
        width: any
        images?: []
    }

    const translate = `translateX(-${props.transform}px)`

    const customStyles: myProps = {
        transform: translate,
        width: props.width * props.images.length
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
