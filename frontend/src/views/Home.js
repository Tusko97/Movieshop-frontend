import React from 'react'

function Home() {
  return (
    <div className = "Home">
     <div className ="container">
        <div className='first'>
        <img src = "/images/dracula.webp" />
        </div>
        <div className = 'second'>
         
          <img src="/images/second.png"/>
        </div>
        <div className='third'>
          <img src ="images/spread1.png" />
        </div>
        <div className='fourth'>
          {/* <h3>Take the Following Steps to Self-Protect</h3> */}
          {/* <img src = "images/prevention.png" /> */}
          <img src = "/images/prevention1.png"/>
        </div>
    </div>
    </div>
  )
}

export default Home