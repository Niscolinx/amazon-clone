import React from 'react'

const Slide = (props: any) => {
    
    const customStyles = {
        backgroundImage: `url(${props.image})`,
        width: `${props.width}px`
    }

    return (
        <div className='slide' style={customStyles}/>
    )
}

export default Slide
