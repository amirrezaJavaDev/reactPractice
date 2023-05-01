import React,{ useState }  from "react";
import Layout from "../../components/layout/Layout";

export default function Dashboard (){
    const [open,setOpen] = useState(true);
    const Menus =[
        {titl:"Dashboard",src:"chart_fill"},
        {titl:"Index",src:"chat"},
        {titl:"Accounts",src:"User",gap:true},
        {titl:"Schedule",src:"Calender"},
        {titl:"Search",src:"Search"},
        {titl:"Analytics",src:"Chart"},
        {titl:"Files",src:"folder",gap:true},
        {titl:"Setting",src:"setting"},
    ]
    return(
       <Layout>
           <div className="flex">
               {/* slider page */}
               <div className={`${open ? 'w-72':'w-20'}  pt-8 duration-500 h-screen bg-indigo-400 relative`}>
                   <img src="/image/control.png" className={`w-7 h-7 absolute rounded-full cursor-pointer -right-3 top-9 w-7 border-2 border-indigo-700 ${!open && "rotate-180"}`} onClick={()=>setOpen(!open)}/>
                   <div className={`flex gap-x-4 items-center`}>
                       <img src="/image/6-1.png" className={`cursor-pointer duration-500 w-16 h-[70px] ${open && "rotate-[360deg]"}`}/>
                       <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Welcome</h1>
                   </div>
                   <ul className="pt-6">
                    {
                        Menus.map((menu,index)=>(
                            <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-100">
                                <ion-icon name="albums-outline"></ion-icon>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                   {menu.titl}
                                </span>
                            </li>
                        ))
                    }
                   </ul>
               </div>
               {/*home page*/}
               <div className="p-7 text-2xl flex-1 bg-red-400">
                   <h1>Home Page</h1>
               </div>
           </div>
       </Layout>
    )
};