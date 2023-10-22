import React from 'react'

const Nav = (props) => {

    // desctructuring props--
  const  {logoTitle,btnTitle} =props


    return (
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", border:"2px solid red"}}><h2>{logoTitle}</h2> <button>{btnTitle}</button> </div>
    )
}

export default Nav

