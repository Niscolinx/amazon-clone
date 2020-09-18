import React from 'react'

function Slide(props: any) {
    
    const customStyles = {
        backgroundImage: `url(${props.image})`,
        width: '1000%'
    }

    return (
        <div className='slide' style={customStyles}>
            slide
        </div>
    )
}

export default Slide
