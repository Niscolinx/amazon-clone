import React from 'react'

function Dots(props: any) {
    const dots = props.dots.map((dot:number, i:number) => {
        console.log('the inner dots', dot, i)
        return <div key={dot + i} className='dot' style={{ backgroundColor: 'red' }}/>
    })

    return <div className='dots'>{dots}</div>
}

export default Dots
