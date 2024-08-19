import { useState } from "react";
import eye from '../assets/images/eye.svg';

export default function Bet({avatar, name, bet, multiplier}:{avatar:any, name:string, bet:number, multiplier:number}) {
  const [onHover, setOnHover] = useState<boolean>(false);

  const renderMultiplier = () => {
    switch(multiplier){
      case 50:
      return <span className="w-16 h-7 flex justify-center items-center rounded-md text-xs font-semibold bg-yellow-700 bg-opacity-5 text-yellow-400">x50.00</span>
      case 5.2:
      return <span className="w-16 h-7 flex justify-center items-center rounded-md text-xs font-semibold bg-green-700 bg-opacity-5 text-green-400">x5.20</span>
      case 4:
      return <span className="w-16 h-7 flex justify-center items-center rounded-md text-xs font-semibold bg-blue-700 bg-opacity-5 text-blue-400">x4.00</span>
      case 2.95:
      return <span className="w-16 h-7 flex justify-center items-center rounded-md text-xs font-semibold bg-blue-700 bg-opacity-5 text-blue-400">x2.95</span>
      case 1.95:
      return <span className="w-16 h-7 flex justify-center items-center rounded-md text-xs font-semibold bg-slate-700 bg-opacity-5 text-slate-400">x1.95</span>
      case 0.1:
      return <span className="w-16 h-7 flex justify-center items-center rounded-md text-xs font-semibold bg-red-700 bg-opacity-5 text-red-400">x0.10</span>
      case 0:
      return <span className="w-16 h-7 flex justify-center items-center rounded-md text-xs font-semibold bg-red-700 bg-opacity-5 text-red-400">x0.00</span>
    }
  }

  const renderResult = () => {
      if(multiplier === 50){
        return <span className="w-16 h-7 flex justify-center items-center rounded-md text-xs font-semibold bg-yellow-700 bg-opacity-5 text-yellow-400">₽{bet * multiplier}</span>
      }
      
      if(multiplier < 50 && multiplier > 1){
        return <span className="w-16 h-7 flex justify-center items-center rounded-md text-xs font-semibold bg-green-700 bg-opacity-5 text-green-400">₽{bet * multiplier}</span>
      }
      
      if(multiplier < 1){
        return <span className="w-16 h-7 flex justify-center items-center rounded-md text-xs font-semibold bg-slate-700 bg-opacity-5 text-slate-400">₽{bet * multiplier}</span>
      }
      
    
  }
  return (
   
          <div className="flex items-center bg-slate-800 rounded-xl p-2 justify-between hover:bg-slate-700" onMouseEnter={() => {setOnHover(true)}} onMouseLeave={() => {setOnHover(false)}}>
          <div className="flex gap-x-2">
            <img src={avatar} alt="avatar" className="w-8 h-8 rounded-md"/>
            <div className="flex flex-col">
              <p className="text-xs font-medium text-white">{name}</p>
              <p className="text-xs font-medium text-slate-600">{bet}₽</p>
            </div>
          </div>
          {
            renderMultiplier()
          }
          {
            renderResult()
          }
          <div className="p-2 rounded-md bg-slate-600 cursor-pointer" style={onHover ? {backgroundColor: 'rgb(37 99 235 / var(--tw-bg-opacity))'} : {}}>
            <img src={eye} alt="eye" className="w-3 h-3"/>
          </div>
        </div>
  )
}