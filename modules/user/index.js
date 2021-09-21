import path from 'path'

export default function UserModule(moduleOptions){
    const options = Object.assign({}, this.options.usermodule, moduleOptions)

    this.addPlugin({
        src: path.resolve(__dirname, 'plugins/index.js'),
        fileName: 'plugins/users.js'
        // fileName: 'users.server.js'
    })

    this.extendRoutes((routes) => {
        let rootPath = routes.find((route) => {
            return route.path === '/'
        })

        if(!rootPath) throw new Exception('Root path not found')

        rootPath.children.push(
            {
                name: 'users',
                path: '/users',
                component: '~/modules/user/pages/index.vue',
            },
            {
                name: 'users_create',
                path: '/users/create',
                component: '~/modules/user/pages/create.vue'
            }
        )
    })
}

