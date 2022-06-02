export default{
    setup(){
        const router = useRouter()
        const route = useRoute()
        const routes = router.options.routes
        console.log(route.meta,routes,router);
        return ()=>(
            <div class='w-full h-14 bg-[#508aff] flex items-center'>
                <div class='font-blod w-48 flex items-center justify-center text-white text-[22px] cursor-pointer'>
                    IOT平台
                </div>
                <div class='flex cursor-pointer text-white h-full  ' >
                    {
                        routes[0].children.map(item=>
                            <div onClick={()=>router.push(item.path)} className={`w-36 h-full  hover:bg-white hover:text-[#508aff] flex justify-center items-center ${route.meta.routeName===item.meta.routeName?'bg-white text-[#508aff]':''}`}>{item.title}</div>
                        )
                    }
                </div>
            </div>
        )
    }
}