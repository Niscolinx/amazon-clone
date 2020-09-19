import React from 'react'

const Dots = (props: any) => {
    const Dot = (props: any) => {
        return (
            <span
                onClick={() => props.dot()}
                className='dot'
                style={{ backgroundColor: props.active ? '#333' : '#b9b8b8' }}
            />
        )
    }
    const Dots = props.images.map((dot: any, i: number) => {
        return <Dot key={dot + i} active={i === props.dots} dot={() => props.handleClick(i)}/>
    })

    return <div className='dots'>{Dots}</div>
}

export default Dots
