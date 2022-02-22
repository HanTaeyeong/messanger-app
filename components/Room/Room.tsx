import React from 'react'
import {useRouter} from 'next/router'

function Room() {
  const query = useRouter()?.query
  
  return (
    <div>Room</div>
  )
}

export default Room