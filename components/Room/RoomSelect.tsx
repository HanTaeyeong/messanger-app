import React from 'react'

const mockRooms = [
  { id: '12', name: 'first room' },
  { id: '53', name: 'second room' }
]

function RoomSelect() {

  return (
    <div className='room-list'>
      {mockRooms.map(room =>
        <div className='room-list-item' key={room.id} >{room.name}</div>
      )}
    </div>
  )
}

export default RoomSelect