import React, { useState, useEffect, useRef } from 'react'
import SlideComponent from './SliderComponent'
import LeftArrow from './Arrows/LeftArrow'
import RightArrow from './Arrows/RightArrow'

interface slideProps {
    images: string[]
    autoPlay?: number
}

const getWidth = () => window.innerWidth

const Slider = (props: slideProps) => {
    const firstSlide = props.images[0]
    const secondSlide = props.images[1]
    const lastSlide = props.images[props.images.length - 1]

    const [state, setState] = useState({
        currentSlide: 0,
        transform: getWidth(),
        transition: 0.45,
        _slides: [lastSlide, firstSlide, secondSlide],
    })
    let { currentSlide, _slides, transform } = state

    const autoPlayRef: any = useRef()
    const transitionRef: any = useRef()

    useEffect(() => {
        autoPlayRef.current = nextSlide
        transitionRef.current = smoothTransition
    })

    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }

        const smooth = () => {
            transitionRef.current()
        }

        const transitionEnd:any = window.addEventListener('transitionend', smooth)
        let interval: any = null
        if (props.autoPlay) {
            interval = setInterval(play, props.autoPlay * 1000)
        }

        return () => {
            if (props.autoPlay) {
                clearInterval(interval)
            }
            window.removeEventListener('transitionend',transitionEnd)
        }
    }, [props.autoPlay])

    const smoothTransition = () => {
        if (currentSlide === _slides.length - 1) {
            _slides = [_slides[_slides.length - 2], lastSlide, firstSlide]
        } else if (currentSlide === 0) {
            _slides = [lastSlide, firstSlide, secondSlide]
        } else {
            _slides = _slides.slice(currentSlide - 1, currentSlide + 2)
        }

        setState({
            ...state,
            _slides,
            transition: 0,
            transform: getWidth(),
        })
    }

    const nextSlide = () => {
        setState({
            ...state,
            currentSlide:
                currentSlide === _slides.length - 1 ? 0 : currentSlide + 1,
            transform: transform + getWidth(),
        })
    }

    const prevSlide = () => {
        setState({
            ...state,
            currentSlide:
                currentSlide === 0 ? _slides.length - 1 : currentSlide - 1,
            transform: 0,
        })
    }

    console.log('the next Slide', _slides, currentSlide)

    // const dotClick = (n: number) => {
    //     setState({
    //         ...state,
    //         currentSlide: n,
    //         transform: n * getWidth()
    //     })
    // }

    return (
        <div className='slider'>
            <SlideComponent
                images={_slides}
                transform={state.transform}
                width={getWidth()}
                transition={state.transition}
            />
            <div className='slider__leftArrow'>
                <LeftArrow handleClick={prevSlide} />
            </div>
            <div className='slider__rightArrow'>
                <RightArrow handleClick={nextSlide} />
            </div>

            {/* <div className='Slider__dots'>
                <Dots dots={currentSlide} images={props.images} handleClick={(n:number) => dotClick(n)}
                />
            </div> */}
        </div>
    )
}

export default Slider
