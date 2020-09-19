import React from 'react'

const Dots = (props: any) => {
    const dots = props.images.map((dot:number, i:number) => {
        console.log('the inner dots', dot, i, props.dots)
        return <div key={dot + i} className='dot' style={{ backgroundColor: 'red' }}/>
    })

    return <div className='dots'>{dots}</div>
}

export default Dots
