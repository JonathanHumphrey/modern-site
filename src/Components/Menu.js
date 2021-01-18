import React from 'react'

export default function Menu(props) {
    return (
        <div className='selectedTab'>
            <div>
                <div className='close' onClick={props.handleClose}>&#10006;</div>
                <h3>Menu</h3>
                <hr />
                <h4>Entree</h4>
                <p className='menuText'>Toast....................................................................9</p>
                <sub className='menuTextSub'>Re-cooked bread</sub>
                <p className='menuText'>Roast....................................................................15</p>
                <sub className='menuTextSub'>Longly cooked meats</sub>
                <hr />
                <h4>Desserts</h4>
                <p className='menuText'>Chocolate................................................................9</p>
                <sub className='menuTextSub'>It is just the hershey's syrup frozen to look like a gnome</sub>
                <hr />
                <h4>Cocktails</h4>
                <p className='menuText'>Hot Water................................................................20</p>
                <sub className='menuTextSub'>Water Heated to perfect scalding temperatures, comes with splenda</sub>
                <p className='menuText'>Milk....................................................................9</p>
                <sub className='menuTextSub'>Liquid squeezed through a fine, flesh sieve</sub>
            </div>
        </div>
    )
}
