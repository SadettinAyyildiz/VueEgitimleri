import Home from './components/Home'
import User from './components/user/User'
import UserStart from './components/user/UserStart'
import UserDetail from './components/user/UserDetail'
import UserEdit from './components/user/UserEdit'

export const routes = [
    { path : '', component: Home, name: 'anasayfa' },
    { path : '/user', component: User, name: 'kullanici', children: [
        { path : '', component: UserStart },
        { path : ':id', component: UserDetail },
        { path : ':id/edit', component: UserEdit, name: 'userEdit' },

    ]}
]