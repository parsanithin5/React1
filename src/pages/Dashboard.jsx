import React from 'react'

const Dashboard = () => {
  return (
    
    <div style={{margin:"100px 200px"}}>
      <form>
        <input type="text" placeholder='username'/><br/>
        <input type="email" placeholder='email'/><br/>
        <input type="password" placeholder='password'/><br/>
        <input type="radio" name='gender'/><label htmlFor="">Male</label>
        <input type="radio" name='gender'/><label htmlFor="">Female</label>
        <input type="radio" name='gender'/><label htmlFor="">Others</label>
      </form>

    </div>
  )
}

export default Dashboard