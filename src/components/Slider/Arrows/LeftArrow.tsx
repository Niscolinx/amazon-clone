import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function LeftArrow(props: any) {
    return (
        <div className='arrow' onClick={props.handleClick}>
            <ArrowBackIosIcon className='arrow__left'/>
        </div>
    )
}

export default LeftArrow
