import {createRouter,createWebHashHistory } from 'vue-router'
import layout from '~/layout/index.jsx'
const routes = [
    {
        path: '',
        name: 'layout',
        component: layout,
        meta:{
        },
        children:[
            {
              path:'/deviceManage',
              component:()=>import('~/pages/deviceManage/index.jsx'),
              title: '设备管理',
              meta: {
                  routeName: 'deviceManage',
              },
              children: [
                  {
                    path: '',
                    redirect: '/deviceManage/deviceServeManage',
                  },
                  {
                    path: '/deviceManage/deviceServeManage',
                    name: 'deviceServeManage',
                    title: '设备服务商管理',
                    meta: {
                      parentRoute: 'deviceManage',
                    },
                    component: () => import('~/pages/deviceManage/deviceServeManage/index.jsx'),
                  },
                  {
                    path: '/deviceManage/deviceDataManage',
                    name: 'deviceDataManage',
                    title: '设备商数据拉取管理',
                    meta: {
                      parentRoute: 'deviceManage',
                    },
                    component: () => import('~/pages/deviceManage/deviceDataManage/index.jsx'),
                  },
                  {
                    path: '/deviceManage/deviceList',
                    name: 'deviceList',
                    title: '设备列表',
                    meta: {
                      parentRoute: 'deviceManage',
                    },
                    component: () => import('~/pages/deviceManage/deviceList/index.jsx'),
                  },
                  {
                    path: '/deviceManage/deviceGroup',
                    name: 'deviceGroup',
                    title: '设备分组',
                    meta: {
                      parentRoute: 'deviceManage',
                    },
                    component: () => import('~/pages/deviceManage/deviceGroup/index.jsx'),
                  },
                  {
                    path: '/deviceManage/deviceType',
                    name: 'deviceType',
                    title: '设备类型',
                    meta: {
                      parentRoute: 'deviceManage',
                    },
                    component: () => import('~/pages/deviceManage/deviceType/index.jsx'),
                  },
                ],
            },
            {
              path:'/dataManage',
              component:()=>import('~/pages/dataManage/index.jsx'),
              title: '数据管理',
              meta: {
                routeName: 'dataManage',
              },
              children: [
                  {
                    path: '',
                    redirect: '/dataManage/runData',
                  },
                  {
                    path: '/dataManage/runData',
                    name: 'runData',
                    title: '设备运行数据',
                    meta: {
                      parentRoute: 'dataManage',
                    },
                    component: () => import('~/pages/dataManage/runData/index.jsx'),
                  },
                  {
                    path: '/dataManage/runData/runDataDetail',
                    title: '设备运行数据详情',
                    name: 'runDataDetail',
                    meta: {
                      parentRoute: 'dataManage',
                      isHidden: true,
                    },
                    component: () => import('~/pages/dataManage/runData/runDataDetail.jsx'),
                  },
                  {
                    path: '/dataManage/wraningManage',
                    name: 'wraningManage',
                    title: '告警数据',
                    meta: {
                      parentRoute: 'dataManage',
                    },
                    component: () => import('~/pages/dataManage/wraningManage/index.jsx'),
                  },
                  
                ],
            },
            {
              path:'/cusmoterManage',
              component:()=>import('~/pages/cusmoterManage/index.jsx'),
              title: '平台管理',
              meta: {
                routeName: 'cusmoterManage',
              },
              children: [
                  {
                    path: '',
                    redirect: '/cusmoterManage/cusmoterList',
                  },
                  {
                    path: '/cusmoterManage/cusmoterList',
                    name: 'cusmoterList',
                    title: '已对接平台列表',
                    meta: {
                      parentRoute: 'cusmoterManage',
                    },
                    component: () => import('~/pages/cusmoterManage/cusmoterList/index.jsx'),
                  },
                  {
                    path: '/cusmoterManage/cusmoterPushManage',
                    name: 'cusmoterPushManage',
                    title: '平台数据推送管理',
                    meta: {
                      parentRoute: 'cusmoterManage',
                    },
                    component: () => import('~/pages/cusmoterManage/cusmoterPushManage/index.jsx'),
                  },
                ],
            }
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router