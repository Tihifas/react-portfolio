import Module from 'module'
import React from 'react'
import { Link } from 'react-router-dom'

type LinkBoxProps = {
    link : string,
    heading: string,
    img: string
}

export const LinkBox = ({link, heading, img}: LinkBoxProps) => {
    return (
        <Link to={link} className='linkbox-outer'>
            <div className='linkbox-content'>
                <div className='linkbox-heading'> {heading} </div>
                <img src={img} className='linkbox-img'/>
            </div>
        </Link>
    )
}
