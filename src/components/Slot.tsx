export default function Slot({img}:{img:any}){
  return(
    <div className="relative w-32 h-56 flex flex-col justify-center items-center">
      <img src={img} alt="cookie1" className="bounce absolute z-10"/>
      <div className="relative w-full h-11 rounded-md bg-slate-700 border-b-8 border-slate-800">
        <span 
          className="absolute animationCircle" 
          style={{borderRadius: '50%', backgroundColor: '#000', opacity: '.15'}}
        />
      </div>
    </div>
  )
}