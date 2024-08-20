import { useState } from 'react';

import arrow from '../assets/images/arrow.svg';
import checkbox from '../assets/images/checkbox.svg';

export default function LanguageSelect({data}:{data:any}){
  const [onClick, setOnClick] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>(data[0]);

  return(
    <div className="relative xl:w-40 h-11 flex items-center justify-between px-3 py-4 rounded-lg cursor-pointer lg:w-11 md:w-11 sm:w-11"
      style={onClick ? {border: '1px solid #246bfd', boxShadow: '0 0 0 3px rgba(36, 107, 253, .15)'} : {border: '1px solid rgb(150, 160, 175)'}} 
      onClick={() => {setOnClick(!onClick)}} 
    >
      <img src={selected.img} alt="russian" className="w-4 rounded-sm"/>
      <p className="text-sm xl:flex lg:hidden md:hidden sm:hidden" style={{color: 'rgb(150, 160, 175)'}}>{selected.language}</p>
      <img src={arrow} alt="arrow" className={onClick ? "rotate-0 xl:flex lg:hidden md:hidden sm:hidden" : "rotate-180 xl:flex lg:hidden md:hidden sm:hidden"}/>
      <ul 
        className={onClick ? "flex absolute xl:w-40 flex-col gap-y-1 h-24 z-10 rounded-lg px-1 py-2 lg:w-11 lg:justify-between lg:items-center md:w-11 md:justify-between md:items-center sm:w-11 sm:justify-between sm:items-center" : "hidden absolute xl:w-40 flex-col gap-y-1 h-24 z-10 rounded-lg px-1 py-2 md:w-11 md:justify-between md:items-center sm:w-11 sm:justify-between sm:items-center"} 
        style={{top: '-106px', left: '0px', background: 'linear-gradient(180deg, rgba(43, 47, 60, .85), rgba(51, 56, 72, .85))', backdropFilter: 'blur(4px)'}}
        onClick={(event) => {event.stopPropagation()}}
      > 
        {
          data.map((item:any) => {
            return (
              <li className="flex w-full h-9 hover:bg-blue-700 px-1 py-2 items-center rounded-md gap-x-5" key={item.value} onClick={() => {setSelected(item); setOnClick(false)}}>
                <img src={item.img} alt="russian" className="xl:w-4 rounded-sm lg:w-full md:w-full sm:w-full"/>
                <p className="text-sm xl:flex lg:hidden md:hidden sm:hidden" style={{color: 'rgb(150, 160, 175)'}}>{item.language}</p>
                {selected.value === item.value ? <img src={checkbox} alt="checkbox" className='xl:flex lg:hidden md:hidden sm:hidden'/> : null}
              </li>
            )
          })
        }
        <span className="absolute h-0 w-0 bottom-0 left-5" style={{marginBottom: '-14px', border: '7px solid transparent', borderTopColor: 'rgba(51, 56, 72, .85)'}}/>
      </ul>
    </div>
  )
}