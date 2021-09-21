export default {
    components: true,

    // watch: [
    //     '~/modules/**/*',
    //     '~/store/**/*',
    // ],

    modules: [
        'portal-vue/nuxt',
        '~/modules/user',
        '~/modules/media',
    ],

    buildModules: [
        '@nuxtjs/fontawesome',
        '@nuxtjs/tailwindcss',
    ],

    fontawesome: {
        icons: {
            solid: [
                'faPlusCircle',
                'faMinusCircle',
                'faFolder',
                'faGlobe',
                'faFile',
                'faBars',
                'faEllipsisV',
                'faEyeSlash',
                'faEye',
                'faCheckCircle',
                'faNewspaper',
                'faSync',
                'faTimes', 
                'faStream',
                'faSitemap'
            ],
            regular: [
                'faPlusSquare',
                'faMinusSquare',
            ],
        },
    },

    tailwindcss: {
        // jit: true,
    },

    // usermodule: {
    //     myOption: true
    // },

    storybook: {
        stories: [],

        webpackFinal(config){
            return config
        },
    },
}