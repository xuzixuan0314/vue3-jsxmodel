import Header from './header.jsx';
import Sidebar from './sidebar.jsx';
export default{
    component:{
        Header,
        Sidebar
    },
    setup(){
        return ()=>(
        <div class='flex flex-col w-full h-full '>
            <Header class='w-full h-12' />
            <div class='flex-1 mt-2 flex'>
                <Sidebar class='h-full w-48  !rounded-xl'/>
                <router-view class='flex-1 h-full ml-4'></router-view>
            </div>
            
        </div>
        )
    }
}