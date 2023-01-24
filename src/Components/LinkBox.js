import React from 'react'
import { Link } from 'react-router-dom'


export const LinkBox = () => {
    return (
        <Link to='/link1' className='link-box-outer'>
            <div className='link-box-content' >
                <div className='link-box-heading'> link1 </div>
            </div>
        </Link>
    )
}
