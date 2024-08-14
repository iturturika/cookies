import Header from "@/components/Header";
import DefaultLayout from "@/layouts/default";
import backgroundImg from '../assets/images/6a34312.png';
export default function IndexPage() {
  
  return (
    <DefaultLayout>
      <Header />
      <section className="w-3/4 mx-auto flex gap-y-5">
        <div className="w-3/4 flex flex-col h-80" >
          <div 
            className="w-full h-full flex rounded-lg bg-slate-700 overflow-hidden"
          >
            <div className="p-4 w-2/4 flex flex-col">
            
            </div>
            <img src={backgroundImg} alt="backgroundImg" className="w-2/4 h-auto" />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
