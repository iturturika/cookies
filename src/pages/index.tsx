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
import Slot from "@/components/Slot";

export default function IndexPage() {
  const firstRow = [man100, man100, man100, man100, man100];
  const secondRow = [man100, man100, man100, man100, man0];
  const thirdRow = [man100, man100, man100, manoutlined, manoutlined];
  const fourthRow = [man100, man100, man100, man0, man0];
  const fifthRow = [man100, man100, manoutlined, manoutlined, man0];
  const sixthRow = [man100, man100, man0, man0, man0];
  const seventhRow = [man0, man0, man0, man0, man0];
  return (
    <DefaultLayout>
      <Header />
      <section className="w-3/4 mx-auto flex gap-y-5">
        <div className="w-3/4 flex flex-col h-80 gap-y-3" >
          <div 
            className="w-full h-full flex rounded-lg bg-slate-700"
          >
            <div className="p-4 w-2/4 flex flex-col gap-y-2">
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
            <img src={backgroundImg} alt="backgroundImg" className="w-2/4 h-auto" />
          </div>

          <div className="flex rounded-md justify-between" style={{border: '3px dashed #1c232f', padding: '7.5px'}}>
            <Slot img={cookie1} />
            <Slot img={cookie2} />
            <Slot img={cookie3} />
            <Slot img={cookie4} />
            <Slot img={cookie5} />
          </div>
          
        </div>
      </section>
    </DefaultLayout>
  );
}
