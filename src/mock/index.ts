import { MockMethod } from "vite-plugin-mock"
 
const mock: Array<MockMethod> = [
    {
        // 接口路径
        url: '/api/login',
        
        // 接口方法
        method: 'get',
 
        // 返回数据
        response: () => {
            return {
                status: 200,
                message: 'success',
                data: {
                    username:'123',
                    token:'666'
                }
            }
        }
    },
    {
        url: '/api/routes',
        method: 'get',
        response: () => {
            // 路由
            const routes = [
              {
                path:'/system',
                title:'系统管理',
                name:'system',
                component:'',
                children:[

                ]
              },
              {
                path:'/system',
                title:'系统管理',
                name:'system',
                component:'system/index'
              }
            ]
            return {
                status: 200,
                message: 'success',
                data: routes
            }
        }
    }
]
 
export default mock