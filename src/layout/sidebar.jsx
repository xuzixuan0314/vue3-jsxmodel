import {watch,reactive, onMounted} from 'vue'
import './sidebar.css'
export default{
    setup(){
        let sidebarList = reactive([])
        const router = useRouter()
        const route = useRoute()
        // 获取当前路由的子路由(侧边栏)
        const getRoutes =(ROUTE=route)=>{
            const routes = router.options.routes[0].children.find(item=>{return item.meta.routeName===ROUTE.meta.parentRoute})
            sidebarList = routes?.children.filter(item=>{return item.path!==''})
        }
        // 初始化函数
        const init = ()=>{
            // 获取当前路由的子路由(侧边栏)
            getRoutes()
        }
        // 初始化函数调用
        init()


        watch(route,(newV,oldV)=>{
            getRoutes(newV)
        },{
            deep:true,
            immediate:true
        })
        console.log(sidebarList,'sidebarList');
        return ()=>(
            <el-card class='w-full bg-white h-full '>
                {sidebarList.map(item=>{
                    return  item.meta.isHidden? '':<div onClick={()=>router.push(item.path)} className={`w-full h-10 flex items-center justify-center cursor-pointer text-[#909399] hover:bg-[#f6f6f8]  ${route.name===item.name?'!text-[#508aff] bg-[#ecf5ff]':''} `} >{item.title}</div>
                })}
            </el-card>
        )
    }
}