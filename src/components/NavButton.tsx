export default function NavButton({ icon, name }: {icon:any, name:string}) {
  return (
    <div className="w-full h-11 flex items-center cursor-pointer hover:bg-slate-800 rounded-lg px-4 py-3">
      <img src={icon} alt="icon" />
      <p className="ml-3 font-semibold text-sm font-col" style={{color: '#96a0af'}}>{name}</p>
    </div>
  );
}
