import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function RightArrow(props: any) {
    return (
        <div className='arrow' onClick={props.handleClick}>
            <ArrowForwardIosIcon className='arrow__right' />
        </div>
    )
}

export default RightArrow
