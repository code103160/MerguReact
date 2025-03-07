import React, { useState } from 'react'
import Logout from '../functions/Logout'

export default function SessionDestroyer() {

    const mail = useState(sessionStorage.getItem("streamingEmail"));
    const toke = useState(sessionStorage.getItem("streamingToken"));

  return (
    <button className="btn btn-danger" onClick={Logout(mail, toke)}> Log Out </button>
  )
}
