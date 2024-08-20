import Header from "@/components/Header";
import DefaultLayout from "@/layouts/default";
import backgroundImg from '../assets/images/6a34312.png';
import SettingsButton from "@/components/SettingsButton";
import soundOff from '../assets/images/soundOff.svg';
import soundOn from '../assets/images/soundOn.svg';
import animationOn from '../assets/images/animationOn.svg';
import animationOff from '../assets/images/animationOff.svg';
import shield from '../assets/images/shield.svg';
import faq from '../assets/images/faq.svg';
import man100 from '../assets/images/man100.svg';
import man0 from '../assets/images/man0.svg';
import manoutlined from '../assets/images/manoutlined.svg';
import cookie1 from '../assets/images/c0f1470.png';
import cookie2 from '../assets/images/5ebfd5c.png';
import cookie3 from '../assets/images/512cedb.png';
import cookie4 from '../assets/images/75d8a1e.png';
import cookie5 from '../assets/images/0ee5cb2.png';
import half from '../assets/images/half.svg';
import x2 from '../assets/images/x2.svg';
import avatar from '../assets/images/avatar.png';
import logo from '../assets/images/logo.svg';
import age from '../assets/images/age.svg';
import visa from '../assets/images/visa.svg';
import lock from '../assets/images/lock.svg';

import Slot from "@/components/Slot";
import Bet from "@/components/Bet";
import { useState } from "react";

export default function IndexPage() {
  const firstRow = [man100, man100, man100, man100, man100];
  const secondRow = [man100, man100, man100, man100, man0];
  const thirdRow = [man100, man100, man100, manoutlined, manoutlined];
  const fourthRow = [man100, man100, man100, man0, man0];
  const fifthRow = [man100, man100, manoutlined, manoutlined, man0];
  const sixthRow = [man100, man100, man0, man0, man0];
  const seventhRow = [man0, man0, man0, man0, man0];
  const [onClick, setOnClick] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('Средний');
  const [onClickButton, setOnClickButton] = useState<boolean>(false);
  const [betInput, setBetInput] = useState<number>(10);
  return (
    <DefaultLayout>
      <Header />
      <section className="w-11/12 mx-auto flex gap-x-8 xl:flex-row lg:flex-col lg:gap-y-8 md:flex-col md:gap-y-8 sm:flex-col sm:gap-y-8 flex-col gap-y-8">
        <div className="xl:w-3/5 flex flex-col xl:h-80 gap-y-3 lg:w-full md:w-full sm:w-full w-full" >
          <div 
            className="w-full h-full flex rounded-lg bg-slate-700 relative"
          >
            <div className="p-4 md:w-2/4 flex flex-col gap-y-2 z-10 sm:w-full w-full">
              <div className="flex justify-between">
                <div className="flex gap-x-3">
                  <SettingsButton icon={soundOff} onClickIcon={soundOn} text="Включить звук" onClickText="Выключить звук"/>
                  <SettingsButton icon={animationOff} onClickIcon={animationOn} text="Включить анимацию" onClickText="Выключить анимацию"/>
                  <SettingsButton icon={shield} onClickIcon={shield} text="Честная игра" onClickText="Честная игра"/>
                </div>
                <SettingsButton icon={faq} onClickIcon={faq} text="Правила и лимиты" onClickText="Правила и лимиты" placeholder={'Как играть'}/>
              </div>

              <div className="flex gap-x-3 items-center">
                {
                  firstRow.map((item, index) => {
                    return(
                      <img src={item} alt='img' key={index}/>
                    )
                  })
                }
                <p className="ml-auto mr-0 text-sm font-semibold" style={{color: '#6a7fa1'}}>500.00₽</p>
                <span className="w-16 h-7 flex justify-center items-center rounded-md text-xs font-semibold bg-yellow-700 bg-opacity-5 text-yellow-400">x50.00</span>
              </div>

              <div className="flex gap-x-3 items-center">
                {
                  secondRow.map((item, index) => {
                    return(
                      <img src={item} alt='img' key={index}/>
                    )
                  })
                }
                <p className="ml-auto mr-0 text-sm font-semibold" style={{color: '#6a7fa1'}}>52.00₽</p>
                <span className="w-16 h-7 flex justify-center items-center rounded-md text-xs font-semibold bg-green-700 bg-opacity-5 text-green-400">x5.20</span>
              </div>

              <div className="flex gap-x-3 items-center">
                {
                  thirdRow.map((item, index) => {
                    return(
                      <img src={item} alt='img' key={index}/>
                    )
                  })
                }
                <p className="ml-auto mr-0 text-sm font-semibold" style={{color: '#6a7fa1'}}>40.00₽</p>
                <span className="w-16 h-7 flex justify-center items-center rounded-md text-xs font-semibold bg-blue-700 bg-opacity-5 text-blue-400">x4.00</span>
              </div>

              <div className="flex gap-x-3 items-center">
                {
                  fourthRow.map((item, index) => {
                    return(
                      <img src={item} alt='img' key={index}/>
                    )
                  })
                }
                <p className="ml-auto mr-0 text-sm font-semibold" style={{color: '#6a7fa1'}}>29.50₽</p>
                <span className="w-16 h-7 flex justify-center items-center rounded-md text-xs font-semibold bg-blue-700 bg-opacity-5 text-blue-400">x2.95</span>
              </div>
              
              <div className="flex gap-x-3 items-center">
                {
                  fifthRow.map((item, index) => {
                    return(
                      <img src={item} alt='img' key={index}/>
                    )
                  })
                }
                <p className="ml-auto mr-0 text-sm font-semibold" style={{color: '#6a7fa1'}}>19.50₽</p>
                <span className="w-16 h-7 flex justify-center items-center rounded-md text-xs font-semibold bg-slate-700 bg-opacity-5 text-slate-400">x1.95</span>
              </div>
              
              <div className="flex gap-x-3 items-center">
                {
                  sixthRow.map((item, index) => {
                    return(
                      <img src={item} alt='img' key={index}/>
                    )
                  })
                }
                <p className="ml-auto mr-0 text-sm font-semibold" style={{color: '#6a7fa1'}}>1.00₽</p>
                <span className="w-16 h-7 flex justify-center items-center rounded-md text-xs font-semibold bg-red-700 bg-opacity-5 text-red-400">x0.10</span>
              </div>

              <div className="flex gap-x-3 items-center">
                {
                  seventhRow.map((item, index) => {
                    return(
                      <img src={item} alt='img' key={index}/>
                    )
                  })
                }
                <p className="ml-auto mr-0 text-sm font-semibold" style={{color: '#6a7fa1'}}>0.00₽</p>
                <span className="w-16 h-7 flex justify-center items-center rounded-md text-xs font-semibold bg-red-700 bg-opacity-5 text-red-400">x0.00</span>
              </div>
            </div>
            <img src={backgroundImg} alt="backgroundImg" className="w-96 h-auto absolute md:right-0 z-0 top-1/2 -translate-y-1/2 opacity-20 md:left-auto md:-translate-x-0 sm:left-1/2 sm:-translate-x-1/2 left-1/2 -translate-x-1/2" />
          </div>

          <div className="flex rounded-md justify-between" style={{border: '3px dashed #1c232f', padding: '7.5px'}}>
            <Slot img={cookie1} />
            <Slot img={cookie2} />
            <Slot img={cookie3} />
            <Slot img={cookie4} />
            <Slot img={cookie5} />
          </div>
          <div className="flex md:gap-1 md:flex-nowrap sm:flex-wrap sm:gap-0 sm:gap-y-2 flex-wrap gap-0 gap-y-2">
            <div className="rounded-l-md bg-slate-700 h-20 px-3 py-3 md:w-2/5 sm:w-1/2 w-full flex flex-col justify-between">
              <div className="w-full flex items-center justify-between">
                <p className="text-sm font-semibold">Ставка</p>
                <div className="flex items-center justify-center gap-3">
                  <p className="text-sm font-medium text-slate-400">Авто-игра</p>
                  <div 
                    className="relative w-11 h-5 rounded-xl bg-slate-900 flex items-center" 
                    onClick={() => {setOnClick(!onClick)}}
                  >
                    <span 
                      className="w-9 h-5 rounded-xl bg-blue-700 px-2 flex items-center justify-center text-xs font-semibold cursor-pointer absolute right-0 transition-all"
                      style={onClick ? {backgroundColor: '#fff', color: '#000', left: 0} : {}}
                    >{onClick ? "OFF" : "ON"}</span>
                  </div>
                </div>
              </div>
                
              <div className="w-full flex items-center justify-between">
                <p className="text-md font-medium text-slate-400 flex gap-x-1">₽
                  <input className="outline-none border-none bg-inherit w-1/3 text-white font-medium" value={betInput} onChange={(event) => {setBetInput(Number(event.target.value))}}/>
                </p>

                <div className="flex gap-x-2 w-full justify-end">
                  <img src={half} alt="half" className="w-7 p-2 rounded-md bg-slate-600 hover:bg-slate-100 cursor-pointer" onClick={() => {setBetInput(betInput / 2)}}/>
                  <img src={x2} alt="x2" className="w-7 p-2 rounded-md bg-slate-600 hover:bg-slate-100 cursor-pointer" onClick={() => {setBetInput(betInput * 2)}}/>
                </div>
              </div>
            </div>

            <div className="rounded-r-md bg-slate-700 h-20 px-3 py-3 md:w-2/5 sm:w-1/2 w-full flex flex-col justify-between">
                <div className="flex w-full justify-between">
                  <p className="text-sm font-semibold">Риск</p>
                  <p className="text-sm font-semibold"><span className="text-sm font-medium text-slate-400">Выплата до </span>x50.00</p>
                </div>
                <div className="flex w-full justify-between overflow-x-auto">
                  <button 
                    className="bg-slate-600 text-xs font-medium text-white px-3 py-1 rounded-md hover:bg-slate-500" 
                    style={selected === 'Низкий' ? {backgroundColor: '#3d7cfd'} : {}}
                    onClick={() => {setSelected('Низкий')}}
                  >Низкий</button>
                  <button 
                    className="bg-slate-600 text-xs font-medium text-white px-3 py-1 rounded-md hover:bg-slate-500" 
                    style={selected === 'Средний' ? {backgroundColor: '#3d7cfd'} : {}}
                    onClick={() => {setSelected('Средний')}}
                  >Средний</button>
                  <button 
                    className="bg-slate-600 text-xs font-medium text-white px-3 py-1 rounded-md hover:bg-slate-500" 
                    style={selected === 'Высокий' ? {backgroundColor: '#3d7cfd'} : {}}
                    onClick={() => {setSelected('Высокий')}}
                  >Высокий</button>
                </div>
            </div>
            
            <div className="rounded-md lg:ml-1 bg-blue-600 h-20 px-3 py-3 w-1/5 flex justify-center items-center cursor-pointer button_active md:ml-0 md:mr-0 sm:ml-auto sm:mr-0 ml-auto mr-0">
                <p className="text-lg font-semibold text-white">СТАВКА</p>
            </div>
            
          </div>
        </div>
        <div className="flex xl:w-2/5 flex-col gap-y-5 lg:w-full md:w-full sm:w-full w-full">
          <div className="flex w-full bg-slate-700 rounded-3xl h-10 items-center justify-between">
            <p className="text-xs font-medium text-white py-3 px-4 rounded-3xl cursor-pointer w-1/2 text-center transition-colors" onClick={() => {setOnClickButton(false)}} style={onClickButton ? {} : {backgroundColor: 'rgb(37 99 235 / var(--tw-bg-opacity))'}}>Все ставки</p>
            <p className="text-xs font-medium text-white h-full px-4 rounded-3xl cursor-pointer w-1/2 text-center transition-colors flex items-center justify-center" onClick={() => {setOnClickButton(true)}} style={onClickButton ? {backgroundColor: 'rgb(37 99 235 / var(--tw-bg-opacity))'} : {}}>Редкие выигрыши</p>
          </div>
          <div className="relative flex w-full flex-col gap-y-2 overflow-hidden" style={{height: '600px'}}>  
              <Bet avatar={avatar} name={'Виталик Бутерин'} bet={40} multiplier={0.1}/>
              <Bet avatar={avatar} name={'Виталик Бутерин'} bet={30} multiplier={50}/>
              <Bet avatar={avatar} name={'Виталик Бутерин'} bet={40} multiplier={5.2}/>
              <Bet avatar={avatar} name={'Виталик Бутерин'} bet={40} multiplier={0.1}/>
              <Bet avatar={avatar} name={'Виталик Бутерин'} bet={40} multiplier={0.1}/>
              <Bet avatar={avatar} name={'Виталик Бутерин'} bet={40} multiplier={0.1}/>
              <Bet avatar={avatar} name={'Виталик Бутерин'} bet={40} multiplier={0.1}/>
              <Bet avatar={avatar} name={'Виталик Бутерин'} bet={40} multiplier={0.1}/>
              <Bet avatar={avatar} name={'Виталик Бутерин'} bet={40} multiplier={0.1}/>
              <Bet avatar={avatar} name={'Виталик Бутерин'} bet={40} multiplier={0.1}/>
              <Bet avatar={avatar} name={'Виталик Бутерин'} bet={40} multiplier={0.1}/>
              <Bet avatar={avatar} name={'Виталик Бутерин'} bet={40} multiplier={0.1}/>
              <Bet avatar={avatar} name={'Виталик Бутерин'} bet={40} multiplier={0.1}/>
              <p className="absolute w-max text-xs font-medium text-white bg-slate-700 px-2 py-1 rounded-xl bottom-0 left-1/2 -translate-x-1/2 text-center">Ставки отображаются выборочно</p>
          </div>
        </div>
      </section>
      <footer className="w-full mx-auto flex flex-col py-16 gap-y-6" style={{backgroundColor: '#111720'}}>
        <div className="lg:w-11/12 mx-auto flex gap-x-32 lg:flex-row md:flex-col-reverse md:w-full md:text-center md:items-center md:gap-y-5 sm:flex-col-reverse sm:w-full sm:text-center sm:items-center sm:gap-y-5 flex-col-reverse w-full text-center items-center gap-y-5">
          <div className="w-1/3 flex flex-col gap-y-3">
            <img src={logo} alt="logo" className="w-32 md:mx-auto"/>
            <p className="text-slate-400 font-semibold text-sm">
              Лакидак — увлекательные игры с доказуемо честным принципом работы и высоким уровнем отдачи (RTP) от 97%.
            </p>
            <p className="text-white font-semibold text-sm">Lucky Duck © 2024</p>
          </div>

          <div className="lg:w-1/3 flex flex-col gap-y-5 w-full">
            <h3 className="text-white font-semibold text-sm">
                Основное
            </h3>
            <p className="text-slate-400 font-semibold text-sm hover:text-white cursor-pointer">Играть в Crash</p>
            <p className="text-slate-400 font-semibold text-sm hover:text-white cursor-pointer">Бонусная программа</p>
            <p className="text-slate-400 font-semibold text-sm hover:text-white cursor-pointer">Партнерская программа</p>
            <p className="text-slate-400 font-semibold text-sm hover:text-white cursor-pointer">Доказуемо честные игры</p>
            <p className="text-slate-400 font-semibold text-sm hover:text-white cursor-pointer">Помощь и ответы на вопросы</p>
          </div>

          <div className="lg:w-1/3 flex flex-col gap-y-5 w-full">
            <h3 className="text-white font-semibold text-sm">
              Правила
            </h3>
            <p className="text-slate-400 font-semibold text-sm hover:text-white cursor-pointer">Условия предоставления услуг</p>
            <p className="text-slate-400 font-semibold text-sm hover:text-white cursor-pointer">Политика конфиденциальности</p>
            <p className="text-slate-400 font-semibold text-sm hover:text-white cursor-pointer">Политика ответственной игры</p>
            <p className="text-slate-400 font-semibold text-sm hover:text-white cursor-pointer">Условия партнерской программы</p>
            <p className="text-slate-400 font-semibold text-sm hover:text-white cursor-pointer">Политика раскрытия уязвимостей</p>
          </div>
        </div>
        <div className="lg:w-11/12 mx-auto flex justify-between mt-4 lg:flex-row md:flex-col md:items-center md:gap-y-5 sm:flex-col sm:items-center sm:gap-y-5 flex-col items-center gap-y-5">
          <div className="flex gap-x-2">
            <img src={age} alt="age" className="w-9 rounded-xl cursor-pointer"/>
            <img src={visa} alt="visa" className="w-9 rounded-xl cursor-pointer"/>
            <img src={age} alt="age" className="w-9 rounded-xl cursor-pointer"/>
          </div>
          <div className="flex gap-x-2 items-center flex-wrap justify-center gap-y-2">
            <img src={visa} alt="visa" className="w-8 h-8 rounded-full cursor-pointer"/>
            <img src={visa} alt="visa" className="w-8 h-8 rounded-full cursor-pointer"/>
            <img src={visa} alt="visa" className="w-8 h-8 rounded-full cursor-pointer"/>
            <img src={visa} alt="visa" className="w-8 h-8 rounded-full cursor-pointer"/>
            <img src={visa} alt="visa" className="w-8 h-8 rounded-full cursor-pointer"/>
            <img src={visa} alt="visa" className="w-8 h-8 rounded-full cursor-pointer"/>
            <img src={visa} alt="visa" className="w-8 h-8 rounded-full cursor-pointer"/>
            <img src={visa} alt="visa" className="w-8 h-8 rounded-full cursor-pointer"/>
            <img src={visa} alt="visa" className="w-8 h-8 rounded-full cursor-pointer"/>
            <img src={visa} alt="visa" className="w-8 h-8 rounded-full cursor-pointer"/>
            <img src={visa} alt="visa" className="w-8 h-8 rounded-full cursor-pointer"/>
            <img src={visa} alt="visa" className="w-8 h-8 rounded-full cursor-pointer"/>
          </div>
          <div className="flex gap-x-2 items-center hover:bg-green-700 hover:bg-opacity-5 px-3 py-2 rounded-lg cursor-pointer">
            <img src={lock} alt="lock" />
            <p style={{color: '#00d169'}}>256-bit encryption</p>
          </div>
        </div>
      </footer>
    </DefaultLayout>
  );
}
