import React from 'react'
//import Slide from './Slide'


// interface myProps {
//     transform: any
//     width: any
//     images: string[]
//     transition: number | string
// }

const SliderComponent = (props: any) => {
  //  console.log('slide component', props)

    const translate = `translateX(-${props.transform}px)`

    const customStyles = {
        transform: translate,
        width: `${props.width}px`,
        transition: `transform ease-in ${props.transition}s`
    }

    // const toSlide = props.images.map((img: string, i:number) => {
    //     return <Slide key={img + i} image={img} />
    // })


    return (
        <div className='sliderComponent' style={customStyles}>
            {/* {toSlide} */}
            { props.children
        }        </div>
    )
}

export default SliderComponent
