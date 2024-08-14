import cookies from '../assets/images/cookies.svg';
import { useState } from "react";

export default function Header(){
  const [scroled, setScroled] = useState<boolean>(false);
  return (
    <header className="w-3/4 mx-auto h-24 mt-8 flex justify-between items-center" style={{transition: 'margin-top .15s ease-out'}} onScroll={() => {setScroled(true)}}>
      <div className="flex justify-between items-center gap-x-3">
        <h1 className="text-2xl font-semibold">Cookies</h1>
        <img src={cookies} alt="cookies" />
      </div>
      <div className="flex justify-between items-center gap-x-3">
        <button
          className="w-16 h-11 text-sm font-bold rounded-lg bg-slate-700 hover:bg-slate-600"
        >
          Вход
        </button>
        <button
          className="w-32 h-11 text-sm font-bold rounded-lg bg-blue-600 hover:bg-blue-500"
        >
          Регистрация
        </button>
      </div>
     </header>
  )
}