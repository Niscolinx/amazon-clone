import React from 'react'

const Slide = (props: any) => {
    
    const customStyles = {
        backgroundImage: `url(${props.image})`,
        width: '100%'
    }

    return (
        <div className='slide' style={customStyles}/>
    )
}

export default Slide
