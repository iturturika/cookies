import soundOn from '../assets/images/soundOn.svg';
import soundOff from '../assets/images/soundOff.svg';
import React, { useState } from 'react';

export default function SoundSelect(){
  const [onClick, setOnClick] = useState<boolean>(false);

  return(
    <div 
      className="w-11 h-11 flex items-center justify-between px-3 py-3 rounded-lg cursor-pointer" 
      style={{border: '1px solid rgb(150, 160, 175)'}} 
      onClick={() => {
      setOnClick(!onClick);
    }}>
      {
        onClick
        ?
        <img src={soundOn} alt="soundOn" />
        :
        <img src={soundOff} alt="soundOff" />
      }
    </div>
  )
}