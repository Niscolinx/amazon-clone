import React from 'react'

const Slide = (props: any) => {

    const getWidth = () => window.innerWidth
    
    const customStyles = {
        backgroundImage: `url(${props.image})`,
        width: `${getWidth()}px`
    }

    return (
        <div className='slide' style={customStyles}/>
    )
}

export default Slide
