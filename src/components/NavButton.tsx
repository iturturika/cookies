export default function NavButton({ icon, name, selected, setSelected }: {icon:any, name:string, selected:string, setSelected:any}) {
  return (
    <div 
      className="w-full h-11 flex items-center cursor-pointer hover:bg-slate-800 rounded-lg px-4 py-3" 
      style={selected === name ? {backgroundColor: '#2b2f3c'} : {}} 
      onClick={() => {setSelected(name)}}
    >
      <img src={icon} alt="icon" />
      <p className="ml-3 font-semibold text-sm font-col xl:flex lg:hidden md:hidden sm:hidden" style={{color: '#96a0af'}}>{name}</p>
    </div>
  );
}
