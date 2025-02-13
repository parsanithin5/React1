import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div>Profile
        <hr />
        <br />
        <Link to='./Profile/MyAccount'>MY ACCOUNTS</Link><br/><br/>
        <Link to='./Profile/MySettings'>MY SETTINGS</Link>
        <Outlet/>
    </div>
  )
}

export default Profile