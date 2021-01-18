import React from 'react'

import {SocialIcon} from 'react-social-icons'

export default function Contact(props) {
    
    return (
        <div className='selectedTab'>
            <div className='close' onClick={props.handleClose}>&#10006;</div>
            <h3>Contact</h3>
            <hr />
            <SocialIcon 
                className='social' 
                target='_blank' 
                url="http://twitter.com" 
                bgColor='#a39d9d'
                style={{height: 100, width: 100}}
            />
            <SocialIcon 
                className='social' 
                target='_blank' 
                url="http://instagram.com" 
                bgColor='#a39d9d'
                style={{height: 100, width: 100}}
            />
            <SocialIcon 
                className='social' 
                target='_blank' 
                url="http://facebook.com" 
                bgColor='#a39d9d'
                style={{height: 100, width: 100}}
            />
            <SocialIcon 
                className='social' 
                target='_blank' 
                url="http://gmail.com" 
                bgColor='#a39d9d' 
                label='email'
                style={{height: 100, width: 100}}
            />
        </div>
    )
}
