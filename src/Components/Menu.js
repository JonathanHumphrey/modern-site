import React from 'react'

export default function Menu(props) {
    return (
        <div className='selectedTab'>
            <div className='close' onClick={props.handleClose}>&#10006;</div>
            <h3>Menu</h3>
        </div>
    )
}
