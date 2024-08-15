import { useState } from 'react';


export default function SettingsButton({icon, onClickIcon, text, onClickText, placeholder}:{icon:any, onClickIcon:any, text:string, onClickText:string, placeholder?:string}){
  const [onHover, setOnHover] = useState<boolean>(false);
  const [onClick, setOnClick] = useState<boolean>(false);
  return (
    <div 
      className={placeholder ? "relative w-max h-8 px-2 flex justify-center items-center rounded-lg bg-slate-600 cursor-pointer hover:bg-slate-200 text-center gap-x-3" : "relative w-8 h-8 flex justify-center items-center rounded-lg bg-slate-600 cursor-pointer hover:bg-slate-200 text-center"} 
      onMouseEnter={() => {setOnHover(true)}} 
      onMouseLeave={() => {setOnHover(false)}}
      onClick={() => {setOnClick(!onClick)}}
      style={onClick ? {backgroundColor: 'rgb(226 232 240 / var(--tw-bg-opacity))'} : {}}
    >
      {
        onHover
        ?
          <div className="absolute w-max p-1 rounded-lg bg-slate-100" style={{top: '-40px'}}>
            <p className="text-slate-950 text-sm">{onClickText ? onClick ? onClickText : text : text}</p>
          </div>
        :
          null
      }
      {
        onHover ? <span className="absolute w-0 h-0 border-slate-300" style={{top: '-13px', borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '7px solid'}}/> : null
      }
      {placeholder ? <p className="text-sm" style={{color: '#c2e0ff'}}>{placeholder}</p> : null}
      <img src={onClickIcon ? onClick ? onClickIcon : icon : icon} alt="soundOff" className="w-4 h-4"/>
    </div>
  )
}