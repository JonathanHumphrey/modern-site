import React from 'react'

export default function About(props) {
    return (
        <div className='selectedTab'>
            <div className='close' onClick={props.handleClose}>&#10006;</div>
            <h3>About</h3>
            <hr />
            <p className='tabText'>We are a restaurant dedicated to modernity at any cost. If there is even an inkling of modernity we will pursure, consume, and bastardize it. We will stop at nothing until all sense of modernity is instilled deeply into our customers mind. When you come in, we want you to think "Wow, this is modern!". From our rich and wholesome, fairly traded and fairly old food we will blow you away with simple yet timeless creations from our all-foody chef staff. </p>
        </div>
    )
}
