import React from 'react'
import { Link } from 'react-router-dom'


export const LinkBox = () => {
    return (
        <Link to='/link1' className='linkbox-outer'>
            <div className='linkbox-content'>
                <div className='linkbox-heading'> link1 </div>
            </div>
        </Link>
    )
}
