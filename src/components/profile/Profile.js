import React from 'react'
import {useAuth} from "../contexts/AuthContext";
export default function Profile() {
  const {profile} = useAuth();
  profile();
  return (

    <div>
      <p>name is user548</p>

    </div>
  )
}
