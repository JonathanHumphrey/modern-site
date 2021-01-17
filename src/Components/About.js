import React from 'react'

export default function About(props) {
    return (
        <div className='selectedTab'>
            <div className='close' onClick={props.handleClose}>&#10006;</div>
            <h3>About</h3>
            <p className='tabText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Faucibus pulvinar elementum integer enim neque volutpat ac. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Feugiat vivamus at augue eget arcu dictum varius duis at. Aliquam sem fringilla ut morbi tincidunt. Urna duis convallis convallis tellus id interdum velit laoreet id. Egestas sed sed risus pretium quam vulputate. Turpis nunc eget lorem dolor. Nibh sed pulvinar proin gravida hendrerit lectus a. Non diam phasellus vestibulum lorem.</p>
        </div>
    )
}
