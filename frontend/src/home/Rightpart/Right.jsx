import React from 'react'
import Chatuser  from "./Chatuser";
import Messages from './Messages';
import Typesend from './Typesend';

function Right() {
  return (
    <div className='w-[70%] text-gray-300 bg-slate-900'>
      <Chatuser/>
      <div className='overflow-y-auto flex-1' style={{maxHeight:"calc(91vh - 8vh)"}}>
        <Messages/>
      </div>
      
      <Typesend/>
    </div>
  )
}

export default Right