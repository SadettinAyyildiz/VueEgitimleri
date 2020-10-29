import Home from './components/Home'
import User from './components/user/User'
import UserStart from './components/user/UserStart'
import UserDetail from './components/user/UserDetail'
import UserEdit from './components/user/UserEdit'
import Header from './components/Header.vue'

export const routes = [
    { path : '', name: 'anasayfa', components: {
        default: Home,
        "header-top": Header,
    } },
    { path : '/user', name: 'kullanici', 
    components: {
        default: User,
        "header-bottom": Header
    },
    children: [
        { path : '', component: UserStart },
        { path : ':id', component: UserDetail },
        { path : ':id/edit', component: UserEdit, name: 'userEdit' },

    ]},
    { path: "redirect", redirect: {name: 'anasayfa'}},
    { path: "*", redirect: '/'}
]