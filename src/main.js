import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//图片懒加载
import VueLazyload from 'vue-lazyload'
//引入全局样式文件
import '@/assets/scss/index.scss'
//loading引入
import loadingDirective from "@/components/base/Loading/directive";
import noResultDirective from "@/components/base/No-result/directive";

createApp(App)
    .use(VueLazyload, {
        error: require('@/assets/images/error.png'),
        loading: require('@/assets/images/loading.png')
    })
    .directive('loading', loadingDirective)
    .directive('no-result', noResultDirective)
    .use(store)
    .use(router)
    .mount('#app')
