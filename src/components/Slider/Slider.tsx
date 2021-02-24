import React, { useState, useEffect, useRef } from 'react'
import SlideComponent from './SliderComponent'
import LeftArrow from './Arrows/LeftArrow'
import RightArrow from './Arrows/RightArrow'
import Slide from './Slide'

interface slideProps {
    images: string[]
    autoPlay?: number
}

const getWidth = () => window.innerWidth

const Slider = (props: slideProps) => {
    const slides = props.images
    
    const firstSlide = slides[0]
    const secondSlide = slides[1]
    const lastSlide = slides[slides.length - 1]

    const [state, setState] = useState({
        currentSlide: 0,
        transform: getWidth(),
        transition: 0.45,
        _slides: [lastSlide, firstSlide, secondSlide],
    })
    const { currentSlide, _slides, transform, transition } = state

    const autoPlayRef: any = useRef()
    const transitionRef: any = useRef()
    const resizeRef: any = useRef()

    useEffect(() => {
        autoPlayRef.current = nextSlide
        transitionRef.current = smoothTransition
        resizeRef.current = handleResize
    })

    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }

        const smooth = (e: any) => {
            if (e.target.className.includes('sliderComponent')) {
                transitionRef.current()
            }
        }

        const size = () => {
            resizeRef.current()
        }

        const transitionEnd: any = window.addEventListener(
            'transitionend',
            smooth
        )
        const resize: any = window.addEventListener('resize', size)

        let interval: any = null

        if (props.autoPlay) {
            interval = setInterval(play, props.autoPlay * 1000)
        }

        return () => {
            window.removeEventListener('transitionend', transitionEnd)
            window.removeEventListener('resize', resize)

            if (props.autoPlay) {
                clearInterval(interval)
            }
        }
    }, [props.autoPlay])

    useEffect(() => {
        console.log('the transition state', state)
        if (transition === 0) {
            setState({
                ...state,
                transition: .45,
            })
        }
    }, [transition])

    const handleResize = () => {
        setState({
            ...state,
            transition: 0,
            transform: getWidth(),
        })
    }

    const smoothTransition = () => {
        let _slides: any = []

        if (currentSlide === slides.length - 1) {
            _slides = [
                slides[slides.length - 2],
                lastSlide,
                firstSlide,
            ]
        } else if (currentSlide === 0) {
            _slides = [lastSlide, firstSlide, secondSlide]
        } else {
            _slides = slides.slice(currentSlide - 1, currentSlide + 2)
        }
        console.log('the smooth transition', _slides)

        setState({
            ...state,
            _slides,
            transition: 0,
            transform: getWidth(),
        })
    }

    const nextSlide = () => {
        console.log('the next slide', _slides)
        setState({
            ...state,
            currentSlide:
                currentSlide === slides.length - 1 ? 0 : currentSlide + 1,
            transform: transform + getWidth(),
        })
    }

    const prevSlide = () => {
        console.log('the prev slide', _slides)
        setState({
            ...state,
            currentSlide:
                currentSlide === 0 ? slides.length - 1 : currentSlide - 1,
            transform: 0,
        })
    }

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
                // images={_slides}
                transform={transform}
                width={getWidth() * _slides.length}
                transition={transition}
            >
                {_slides.map((_slide, i) => (
                    <Slide
                        width={getWidth()}
                        key={_slide + i}
                        image={_slide}
                    />
                ))}
            </SlideComponent>
            <div className='slider__leftArrow'>
                <LeftArrow handleClick={prevSlide} />
            </div>
            <div className='slider__rightArrow'>
                <RightArrow handleClick={nextSlide} />
            </div>

            {/* <div className='slider__dots'>
                <Dots dots={currentSlide} images={slides} handleClick={(n:number) => dotClick(n)}
                />
            </div> */}
        </div>
    )
}

export default Slider
