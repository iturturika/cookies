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
import { useState } from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [onHover, setOnHover] = useState<boolean>(false);
  return (
    <div className="relative flex flex-row h-screen">
      <aside className="fixed top-0 left-0 h-screen w-64 flex flex-col items-center px-3 py-5 overflow-y-scroll gap-y-1">
        <Link href="/">
          <img src={logo} alt="logo" />
        </Link>
        <NavButton icon={crashIcon} name={'Crash'}/>
        <NavButton icon={plinko} name={'Plinko'}/>
        <NavButton icon={miner} name={'Miner'}/>
        <NavButton icon={cookies} name={'Cookies'}/>
        <NavButton icon={nuts} name={'Nuts'}/>
        <NavButton icon={keno} name={'Keno'}/>
        <NavButton icon={coinflip} name={'Coinflip'}/>
        <NavSeparator />
        <NavButton icon={bonuses} name={'Бонусы'}/>
        <NavButton icon={partners} name={'Партнерка'}/>
        <NavButton icon={help} name={'Помощь'}/>
        <NavButton icon={support} name={'Поддержка'}/>
        <NavSeparator />
        <div className="relative w-full flex items-center content-center cursor-pointer rounded-lg overflow-hidden" onMouseEnter={() => {setOnHover(true)}} onMouseLeave={() => {setOnHover(false)}} style={{backgroundColor: '#4b4fae',background: 'linear-gradient(318deg,#303489,#494dab)', minHeight: '54px', maxHeight: '54px'}}>
          <div className="absolute flex items-center">
            <img src={circle} alt="circle" className={onHover ? "paused mr-1" : "rotate"} style={{marginLeft: '-18px'}}/>
            <img src={circlePart} alt="circlePart" className="w-2"/>
          </div>
          <div className="flex flex-col ml-auto mr-2 w-32">
            <div className="flex flex-row justify-between">
              <p style={{color: '#fff', fontSize: '13px', fontWeight: '700'}}>WHEEL</p>
              <p style={{color: 'hsla(0,0%,100%,.5)', fontSize: '10px'}}>10 из 10</p>
            </div>

            <p style={{color: 'hsla(0,0%,100%,.5)', fontSize: '13px', fontWeight: '700'}}>Крутить</p>
          </div>
          <img src={backgroundImg} alt="backgroundImg"  className="absolute right-0"/>
        </div>
      </aside>
      <main className="relative ml-64 mr-0 h-screen w-full">
        {children}
      </main>

    </div>
  );
}
