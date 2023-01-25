import React from 'react'
import { Link } from 'react-router-dom'

export const LinkBox = ({link, heading, img}) => {
    return (
        <Link to={link} className='linkbox-outer'>
            <div className='linkbox-content'>
                <div className='linkbox-heading'> {heading} </div>
                <img src={img} className='linkbox-img'/>
            </div>
        </Link>
    )
}
