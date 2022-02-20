import React from 'react'
import { useRecoilState } from 'recoil'
import { testDate, testWeekName } from './recoil'


export default function RecoilTestComponent() {
  const [date, setDate] = useRecoilState(testDate)
  const [weekName, setWeekName] = useRecoilState(testWeekName)
  
  const onClick = () => {
    setDate(1)
  }
  
  return (
    <div>
      <head className='date'>{date}</head>
      <div className='week-name'>{weekName}</div>
      <button className="test-button" onClick={onClick}>increase</button>
    </div>
  )
}
