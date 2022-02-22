import React from 'react'
import Link from 'next/link'


const mockRooms = [
  { id: '12', name: 'first room' },
  { id: '53', name: 'second room' }
]

function RoomSelect() {

  return (
    <div className='room-list'>
      <div>Create Room</div>

      {mockRooms.map(room =>
        <div key={room.id}>
          <Link href='/room/[roomId]' as={`/room/${room.id}`} >
            <a className='room-list-item' id={room.id} >
              {room.name}
            </a>
          </Link>
        </div>
      )}

      <div>Search Room</div>

    </div>
  )
}

export default RoomSelect