import React, { useState } from 'react';

import arrow from '../assets/images/arrow.svg';
import checkbox from '../assets/images/checkbox.svg';

export default function LanguageSelect({data}:{data:any}){
  const [onClick, setOnClick] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>(data[0]);

  return(
    <div className="relative w-40 h-11 flex items-center justify-between px-3 py-4 rounded-lg cursor-pointer"
      style={onClick ? {border: '1px solid #246bfd', boxShadow: '0 0 0 3px rgba(36, 107, 253, .15)'} : {border: '1px solid rgb(150, 160, 175)'}} 
      onClick={() => {setOnClick(!onClick)}} 
    >
      <img src={selected.img} alt="russian" className="w-4 rounded-sm"/>
      <p className="text-sm" style={{color: 'rgb(150, 160, 175)'}}>{selected.language}</p>
      <img src={arrow} alt="arrow" className={onClick ? "rotate-0" : "rotate-180"}/>
      <ul 
        className={onClick ? "flex absolute w-40 flex-col gap-y-1 h-24 z-10 rounded-lg px-1 py-2" : "hidden absolute w-40 flex-col gap-y-1 h-24 z-10 rounded-lg px-1 py-2"} 
        style={{top: '-106px', left: '0px', background: 'linear-gradient(180deg, rgba(43, 47, 60, .85), rgba(51, 56, 72, .85))', backdropFilter: 'blur(4px)'}}
        onClick={(event) => {event.stopPropagation()}}
      > 
        {
          data.map((item:any) => {
            return (
              <li className="flex w-full h-9 hover:bg-blue-700 px-1 py-2 items-center rounded-md gap-x-5" key={item.value} onClick={() => {setSelected(item); setOnClick(false)}}>
                <img src={item.img} alt="russian" className="w-4 rounded-sm"/>
                <p className="text-sm" style={{color: 'rgb(150, 160, 175)'}}>{item.language}</p>
                {selected.value === item.value ? <img src={checkbox} alt="checkbox" /> : null}
              </li>
            )
          })
        }
        <span className="absolute h-0 w-0 bottom-0 left-5" style={{marginBottom: '-14px', border: '7px solid transparent', borderTopColor: 'rgba(51, 56, 72, .85)'}}/>
      </ul>
    </div>
  )
}