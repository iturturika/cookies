import { Link } from "@nextui-org/link";
import logo from '../assets/images/logo.svg';
import crashIcon from '../assets/images/crash.svg';
import plinko from '../assets/images/plinko.svg';
import miner from '../assets/images/miner.svg';
import cookies from '../assets/images/cookies.svg';
import nuts from '../assets/images/nuts.svg';
import keno from '../assets/images/keno.svg';
import coinflip from '../assets/images/coinflip.svg';
import bonuses from '../assets/images/bonuses.svg';
import partners from '../assets/images/partners.svg';
import help from '../assets/images/help.svg';
import support from '../assets/images/support.svg';
import NavButton from "@/components/NavButton.tsx";
import NavSeparator from "@/components/NavSeparator";
import circle from '../assets/images/834b63c.png';
import backgroundImg from '../assets/images/fd1fb26.png';
import circlePart from '../assets/images/part.png';
import russian from '../assets/images/68d0e08.svg';
import english from '../assets/images/e52f959.svg';
import logosm from '../assets/images/logosm.svg';
import menu from '../assets/images/menu.svg';
import login from '../assets/images/login.svg';


import { useState } from "react";
import LanguageSelect from "@/components/LanguageSelect";
import SoundSelect from "@/components/SoundSelect";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [onHover, setOnHover] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('Cookies');
  const [onClickMenu, setOnClickMenu] = useState<boolean>(false);

  return (
    <div className="relative flex flex-row min-h-screen">
      <aside 
        className={onClickMenu ? "fixed top-0 left-0 z-50 h-screen xl:w-64 flex-col items-center px-3 py-5 overflow-y-scroll justify-between lg:w-20 md:flex md:w-20 sm:flex sm:w-20 flex" : "fixed top-0 left-0 z-50 h-screen xl:w-64 flex-col items-center px-3 py-5 overflow-y-scroll justify-between lg:w-20 md:flex md:w-20 sm:hidden sm:w-20 hidden"}
        style={{ borderRight: '1px solid #2b2f3c', backgroundColor: '#151d28'}}
      >
        <Link href="/">
          <img src={logo} alt="logo" />
        </Link>
        <NavButton icon={crashIcon} name={'Crash'} selected={selected} setSelected={setSelected}/>
        <NavButton icon={plinko} name={'Plinko'} selected={selected} setSelected={setSelected}/>
        <NavButton icon={miner} name={'Miner'} selected={selected} setSelected={setSelected}/>
        <NavButton icon={cookies} name={'Cookies'} selected={selected} setSelected={setSelected}/>
        <NavButton icon={nuts} name={'Nuts'} selected={selected} setSelected={setSelected}/>
        <NavButton icon={keno} name={'Keno'} selected={selected} setSelected={setSelected}/>
        <NavButton icon={coinflip} name={'Coinflip'} selected={selected} setSelected={setSelected}/>
        <NavSeparator />
        <NavButton icon={bonuses} name={'Бонусы'} selected={selected} setSelected={setSelected}/>
        <NavButton icon={partners} name={'Партнерка'} selected={selected} setSelected={setSelected}/>
        <NavButton icon={help} name={'Помощь'} selected={selected} setSelected={setSelected}/>
        <NavButton icon={support} name={'Поддержка'} selected={selected} setSelected={setSelected}/>
        <NavSeparator />
        <div className="relative xl:w-full flex items-center content-center cursor-pointer rounded-lg overflow-hidden lg:w-12 md:w-12 sm:w-12" onMouseEnter={() => {setOnHover(true)}} onMouseLeave={() => {setOnHover(false)}} style={{backgroundColor: '#4b4fae',background: 'linear-gradient(318deg,#303489,#494dab)', minHeight: '54px', maxHeight: '54px'}}>
          <div className="absolute flex items-center">
            <img src={circle} alt="circle" className={onHover ? "paused mr-1 xl:-ml-5 lg:ml-0 md:ml-0 sm:ml-0" : "rotate xl:-ml-5 lg:ml-0 md:ml-0 sm:ml-0"} />
            <img src={circlePart} alt="circlePart" className="xl:w-2 xl:flex lg:hidden md:hidden sm:hidden"/>
          </div>
          <div className="xl:flex flex-col ml-auto mr-2 w-32 lg:hidden md:hidden sm:hidden">
            <div className="flex flex-row justify-between ">
              <p style={{color: '#fff', fontSize: '13px', fontWeight: '700'}}>WHEEL</p>
              <p style={{color: 'hsla(0,0%,100%,.5)', fontSize: '10px'}}>10 из 10</p>
            </div>

            <p style={{color: 'hsla(0,0%,100%,.5)', fontSize: '13px', fontWeight: '700'}}>Крутить</p>
          </div>
          <img src={backgroundImg} alt="backgroundImg"  className="absolute right-0"/>
        </div>
        <NavSeparator />
        <div className="flex w-full justify-between xl:flex-row lg:flex-col lg:gap-y-2 lg:items-center md:flex-col md:gap-y-2 md:items-center sm:flex-col sm:gap-y-2 sm:items-center">
          <LanguageSelect data={[
            {language: 'Русский', value: 'russian', img: russian},
            {language: 'English', value: 'english', img: english}
          ]}/>
          <SoundSelect />
        </div>
      </aside>
      <main className="relative xl:ml-64 mr-0 min-h-screen w-full flex flex-col gap-y-11 lg:ml-20 md:ml-20 sm:ml-0" style={{backgroundColor: '#151d28'}} onClick={() => {setOnClickMenu(false)}}>
        {children}
      </main>
      <div className="bg-slate-700 w-max fixed bottom-5 left-1/2 -translate-x-1/2 rounded-full p-3 z-40 md:hidden">
        <ul className="flex w-full items-end justify-between gap-x-8">
          <li className="flex flex-col justify-center items-center gap-y-1 w-9">
            <img src={bonuses} alt="bonuses" className="w-6"/>
            <p className="text-slate-400 font-medium" style={{fontSize: '10px'}}>Бонусы</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-y-1 w-9">
            <img src={partners} alt="bonuses" className="w-6"/>
            <p className="text-slate-400 font-medium" style={{fontSize: '10px'}}>Партнерка</p>
          </li>
          <li className="relaitive flex flex-col justify-end items-end gap-y-1 w-9">
            <div className="bg-blue-600 p-2 rounded-full absolute -top-3 left-1/2 -translate-x-1/2">
              <img src={logosm} alt="bonuses" className="w-7"/>
            </div>
            <p className="text-slate-400 font-medium" style={{fontSize: '10px'}}>Играть</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-y-1 w-9">
            <img src={login} alt="bonuses" className="w-6"/>
            <p className="text-slate-400 font-medium" style={{fontSize: '10px'}}>Войти</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-y-1 w-9" onClick={() => {setOnClickMenu(!onClickMenu)}}>
            <img src={menu} alt="bonuses" className="w-6"/>
            <p className="text-slate-400 font-medium" style={{fontSize: '10px'}}>Меню</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
