import {reactive} from 'vue'
export default{
    name:'deviceServeManage',
    components:{
    },
    setup(){
        const options = reactive([
            {
                label:'服务商名称',
            },
            {
                label:'服务商',
                type:'select',
                options:[
                    {
                        label:'服务商1',
                        value:1
                    },
                    {
                        label:'服务商2',
                        value:2
                    }
                ]
            }
        ])
        const selectArr = reactive({
            name:'',
            curtomer:''
        }
        )
        return ()=>(
            <div className="w-full h-full">
                <div className="p-4 bg-white">
                    <IotSelect options={options} v-model:selectArr={selectArr}></IotSelect>
                </div>
            </div>
        )
    }
}