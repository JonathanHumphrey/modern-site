import React from 'react'

export default function Navigation({tab, setTab}) {
    
    const handleClick = event => {
        console.log(event.nativeEvent.target.hash)
        setTab(event.nativeEvent.target.hash)
    }

    return (
        <div className='navigation'>
            <h1>Modern Food</h1>
            <hr />
            <p className='tabText' style={{cursor: 'pointer'}}>Order Online</p>
            <hr />
            <nav>
                <ul>
                    <li>
                        
                        <a onClick={handleClick} href='#menu' value='menu'>Menu</a>
                        <a onClick={handleClick} href='#about' value='about'>About</a>
                        <a onClick={handleClick} href='#contact' value ='contact'>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
