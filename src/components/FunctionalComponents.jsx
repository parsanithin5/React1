import React from 'react'

function FunctionalComponents(props) {
    console.log(props);
    
  return (
    <div>
        <h1>welcome to react{props.clgName},{props.city}</h1>
    </div>
  )
}

export default FunctionalComponents