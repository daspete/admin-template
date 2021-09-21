import path from 'path'

export default function UserModule(moduleOptions){
    const options = Object.assign({}, this.options.assetsmodule, moduleOptions)

    this.addPlugin({
        src: path.resolve(__dirname, 'plugins/index.js'),
        fileName: 'plugins/media.js'
    })

    this.extendRoutes((routes) => {
        let rootPath = routes.find((route) => {
            return route.path === '/'
        })

        if(!rootPath) throw new Exception('Root path not found')

        rootPath.children.push(
            {
                name: 'media',
                path: '/media',
                component: '~/modules/media/pages/index.vue',
            },
            {
                name: 'media_create',
                path: '/media/create',
                component: '~/modules/media/pages/create.vue'
            }
        )
    })
}

