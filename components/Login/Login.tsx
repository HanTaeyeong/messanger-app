import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { userData } from '../../store/recoil'

export default function Login() {
  const [user, setUser] = useRecoilState(userData)
  const [loginData, setLoginData] = useState({});

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <form>
        <input className='login-input' placeholder='ID' name={'ID'} onChange={e => onChange(e)}></input>
        <input className='login-input' placeholder='Password' name={'password'} onChange={e => onChange(e)}></input>
        <button className='login-button' onClick={e => onClick(e)}>Sign in</button>
      </form>
    </div>
  )
}
