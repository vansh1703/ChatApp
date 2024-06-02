import React from 'react'
import User from './User'

function Users() {
  return (
    <div>
        <h1 className='px-8 py-2 text-white font-semibold bg-slate-900 rounded-md'>
            Mesages
        </h1>
        <div className='overflow-y-auto flex-1 py-2' style={{ maxHeight:"calc(84vh - 10vh)"}}>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
        </div>
    </div>
  )
}

export default Users