import React, { useState } from 'react'
import SlideComponent from './SliderComponent'
import LeftArrow from './Arrows/LeftArrow'
import RightArrow from './Arrows/RightArrow'
import Dots from './Dots'

function Slider(props: any) {
    const getWidth = () => window.innerWidth

    const [state, setState] = useState({
        currentSlide: 0,
        transform: 0,
    })

    const { currentSlide } = state
    const prevSlide = () => {
        if (currentSlide === 0) {
            setState({
                ...state,
                currentSlide: props.images.length - 1,
                transform: (props.images.length - 1) * getWidth(),
            })
        } else {
            setState({
                ...state,
                currentSlide: currentSlide - 1,
                transform: (currentSlide - 1) * getWidth(),
            })
        }
    }

    const nextSlide = () => {
        if (currentSlide === props.images.length - 1) {
            setState({
                ...state,
                currentSlide: 0,
                transform: 0
            })
        } else {
            setState({
                ...state,
                currentSlide: currentSlide + 1,
                transform: (currentSlide + 1) * getWidth(),
            })
        }
    }

    console.log('the state', state)

    return (
        <div className='slider'>
            <SlideComponent
                images={props.images}
                transform={state.transform}
                width={getWidth()}
            />
            <div className='slider__leftArrow'>
                <LeftArrow handleClick={prevSlide} />
            </div>
            <div className='slider__rightArrow'>
                <RightArrow handleClick={nextSlide} />
            </div>

            <div className='Slider__dots'>
                <Dots dots={currentSlide}/>
            </div>
        </div>
    )
}

export default Slider
