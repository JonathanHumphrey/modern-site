import React, {useState} from 'react'
import './App.css';

import Navigation from './Components/Navigation'
import Menu from './Components/Menu'
import About from './Components/About'
import Contact from './Components/Contact'



function App() {
  const [tab, setTab] = useState('')

  const handleClose = event => {
    console.log(event.target)
    setTab('#')
}
  return (
    <div className="App">
      <Navigation
        tab={tab}
        setTab={setTab}
      />
      <div className='body'>
        {
          tab === '#menu' ? <Menu setTab={setTab} handleClose={handleClose}/> 
          : tab === '#about' ? <About setTab={setTab} handleClose={handleClose}/> 
            : tab ==='#contact' ? <Contact setTab={setTab} handleClose={handleClose}/> 
              : null
        }
      </div>
    </div>
  );
}

export default App;
