import {computed} from 'vue'

export default {
    props:{
        options:{
            required:true,
            type:Array
        },
        selectArr:{
            required:true,
            type:Object
        }
    },
    setup(props,{emit}){
        // 双向数据绑定
        const selectArr = computed({
            get(){
                return props.selectArr
            },
            set(value){
                console.log(value,'sssss');
                return emit('update:selectArr',value)
            }
        })
        console.log(selectArr.value);
        // 显示
        const showType = (item,index)=>{
            console.log(item,index,'调用了没有');
            if(item.type==='select'){
                return <el-select placeholder={item.placeholder||'请选择'} v-model={selectArr.value[Object.keys(selectArr.value)[index]]}>
                        {item.options.map((el,indesc)=>{
                            return <el-option key={indesc} lable={el.label} value={el.value}></el-option>
                        })}
                    </el-select>
            }else{
                return <el-input v-model={selectArr.value[Object.keys(selectArr.value)[index]]} placeholder={item.placeholder||'请输入'}></el-input>
            }
        }
        return ()=>(
        //     <div className='flex'>
        //             {props.options.map((item,index)=>{
        //                 return <div key={index}>{showType(item,index)}</div> 
        //             })}
        //     </div>
            <div className='flex'>
                <el-form className='flex items-center' >
                    {props.options.map((item,index)=>{
                        return <el-form-item class='!mb-0 mr-4' label={item.label} label-width={item.labelWidth||''} label-position={item.labelPosition||''}>
                        {item.type==='select'
                        ?<el-select placeholder={item.placeholder||'请选择'} v-model={selectArr.value[Object.keys(selectArr.value)[index]]}>
                            {item.options.map(el=>{
                                return <el-option lable={el.label} value={el.value}></el-option>
                            })}
                        </el-select>
                        :<el-input v-model={selectArr.value[Object.keys(selectArr.value)[index]]} placeholder={item.placeholder||'请输入'}></el-input>}
                    </el-form-item>
                    })}
                </el-form>
                <div class='ml-auto'>
                    <el-button type='primary'>查询</el-button>
                    <el-button type='default'>重置</el-button>
                </div>
            </div>
        )
    }
}