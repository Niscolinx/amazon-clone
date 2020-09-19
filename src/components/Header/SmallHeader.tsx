import React from 'react'

import LocationOnIcon from '@material-ui/icons/LocationOn'

const SmallHeader = () => {
    return (
        <div className='smallHeader'>
            <div className='smallHeader-1'>
                <LocationOnIcon />
                <div className='delivery'>
                    <span className='delivery__to'>Deliver to</span>
                    <span className='delivery__country'>Nigeria</span>
                </div>
            </div>
            <div className='smallHeader-2'>
                <ul className='list'>
                    <li className='list__item'>Today's Deals</li>
                    <li className='list__item'>Customer Service</li>
                    <li className='list__item'>Gift Cards</li>
                    <li className='list__item'>Registry</li>
                    <li className='list__item'>Sell</li>
                </ul>
            </div>
            <div className='smallHeader-3'><p className='amazon-response'>Amazon's response to COVID-19</p></div>
        </div>
    )
}

export default SmallHeader
