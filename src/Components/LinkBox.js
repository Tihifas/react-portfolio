import React from 'react'
import { Link } from 'react-router-dom'

export const LinkBox = ({heading, img}) => {
    return (
        <Link to='/link1' className='linkbox-outer'>
            <div className='linkbox-content'>
                <div className='linkbox-heading'> {heading} </div>
                <img src={img} className='linkbox-img'/>
            </div>
        </Link>
    )
}
